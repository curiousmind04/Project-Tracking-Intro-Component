const hamburger = document.querySelector(".hamburger-icon");
const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".close-icon");
const mobileLinks = document.querySelectorAll(".mobile-nav li");

hamburger.addEventListener("click", () => {
  modal.style.display = "block";
  hamburger.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  modal.style.display = "none";
  hamburger.style.display = "block";
  closeIcon.style.display = "none";
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    modal.style.display = "none";
    hamburger.style.display = "block";
    closeIcon.style.display = "none";
  });
});
