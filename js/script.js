"use strict";

const trackArea = document.querySelector('.track-area');
const pointerDot = document.querySelector('.pointer-dot');
const coordX = document.querySelector('.coord-x');
const coordY = document.querySelector('.coord-y');
const trackStatus = document.querySelector('.track-status');

trackArea.addEventListener('mouseover', () => {
    trackArea.classList.add('is-inside');
    trackStatus.textContent = 'Курсор внутри области';
});

trackArea.addEventListener('mousemove', (event) => {

    const rect = trackArea.getBoundingClientRect();
    
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);

    coordX.textContent = x;
    coordY.textContent = y;

    pointerDot.style.left = x + 'px';
    pointerDot.style.top = y + 'px';
});

trackArea.addEventListener('mouseout', () => {
    trackArea.classList.remove('is-inside');
    
    coordX.textContent = '-';
    coordY.textContent = '-';
    
    trackStatus.textContent = 'Курсор вышел из области';
});
