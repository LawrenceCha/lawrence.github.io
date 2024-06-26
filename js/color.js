const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const btn = document.querySelector("#color-button");

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function click() {
  const firstColor = randomColor();
  const secondColor = randomColor();
  document.body.style.background = `linear-gradient(to right, ${firstColor}, ${secondColor})`;
}

click();

btn.addEventListener("click", click);
