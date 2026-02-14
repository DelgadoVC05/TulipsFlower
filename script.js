function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 70 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create grass blades
function createGrass() {
    const grassContainer = document.getElementById('grass');
    for (let i = 0; i < 60; i++) {
        const blade = document.createElement('div');
        blade.className = 'grass-blade';
        blade.style.left = (i * 1.7) + '%';
        blade.style.height = (20 + Math.random() * 35) + 'px';
        blade.style.animationDelay = Math.random() * 2 + 's';
        blade.style.animationDuration = (2 + Math.random() * 1) + 's';
        grassContainer.appendChild(blade);
    }
}

// Create floating hearts
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '0';
        heart.style.animationDuration = (6 + Math.random() * 4) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }, 3000);
}

// Toggle between morning and evening
let isNightMode = false;
function toggleMode() {
    const body = document.body;
    const modeText = document.querySelector('.mode-text');
    const modeIcon = document.querySelector('.mode-icon');

    isNightMode = !isNightMode;

    if (isNightMode) {
        body.classList.add('night-mode');
        modeText.textContent = 'Evening';
        modeIcon.textContent = '🌙';
    } else {
        body.classList.remove('night-mode');
        modeText.textContent = 'Morning';
        modeIcon.textContent = '☀️';
    }
}

// Initialize
createStars();
createGrass();
createHearts();