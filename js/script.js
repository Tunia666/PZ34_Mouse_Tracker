"use strict";

const area = document.querySelector("#track-area");
const dot = document.querySelector("#pointer-dot");
const xText = document.querySelector("#coord-x");
const yText = document.querySelector("#coord-y");
const status = document.querySelector("#track-status");


area.addEventListener("mouseover", () => {
    area.classList.add("is-inside");
    status.textContent = "курсор внутри";
});


area.addEventListener("mousemove", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    xText.textContent = event.offsetX;
    yText.textContent = event.offsetY;
    dot.style.left = x + "px";
    dot.style.top = y + "px";
});
area.addEventListener("mouseout", () => {
    area.classList.remove("is-inside");
    status.textContent = "курсор вышел";
    xText.textContent = "—";
    yText.textContent = "—";
});

// Задание 3. На mouseout уберите класс, очистите координаты и сообщение.
// В этой площадке дочерние элементы имеют pointer-events:none,
// поэтому перемещение по ним не вызывает лишних mouseout/mouseover.
