const body = document.body;
const backgrounds = [
  "background01",
  "background02",
  "background03",
  "background04",
  "background05",
];

function randomBg() {
  const randomImg = Math.floor(Math.random() * backgrounds.length);
  body.style.backgroundImage = `url(./images/${backgrounds[randomImg]}.png)`;
}

randomBg();
setInterval(randomBg, 5000);
