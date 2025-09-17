// JavaScript para página inicial
// Load stats on page load
document.addEventListener('DOMContentLoaded', function() {
    loadStats();
});

// Load stats function
async function loadStats() {
    // Dados estáticos para GitHub Pages
    const stats = {
        totalPlayers: 150,
        totalTeams: 12,
        totalFans: 2500,
        totalScouts: 45
    };
    
    updateStats(stats);
}

// Update stats with animation
function updateStats(stats) {
    animateNumber('totalPlayers', stats.totalPlayers);
    animateNumber('totalTeams', stats.totalTeams);
    animateNumber('totalFans', stats.totalFans);
    animateNumber('totalScouts', stats.totalScouts);
}

// Animate number counting
function animateNumber(elementId, targetNumber) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const startNumber = 0;

    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * easeOutQuart);
        
        element.textContent = currentNumber + '+';
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}
