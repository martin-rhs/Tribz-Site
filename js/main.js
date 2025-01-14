// main.js
document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "en";
  applyTranslations(currentLang);

  const flagImage = document.getElementById("lang-flag");

  flagImage.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en";
    applyTranslations(currentLang);

    if (currentLang === "en") {
      flagImage.src = "images/Flag_of_France.png";
      flagImage.alt = "Switch to French";
    } else {
      flagImage.src = "images/Flag_of_the_United_Kingdom.png";
      flagImage.alt = "Switch to English";
    }
  });

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

  const subscribeForm = document.getElementById("subscribe-form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("subscribe-email");
      if (emailInput.value) {
        alert(`Thanks for subscribing with ${emailInput.value}!`);
        emailInput.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }
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
