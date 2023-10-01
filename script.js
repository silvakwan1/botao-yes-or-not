const btn = document.querySelector(".btn2");

btn.addEventListener("mouseenter", mudei);
btn.addEventListener("touchstart", mudei);

function mudei() {
  const width = window.innerWidth;
  const height = window.innerHeight - 200;

  console.log(width);

  const maxY = Math.random() * height;
  const maxX = Math.random() * width;

  btn.style.position = "absolute";
  btn.style.left = maxX + "px";
  btn.style.top = maxY + "px";
}
