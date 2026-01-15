const cardsBtn = document.querySelector(".js-cards-mode");
const linesBtn = document.querySelector(".js-line-mode");

const cardsBlock = document.querySelector(".js-cards");
const linesBlock = document.querySelector(".js-lines");

if (cardsBtn && linesBtn && cardsBlock && linesBlock) {
  cardsBtn.addEventListener("click", () => {
    linesBlock.classList.remove("selected");
    linesBtn.classList.remove("selected");

    cardsBtn.classList.add("selected");
    cardsBlock.classList.add("selected");
  });

  linesBtn.addEventListener("click", () => {
    cardsBtn.classList.remove("selected");
    cardsBlock.classList.remove("selected");

    linesBtn.classList.add("selected");
    linesBlock.classList.add("selected");
  });
}
