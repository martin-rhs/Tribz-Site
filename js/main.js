// main.js
document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "en"; // default language
  applyTranslations(currentLang);

  const flagImage = document.getElementById("lang-flag");

  // Toggle language on flag click
  flagImage.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en";
    applyTranslations(currentLang);

    // Toggle the displayed flag
    if (currentLang === "en") {
      flagImage.src = "images/Flag_of_France.png";
      flagImage.alt = "Switch to French";
    } else {
      flagImage.src = "images/Flag_of_the_United_Kingdom.png";
      flagImage.alt = "Switch to English";
    }
  });

  // Intersection Observer for fade-on-scroll
  const faders = document.querySelectorAll(".fade-on-scroll");
  const options = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach((fader) => {
    observer.observe(fader);
  });
});

function applyTranslations(lang) {
  document.querySelectorAll("[data-lang-key]").forEach((el) => {
    const key = el.getAttribute("data-lang-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
}
