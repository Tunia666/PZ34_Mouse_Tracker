"use strict";

const area = document.querySelector("#track-area");
const dot = document.querySelector("#pointer-dot");
const xText = document.querySelector("#coord-x");
const yText = document.querySelector("#coord-y");
const status = document.querySelector("#track-status");

area.addEventListener("mouseover", () => {
  area.classList.add("is-inside");
  status.textContent = "Указатель внутри площадки";
});

area.addEventListener("mousemove", (event) => {
  const localX = event.offsetX;
  const localY = event.offsetY;

  xText.textContent = localX;
  yText.textContent = localY;

  dot.style.left = `${localX}px`;
  dot.style.top = `${localY}px`;
});

area.addEventListener("mouseout", () => {
  area.classList.remove("is-inside");
  xText.textContent = "0";
  yText.textContent = "0";
  status.textContent = "Указатель вне площадки";
});

