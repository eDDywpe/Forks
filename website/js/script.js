const commandsData = {
  admin: {
    icon: "📜",
    title: "Admin",
    commands: [
      { name: "/autorole", description: "Setup role to be given when a member joins the server. <br><br><b>Subcommands:</b> add, remove", permission: "Admin" },
      { name: "/counter", description: "Setup counter channel in the guild", permission: "Admin" },
      { name: "/embed", description: "Send embed message", permission: "Admin" },
      { name: "/flagtranslation", description: "Configure flag translation in the server", permission: "Admin" },
      { name: "/farewell", description: "Setup farewell message. <br><br><b>Subcommands:</b> status, preview, channel, desc, thumbnail, color, footer, image", permission: "Admin" },
      { name: "/welcome", description: "Setup welcome message. <br><br><b>Subcommands:</b> status, preview, channel, desc, thumbnail, color, footer, image", permission: "Admin" },
      { name: "/maxwarn", description: "Set max warnings configuration. <br><br><b>Subcommands:</b> limit, action", permission: "Admin" },
      { name: "/modlog", description: "Enable or disable moderation logs", permission: "Admin" },
      { name: "/addrr", description: "Setup reaction role for the specified message", permission: "Admin" },
      { name: "/removerr", description: "Remove configured reaction for the specified message", permission: "Admin" },
      { name: "/setprefix", description: "Sets a new prefix for this server", permission: "Admin" }
    ]
  },
  automod: {
    icon: "⚙️",
    title: "Automod",
    commands: [
      { name: "/anti", description: "Manage various automod settings for the server. <br><br><b>Subcommands:</b> ghostping, spam, massmention", permission: "Mod" },
      { name: "/autodelete", description: "Manage the autodelete settings for the server. <br><br><b>Subcommands:</b> attachments, invites, links, maxlines", permission: "Mod" },
      { name: "/automod", description: "Various automod configuration. <br><br><b>Subcommands:</b> status, strikes, action, debug, whitelist, whitelistadd, whitelistremove", permission: "Mod" }
    ]
  },
  anime: {
    icon: "🎮",
    title: "Anime",
    commands: [
      { name: "/react", description: "Anime reactions", permission: "All" }
    ]
  },
  economy: {
    icon: "💰",
    title: "Economy",
    commands: [
      { name: "/bank", description: "Access to bank operations. <br><br><b>Subcommands:</b> balance, deposit, withdraw, transfer", permission: "All" },
      { name: "/beg", description: "Beg from someone", permission: "All" },
      { name: "/daily", description: "Receive a daily bonus", permission: "All" },
      { name: "/gamble", description: "Try your luck by gambling", permission: "All" }
    ]
  },
  fun: {
    icon: "🎉",
    title: "Fun",
    commands: [
      { name: "/animal", description: "Shows a random animal image", permission: "All" },
      { name: "/facts", description: "Shows a random animal facts", permission: "All" },
      { name: "/flip", description: "Flips a coin or message. <br><br><b>Subcommands:</b> coin, text", permission: "All" },
      { name: "/meme", description: "Get a random meme", permission: "All" },
      { name: "/snake", description: "Play snake game on discord", permission: "All" },
      { name: "/together", description: "Discord together", permission: "All" }
    ]
  },
  giveaway: {
    icon: "🎁",
    title: "Giveaway",
    commands: [
      { name: "/giveaway", description: "Giveaway commands. <br><br><b>Subcommands:</b> start, pause, resume, end, reroll, list, edit", permission: "Mod" }
    ]
  },
  image: {
    icon: "🖼️",
    title: "Image",
    commands: [
      { name: "/filter", description: "Add filter to the provided image. Available filters: blur, brighten, burn, darken, distort, greyscale, invert, pixelate, sepia, sharpen, threshold", permission: "All" },
      { name: "/generator", description: "Generates a meme for the provided image. <br><br><b>Available generators:</b> ad, affect, beautiful, bobross, challenger, confusedstonk, delete, dexter, facepalm, hitler, jail, jokeoverhead, karaba, kyon-gun, mms, notstonk, poutine, rip, shit, stonk, tattoo, thomas, trash, wanted, worthless", permission: "All" },
      { name: "/overlay", description: "Add overlay over the provided image", permission: "All" }
    ]
  },
  invite: {
    icon: "📩",
    title: "Invite",
    commands: [
      { name: "/addinvites", description: "Add invites to a member", permission: "Mod" },
      { name: "/invitecodes", description: "List all your invite codes in this guild", permission: "All" },
      { name: "/inviter", description: "Shows inviter information", permission: "All" },
      { name: "/inviterank", description: "Configure invite ranks. <br><br><b>Subcommands:</b> add, remove", permission: "Mod" },
      { name: "/inviteranks", description: "Shows the invite ranks configured on this guild", permission: "All" }
    ]
  },
  information: {
    icon: "ℹ️",
    title: "Information",
    commands: [
      { name: "/leaderboard", description: "Display the XP, invite and rep leaderboard", permission: "All" },
      { name: "/ping", description: "Shows the current ping from the bot to the discord servers", permission: "All" },
      { name: "/bot", description: "Bot related commands. <br><br><b>Subcommands:</b> invite, stats, uptime", permission: "All" },
      { name: "/info", description: "Show various information. <br><br><b>Subcommands:</b> user, channel, guild, bot, avatar, emoji", permission: "All" }
    ]
  },
  moderation: {
    icon: "🛡️",
    title: "Moderation",
    commands: [
      { name: "/ban", description: "Bans the specified member", permission: "Mod" },
      { name: "/kick", description: "Kicks the specified member", permission: "Mod" },
      { name: "/nick", description: "Nickname commands. <br><br><b>Subcommands:</b> set, reset", permission: "Mod" },
      { name: "/purge", description: "Purge commands. <br><br><b>Subcommands:</b> all, attachments, bots, links, token, user", permission: "Mod" },
      { name: "/voice", description: "Voice moderation commands. <br><br><b>Subcommands:</b> mute, unmute, deafen, undeafen, kick, move", permission: "Mod" },
      { name: "/softban", description: "Softban the specified member. Kicks and deletes messages", permission: "Mod" },
      { name: "/timeout", description: "Timeouts the specified member", permission: "Mod" },
      { name: "/unban", description: "Unbans the specified member", permission: "Mod" },
      { name: "/untimeout", description: "Remove timeout from a member", permission: "Mod" },
      { name: "/warn", description: "Warns the specified member", permission: "Mod" },
      { name: "/warnings", description: "List or clear user warnings. <br><br><b>Subcommands:</b> list, clear", permission: "Mod" }
    ]
  },
  music: {
    icon: "🎵",
    title: "Music",
    commands: [
      { name: "/bassboost", description: "Set bassboost level", permission: "All" },
      { name: "/loop", description: "Loops the song or queue", permission: "All" },
      { name: "/lyric", description: "Find lyric of the song", permission: "All" },
      { name: "/np", description: "Shows what track is currently being played", permission: "All" },
      { name: "/pause", description: "Pause the music player", permission: "All" },
      { name: "/play", description: "Play a song from youtube", permission: "All" },
      { name: "/queue", description: "Displays the current music queue", permission: "All" },
      { name: "/resume", description: "Resumes the music player", permission: "All" },
      { name: "/search", description: "Search for matching songs on youtube", permission: "All" },
      { name: "/seek", description: "Sets the playing track's position to the specified position", permission: "All" },
      { name: "/shuffle", description: "Shuffle the queue", permission: "All" },
      { name: "/skip", description: "Skip the current song", permission: "All" },
      { name: "/stop", description: "Stop the music player", permission: "All" },
      { name: "/volume", description: "Set the music player volume", permission: "All" }
    ]
  },
  owner: {
    icon: "👑",
    title: "Owner",
    commands: [
      { name: "no command", description: "no commands", permission: "Owner" },
    ]
  },
  social: {
    icon: "🤝",
    title: "Social",
    commands: [
      { name: "/rep", description: "Give reputation to a user. <br><br><b>Subcommands:</b> view, give", permission: "All" }
    ]
  },
  statistics: {
    icon: "📊",
    title: "Statistics",
    commands: [
      { name: "/rank", description: "Displays member's rank in this server", permission: "All" },
      { name: "/stats", description: "Displays member's stats in this server", permission: "All" },
      { name: "/statstracking", description: "Enable or disable tracking stats in the server", permission: "Mod" },
      { name: "/levelup", description: "Configure the levelling system. <br><br><b>Subcommands:</b> message, channel", permission: "Mod" }
    ]
  },
  suggestion: {
    icon: "💡",
    title: "Suggestion",
    commands: [
      { name: "/suggest", description: "Submit a suggestion", permission: "All" },
      { name: "/suggestion", description: "Configure suggestion system. <br><br><b>Subcommands:</b> status, channel, appch, rejch, approve, reject, staffadd, staffremove", permission: "Mod" }
    ]
  },
  ticket: {
    icon: "🎫",
    title: "Ticket",
    commands: [
      { name: "/ticket", description: "Various ticketing commands. <br><br><b>Subcommands:</b> setup, log, limit, close, closeall, add, remove", permission: "Mod" },
      { name: "/ticketcat", description: "Manage ticket categories. <br><br><b>Subcommands:</b> list, add, remove", permission: "Mod" }
    ]
  },
  utility: {
    icon: "🛠️",
    title: "Utility",
    commands: [
      { name: "/bigemoji", description: "Enlarge an emoji", permission: "All" },
      { name: "/covid", description: "Get covid statistics for a country", permission: "All" },
      { name: "/github", description: "Shows github statistics of a user", permission: "All" },
      { name: "/help", description: "Command help menu", permission: "All" },
      { name: "/paste", description: "Paste something in sourceb.in", permission: "All" },
      { name: "/pokedex", description: "Shows pokemon information", permission: "All" },
      { name: "/proxies", description: "Fetch proxies. Available types: http, socks4, socks5", permission: "All" },
      { name: "/translate", description: "Translate from one language to another", permission: "All" },
      { name: "/urban", description: "Searches the urban dictionary", permission: "All" },
      { name: "/weather", description: "Get weather information", permission: "All" }
    ]
  }
};


function createCategoryButton(key, category) {
  return `
        <div class="bg-white/5 rounded-2xl border border-white/10" id="${key}-container">
            <button class="w-full px-8 py-6 flex justify-between items-center text-2xl font-semibold" 
                    onclick="toggleCategory('${key}')">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                        ${category.icon}
                    </div>
                    <span>${category.title}</span>
                </div>
                <svg class="w-6 h-6 transform transition-transform" id="${key}-arrow"
                     xmlns="http:
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div class="hidden px-8 pb-6 space-y-4" id="${key}-commands">
                <!-- Commands will be loaded here when category is opened -->
            </div>
        </div>
    `;
}

function createCommandHTML(cmd) {
  return `
        <div class="command-card bg-white/5 p-6 rounded-xl border border-white/10">
            <div class="flex justify-between items-start">
                <div>
                    <h4 class="text-xl font-semibold mb-2">${cmd.name}</h4>
                    <p class="text-white/70">${cmd.description}</p>
                </div>
                <span class="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm">
                    ${cmd.permission}
                </span>
            </div>
        </div>
    `;
}

const loadedCategories = new Set();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 500);
    }
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

gsap.from("#hero-subheading", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  delay: 0.7,
  ease: "power4.out",
});

gsap.from("#hero-button1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power4.out",
});

gsap.from("#hero-button2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.2,
  ease: "power4.out",
});

gsap.from("#hero-logo", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from("#hero h1", {
      opacity: 0,
      y: 100,
      duration: 1,
    })
    .from(
      "#hero p",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.5",
    )
    .from(
      "#hero button",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from(
      "#hero img",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      "-=0.5",
    );
}

function initFeaturesAnimations() {
  const cards = gsap.utils.toArray(".feature-card");

  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function toggleCategory(category) {
  const container = document.getElementById(`${category}-commands`);
  const arrow = document.getElementById(`${category}-arrow`);
  const cards = container.querySelectorAll(".command-card");

  if (container.classList.contains("hidden")) {
    container.classList.remove("hidden");

    arrow.classList.add("rotate");

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 100);
    });
  } else {
    cards.forEach((card) => {
      card.classList.remove("show");
    });

    arrow.classList.remove("rotate");

    setTimeout(() => {
      container.classList.add("hidden");
    }, 300);
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector("nav").offsetHeight;

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (this.getAttribute("href") === "#commands") {
          gsap.to("#commands", {
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          });
        }
      }
    });
  });
}

function initScrollAnimations() {
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=100",
      toggleClass: { targets: "nav", className: "nav-blur" },
      scrub: true,
    },
  });

  gsap.from("#commands .bg-white\\/5", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#commands",
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
}

document.addEventListener("DOMContentLoaded", initializeWebsite);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 500);
    }
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

gsap.from("#hero-subheading", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  delay: 0.7,
  ease: "power4.out",
});

gsap.from("#hero-button1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power4.out",
});

gsap.from("#hero-button2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.2,
  ease: "power4.out",
});

gsap.from("#hero-logo", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from("#hero h1", {
      opacity: 0,
      y: 100,
      duration: 1,
    })
    .from(
      "#hero p",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.5",
    )
    .from(
      "#hero button",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from(
      "#hero img",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      "-=0.5",
    );
}

function initFeaturesAnimations() {
  const cards = gsap.utils.toArray(".feature-card");

  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function toggleCategory(category) {
  const commandsDiv = document.getElementById(`${category}-commands`);
  const arrow = document.getElementById(`${category}-arrow`);

  if (!loadedCategories.has(category)) {
    const commandsHTML = commandsData[category].commands
      .map((cmd) => createCommandHTML(cmd))
      .join("");
    commandsDiv.innerHTML = commandsHTML;
    loadedCategories.add(category);
  }

  commandsDiv.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector("nav").offsetHeight;

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (this.getAttribute("href") === "#commands") {
          gsap.to("#commands", {
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          });
        }
      }
    });
  });
}

function initScrollAnimations() {
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=100",
      toggleClass: { targets: "nav", className: "nav-blur" },
      scrub: true,
    },
  });

  gsap.from("#commands .bg-white\\/5", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#commands",
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
}

function initializeWebsite() {
  initHeroAnimations();
  initFeaturesAnimations();
  initScrollAnimations();
  initSmoothScroll();

  const ctaButtons = document.querySelectorAll(".gradient-bg");
  ctaButtons.forEach((button) => button.classList.add("pulse-on-hover"));

  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => card.classList.add("shine-effect"));
}
async function updateGitHubStats() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/redolenthalo/discord-bot-website-template",
    );
    const data = await response.json();

    document.getElementById("stars-count").textContent =
      `${data.stargazers_count} Stars`;
    document.getElementById("forks-count").textContent =
      `${data.forks_count} Forks`;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
  }
}

updateGitHubStats();
setInterval(updateGitHubStats, 300000);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  const button = document.querySelector('[onclick="scrollToTop()"]');
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    button.style.opacity = "1";
    button.style.pointerEvents = "auto";
  } else {
    button.style.opacity = "0";
    button.style.pointerEvents = "none";
  }
};

document.addEventListener("DOMContentLoaded", initializeWebsite);
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("commands-container");

  const categoriesHTML = Object.entries(commandsData)
    .map(([key, category]) => createCategoryButton(key, category))
    .join("");

  container.innerHTML = categoriesHTML;
});

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.querySelector(".menu-icon");
  const menuButton = document.querySelector(".md\\:hidden button");

  if (mobileMenu.classList.contains("hidden")) {
    // Show menu
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("animate-fade-in");
    menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
  } else {
    // Hide menu
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-in");
    menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  }

  // Stop event propagation
  event.stopPropagation();
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuButton = document.querySelector(".md\\:hidden button");

  // Only close if menu is open and click is outside menu and button
  if (
    !mobileMenu.classList.contains("hidden") &&
    !mobileMenu.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-in");
    document
      .querySelector(".menu-icon")
      .setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  }
});

// Prevent menu from closing when clicking inside
document.getElementById("mobileMenu")?.addEventListener("click", (e) => {
  e.stopPropagation();
});
