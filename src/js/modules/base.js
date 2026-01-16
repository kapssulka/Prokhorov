const toTopBtn = document.querySelector(".js-to-top-btn");

if (toTopBtn) {
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
