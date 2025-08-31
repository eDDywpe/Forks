const { CommandCategory, BotClient } = require("@src/structures");
const { EMBED_COLORS, SUPPORT_SERVER } = require("@root/config.js");
const {
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ButtonBuilder,
  ApplicationCommandOptionType,
  ButtonStyle,
} = require("discord.js");
const { getCommandUsage, getSlashUsage } = require("@handlers/command");

const CMDS_PER_PAGE = 5;
const IDLE_TIMEOUT = 30;

/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "help",
  description: "command help menu",
  category: "UTILITY",
  botPermissions: ["EmbedLinks"],
  command: {
    enabled: true,
    usage: "[command]",
  },
  slashCommand: {
    enabled: true,
    options: [
      {
        name: "command",
        description: "name of the command",
        required: false,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },

  async messageRun(message, args, data) {
    const trigger = args[0];
    const user = message.author;

    if (!trigger) {
      const response = await getHelpMenu(message, user);
      const sentMsg = await message.safeReply(response);
      return waiter(sentMsg, user.id, data.prefix);
    }

    const cmd = message.client.getCommand(trigger);
    if (cmd) {
      const embed = getCommandUsage(cmd, data.prefix, trigger);
      return message.safeReply({ embeds: [embed] });
    }

    await message.safeReply("No matching command found");
  },

  async interactionRun(interaction) {
    const cmdName = interaction.options.getString("command");
    const user = interaction.user;

    if (!cmdName) {
      const response = await getHelpMenu(interaction, user);
      const sentMsg = await interaction.followUp(response);
      return waiter(sentMsg, user.id);
    }

    const cmd = interaction.client.slashCommands.get(cmdName);
    if (cmd) {
      const embed = getSlashUsage(cmd);
      return interaction.followUp({ embeds: [embed] });
    }

    await interaction.followUp("No matching command found");
  },
};

/**
 * Generates the main help menu embed
 * @param {Message|CommandInteraction} source
 * @param {User} user
 */
async function getHelpMenu(source, user) {
  const client = source.client;

  const options = Object.entries(CommandCategory)
    .filter(([k, v]) => v.enabled !== false)
    .map(([k, v]) => ({
      label: v.name,
      value: k,
      description: `View commands in ${v.name} category`,
      emoji: v.emoji,
    }));

  const menuRow = new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId("help-menu")
      .setPlaceholder("Choose the command category")
      .addOptions(options)
  );

  const buttonsRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("previousBtn")
      .setEmoji("⬅️")
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(true),
    new ButtonBuilder()
      .setCustomId("nextBtn")
      .setEmoji("➡️")
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(true)
  );

  const embed = new EmbedBuilder()
    .setColor(EMBED_COLORS.BOT_EMBED)
    .setThumbnail(client.user.displayAvatarURL())
    .setImage("https://cdn.discordapp.com/attachments/997112582303391754/1411536296874082415/nextgen1.png")
    .setTimestamp()
    .setFooter({ text: `Requested by ${user.username}`, iconURL: user.displayAvatarURL() })
    .setDescription(
      "**HELP:**\nDisplays a list of all available commands and their descriptions.\n\n" +
      `**Invite Me:** [Here](${client.getInvite()})\n` +
      `**Support Server:** [Join](https://discord.gg/${SUPPORT_SERVER})`
    );

  return { embeds: [embed], components: [menuRow, buttonsRow] };
}

/**
 * Handles help menu buttons/selection
 */
const waiter = (msg, userId, prefix) => {
  const collector = msg.channel.createMessageComponentCollector({
    filter: (reactor) => reactor.user.id === userId && msg.id === reactor.message.id,
    idle: IDLE_TIMEOUT * 1000,
    dispose: true,
    time: 5 * 60 * 1000,
  });

  let arrEmbeds = [];
  let currentPage = 0;
  let menuRow = msg.components[0];
  let buttonsRow = msg.components[1];

  collector.on("collect", async (response) => {
    if (!["help-menu", "previousBtn", "nextBtn"].includes(response.customId)) return;
    await response.deferUpdate();

    switch (response.customId) {
      case "help-menu": {
        const cat = response.values[0].toUpperCase();
        arrEmbeds = prefix ? getMsgCategoryEmbeds(msg.client, cat, prefix) : getSlashCategoryEmbeds(msg.client, cat);
        currentPage = 0;

        const components = buttonsRow.components.map((button) =>
          ButtonBuilder.from(button).setDisabled(arrEmbeds.length > 1 ? false : true)
        );
        buttonsRow = new ActionRowBuilder().addComponents(components);

        if (msg.editable) await msg.edit({ embeds: [arrEmbeds[currentPage]], components: [menuRow, buttonsRow] });
        break;
      }

      case "previousBtn":
        if (currentPage > 0) {
          currentPage--;
          if (msg.editable) await msg.edit({ embeds: [arrEmbeds[currentPage]], components: [menuRow, buttonsRow] });
        }
        break;

      case "nextBtn":
        if (currentPage < arrEmbeds.length - 1) {
          currentPage++;
          if (msg.editable) await msg.edit({ embeds: [arrEmbeds[currentPage]], components: [menuRow, buttonsRow] });
        }
        break;
    }
  });

  collector.on("end", () => {
    if (!msg.guild || !msg.channel) return;
    if (msg.editable) msg.edit({ components: [] });
  });
};

/**
 * Helper: Generates message command embeds
 */
function getMsgCategoryEmbeds(client, category, prefix) {
  const commands = client.commands.filter(cmd => cmd.category === category);
  if (!commands.length) return [
    new EmbedBuilder()
      .setColor(EMBED_COLORS.BOT_EMBED)
      .setAuthor({ name: `${category} Commands` })
      .setDescription("No commands in this category")
  ];

  const embed = new EmbedBuilder()
    .setColor(EMBED_COLORS.BOT_EMBED)
    .setAuthor({ name: `${category} Commands` })
    .setDescription(commands.map(cmd => `\`${prefix}${cmd.name}\` - ${cmd.description}`).join("\n"));

  return [embed];
}

/**
 * Helper: Generates slash command embeds
 */
function getSlashCategoryEmbeds(client, category) {
  const commands = Array.from(client.slashCommands.filter(cmd => cmd.category === category).values());
  if (!commands.length) return [
    new EmbedBuilder()
      .setColor(EMBED_COLORS.BOT_EMBED)
      .setAuthor({ name: `${category} Commands` })
      .setDescription("No commands in this category")
  ];

  const embed = new EmbedBuilder()
    .setColor(EMBED_COLORS.BOT_EMBED)
    .setAuthor({ name: `${category} Commands` })
    .setDescription(commands.map(cmd => `\`/${cmd.name}\` - ${cmd.description}`).join("\n"));

  return [embed];
}
