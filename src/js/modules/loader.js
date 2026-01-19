const loader = document.querySelector(".js-loader");
const loaderCount = document.querySelector(".js-loading-count");
const wrapper = document.querySelector(".js-wrapper");

if (loader && loaderCount && wrapper) {
  const body = document.body;
  body.style.overflow = "hidden";
  wrapper.style.opacity = 0;

  const steps = [
    { value: 0, at: 0 },
    { value: 33, at: 0.25 },
    { value: 56, at: 0.45 },
    { value: 99, at: 0.85 },
    { value: 100, at: 1 },
  ];

  const duration = 1500;
  const start = performance.now();

  function update(time) {
    const progress = Math.min((time - start) / duration, 1);

    const current =
      steps
        .slice()
        .reverse()
        .find((step) => progress >= step.at) || steps[0];

    loaderCount.textContent = current.value;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      setTimeout(() => {
        loader.classList.add("animate-hidden");
        body.style.overflow = "";
        wrapper.style.opacity = 1;
      }, 600);
      setTimeout(() => {
        loader.classList.add("is-hidden");
      }, 900);
    }
  }

  requestAnimationFrame(update);
}
