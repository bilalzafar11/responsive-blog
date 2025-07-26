// === Scroll-to-Top Button ===
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show or hide scroll-to-top button on scroll
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Smooth scroll to top when button is clicked
scrollTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Share Button: Copy Link Functionality ===
const shareButtons = document.querySelectorAll(".share-btn");

shareButtons.forEach((button) => {
  const originalText = button.innerText;
  button.dataset.original = originalText;

  button.addEventListener("click", () => {
    const pageLink = window.location.href;

    navigator.clipboard.writeText(pageLink)
      .then(() => {
        button.innerText = "✅ Link Copied!";
        button.classList.add("copied");

        setTimeout(() => {
          button.innerText = button.dataset.original;
          button.classList.remove("copied");
        }, 2000);
      })
      .catch(() => {
        alert("❌ Failed to copy the link.");
      });
  });
});

// === Theme Toggle (Light/Dark Mode) ===
const themeToggleBtn = document.getElementById("themeToggle");

themeToggleBtn?.addEventListener("click", () => {
  const darkModeEnabled = document.body.classList.toggle("dark-mode");
  themeToggleBtn.innerText = darkModeEnabled ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("preferred-theme", darkModeEnabled ? "dark" : "light");
});

// === Load Theme on Page Load ===
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("preferred-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggleBtn) themeToggleBtn.innerText = "☀️ Light Mode";
  }
});
