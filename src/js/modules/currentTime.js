const currentTimeEl = document.querySelector(".current-time");

if (currentTimeEl) {
  const updateTime = () => {
    currentTimeEl.textContent = getTimeInZone("Asia/Bishkek");
  };

  updateTime();

  const delay = (60 - new Date().getSeconds()) * 1000;

  setTimeout(() => {
    updateTime();
    setInterval(updateTime, 60_000);
  }, delay);
}

function getTimeInZone(timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}
