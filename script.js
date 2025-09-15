const audio = document.getElementById("birthdaySong");
const lyrics = document.querySelectorAll(".lyrics-box p");

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  lyrics.forEach((line, i) => {
    const start = parseFloat(line.getAttribute("data-time"));
    const next = lyrics[i + 1] ? parseFloat(lyrics[i + 1].getAttribute("data-time")) : Infinity;
    if (currentTime >= start && currentTime < next) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });
});
