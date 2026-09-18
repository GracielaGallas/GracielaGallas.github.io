const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

const subtitles = [
    "QA professional with extensive experience in testing, automation, and software quality assurance.",
    "Solid experience delivering stable, high-value products to the business.",
    "I find the bugs so your users don't have to.",
    "Works on my machine is not a test result.",
    "I write tests for the edge cases you swore would never happen.",
    "10+ years of politely asking software \"but what if...?\"",
    "Automation that's boring in the best way: green, fast, and trustworthy.",
    "I break things on purpose so they don't break by accident.",
];
const subtitleEl = document.getElementById("subtitle");

function pickSubtitle(current) {
    let next = subtitles[Math.floor(Math.random() * subtitles.length)];
    while (next === current && subtitles.length > 1) {
        next = subtitles[Math.floor(Math.random() * subtitles.length)];
    }
    return next;
}

if (subtitleEl) {
    subtitleEl.addEventListener("click", () => {
        subtitleEl.textContent = pickSubtitle(subtitleEl.textContent);
    });
}

const avatarContainer = document.querySelector(".avatar-container");

if (avatarContainer) {
    let holdStartTime = null;

    function startHold() {
        avatarContainer.classList.add("switched");
        holdStartTime = Date.now();
    }

    function endHold() {
        const held = holdStartTime ? Date.now() - holdStartTime : 0;
        if (held >= 10000) {
            document.body.classList.add("glitch-mode");
            const h1 = document.querySelector("h1");
            if (h1) h1.textContent = "Graciela";
            return;
        }
        avatarContainer.classList.remove("switched");
        holdStartTime = null;
    }

    avatarContainer.addEventListener("mousedown", startHold);
    avatarContainer.addEventListener("mouseup", endHold);
    avatarContainer.addEventListener("mouseleave", () => {
        avatarContainer.classList.remove("switched");
        holdStartTime = null;
    });
    avatarContainer.addEventListener("touchstart", (e) => {
        e.preventDefault();
        startHold();
    });
    avatarContainer.addEventListener("touchend", endHold);
    avatarContainer.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            startHold();
        }
    });
    avatarContainer.addEventListener("keyup", (e) => {
        if (e.key === "Enter" || e.key === " ") endHold();
    });
}
