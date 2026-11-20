"use strict";

const area = document.querySelector("#track-area");
const dot = document.querySelector("#pointer-dot");
const xText = document.querySelector("#coord-x");
const yText = document.querySelector("#coord-y");
const status = document.querySelector("#track-status");

// Задание 1. На mouseover добавьте класс is-inside и обновите status.
area.addEventListener("mouseover", () => {
  area.classList.add("is-inside");
  status.textContent = "Курсор внутри площадки.";
});

// Задание 2. На mousemove получите event.offsetX и event.offsetY.
// Покажите координаты и переместите dot через style.left/style.top (px).
area.addEventListener("mousemove", (event) => {
  const x = Math.round(event.offsetX);
  const y = Math.round(event.offsetY);

  xText.textContent = x;
  yText.textContent = y;

  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
});

// Задание 3. На mouseout уберите класс, очистите координаты и сообщение.
area.addEventListener("mouseout", () => {
  area.classList.remove("is-inside");
  xText.textContent = "—";
  yText.textContent = "—";
  status.textContent = "Курсор вне площадки.";
});
