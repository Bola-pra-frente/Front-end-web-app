// JavaScript para página inicial
// Load stats on page load
document.addEventListener('DOMContentLoaded', function() {
    loadStats();
});

// Load stats function
async function loadStats() {
    try {
        const response = await fetch('/api/mock/stats');
        
        if (response.ok) {
            const data = await response.json();
            updateStats(data.stats);
        }
    } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
        // Fallback para valores padrão
        updateStats({
            totalPlayers: 150,
            totalTeams: 50,
            totalFans: 500,
            totalScouts: 25
        });
    }
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
