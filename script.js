const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links a");
const yearEl = document.getElementById("year");

navToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
  });
});

document.addEventListener("click", (event) => {
  if (!navLinks || !navToggle) return;
  const target = event.target;
  const clickedInsideNav =
    navLinks.contains(target) || navToggle.contains(target);
  if (!clickedInsideNav) {
    navLinks.classList.remove("open");
  }
});

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

