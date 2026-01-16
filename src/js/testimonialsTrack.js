const track = document.querySelector(".js-track");

if (track) {
  const cards = Array.from(track.children);
  const gap = parseFloat(getComputedStyle(track).gap);

  cards.forEach((card) => {
    track.appendChild(card.cloneNode(true));
  });

  const singleSetWidth = cards.reduce((sum, el) => {
    const rect = el.getBoundingClientRect();

    return sum + rect.width + gap;
  }, 0);

  track.style.setProperty("--offset", `-${singleSetWidth}px`);

  // скорость: 100px в секунду
  const speed = 100;
  const duration = singleSetWidth / speed;

  track.style.setProperty("--duration", `${duration}s`);
}
