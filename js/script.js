"use strict";

const area = document.querySelector("#track-area");
const pointerdot = document.querySelector("#pointer-dot");
const xText = document.querySelector("#coord-x");
const yText = document.querySelector("#coord-y");
const statu = document.querySelector("#track-status");
area.addEventListener("mouseover", () => {
    area.classList.add("is-inside");
    statu.textContent = "мышь внутри";
    pointerdot.style.left = `$(0)px`;
    pointerdot.style.top = `$(0)px`;
})
area.addEventListener("mousemove", (event) => {
    const bounds = area.getBoundingClientRect();
    const localx = event.clientX-bounds.left;
    const localY = event.clientY-bounds.top;
    console.log(event.clientX, event.clientY);
    xText.textContent = localx;
    yText.textContent = localY;
    pointerdot.style.left = `$(x)px`;
    pointerdot.style.top = `$(y)px`;

})
area.addEventListener("mouseout", () => {
    area.classList.remove("is-inside");
     xText.textContent = "—";
     yText.textContent = "—"
     statu.textContent = "Курсор вне площадки."
})
// Задание 1. На mouseover добавьте класс is-inside и обновите status.

// Задание 2. На mousemove получите event.offsetX и event.offsetY.
// Покажите координаты и переместите dot через style.left/style.top (px).

// Задание 3. На mouseout уберите класс, очистите координаты и сообщение.
// В этой площадке дочерние элементы имеют pointer-events:none,
// поэтому перемещение по ним не вызывает лишних mouseout/mouseover.
