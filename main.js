const scrollTopBtn = document.getElementById("to-top");

function toggleScrollButton() {
  scrollTopBtn.style.display = window.scrollY >= 600 ? "block" : "none";
}

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", toggleScrollButton);
toggleScrollButton();
