document.addEventListener('DOMContentLoaded', () => {
    const animatedText = document.getElementById('animated-text');
    const toggleButton = document.getElementById('toggle-animation');
    const links = document.querySelector('.links');
    let isPaused = false;

    toggleButton.addEventListener('click', () => {
        if (isPaused) {
            animatedText.style.animationPlayState = 'running';
            toggleButton.textContent = 'Pausar';
        } else {
            animatedText.style.animationPlayState = 'paused';
            toggleButton.textContent = 'Reanudar';
            links.style.display = 'flex';
        }
        isPaused = !isPaused;
    });
});