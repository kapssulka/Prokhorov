window.addEventListener("load", () => {
  const track = document.querySelector(".js-track");
  if (!track) return;

  const cards = Array.from(track.children);
  const gap = parseFloat(getComputedStyle(track).gap);

  // клонируем карточки для бесконечной прокрутки
  cards.forEach((card) => track.appendChild(card.cloneNode(true)));

  const singleSetWidth = cards.reduce(
    (sum, el) => sum + el.getBoundingClientRect().width + gap,
    0,
  );

  // скорость прокрутки в px/сек
  const speed = 100;

  let start;
  function animateTrack(timestamp) {
    if (!start) start = timestamp;
    const elapsed = (timestamp - start) / 1000; // секунды
    const offset = (elapsed * speed) % singleSetWidth;
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    requestAnimationFrame(animateTrack);
  }

  requestAnimationFrame(animateTrack);
});
