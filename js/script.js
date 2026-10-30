const trackArea = document.querySelector('#track-area');
const pointerDot = document.querySelector('#pointer-dot');
const coordX = document.querySelector('#coord-x');
const coordY = document.querySelector('#coord-y');
const trackStatus = document.querySelector('#track-status');
trackArea.addEventListener('mouseout', () => {
    trackArea.classList.remove('is-inside');
    coordX.textContent = '-';
    coordY.textContent = '-';
    
    pointerDot.style.left = '0px';
    pointerDot.style.top = '0px';
    trackStatus.textContent = 'Указатель вышел за пределы площадки';
});

trackArea.addEventListener('mouseover', () => {
    trackArea.classList.add('is-inside');
    trackStatus.textContent = 'Указатель находится внутри площадки';
});
trackArea.addEventListener('mousemove', (event) => {
    const x = Math.round(event.offsetX);
    const y = Math.round(event.offsetY);
    coordX.textContent = x;
    coordY.textContent = y;
    pointerDot.style.left = `${x}px`;
    pointerDot.style.top = `${y}px`;
    const areaWidth = trackArea.offsetWidth;
    if (x < areaWidth / 2) {
        trackStatus.textContent = `Внутри площадки: Левая половина (X: ${x})`;
    } else {
        trackStatus.textContent = `Внутри площадки: Правая половина (X: ${x})`;
    }
});