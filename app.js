// Passa a Bola - GitHub Pages App
// Mock data
const mockData = {
    players: [
        {
            id: '1',
            firstName: 'Marta',
            lastName: 'Vieira da Silva',
            age: 38,
            position: 'FW',
            nationality: 'Brasileira',
            height: 162,
            marketValue: 500000,
            bio: 'Considerada uma das maiores jogadoras de futebol feminino de todos os tempos. Seis vezes eleita melhor jogadora do mundo pela FIFA.',
            stats: { goals: 115, assists: 45, matches: 180, yellowCards: 12 }
        },
        {
            id: '2',
            firstName: 'Debinha',
            lastName: 'Cristina',
            age: 32,
            position: 'FW',
            nationality: 'Brasileira',
            height: 157,
            marketValue: 300000,
            bio: 'Atacante versátil e técnica, conhecida por sua velocidade e finalização precisa.',
            stats: { goals: 85, assists: 35, matches: 150, yellowCards: 8 }
        },
        {
            id: '3',
            firstName: 'Leticia',
            lastName: 'Izidoro',
            age: 31,
            position: 'GK',
            nationality: 'Brasileira',
            height: 175,
            marketValue: 200000,
            bio: 'Goleira experiente e confiável, titular da seleção brasileira.',
            stats: { goals: 0, assists: 2, matches: 120, yellowCards: 3 }
        },
        {
            id: '4',
            firstName: 'Tamires',
            lastName: 'Cássia',
            age: 35,
            position: 'DF',
            nationality: 'Brasileira',
            height: 168,
            marketValue: 180000,
            bio: 'Defensora experiente e líder, conhecida por sua força e liderança em campo.',
            stats: { goals: 15, assists: 25, matches: 200, yellowCards: 20 }
        },
        {
            id: '5',
            firstName: 'Formiga',
            lastName: 'Miraildes',
            age: 46,
            position: 'MF',
            nationality: 'Brasileira',
            height: 162,
            marketValue: 100000,
            bio: 'Meio-campista lendária, recordista de participações em Copas do Mundo.',
            stats: { goals: 25, assists: 40, matches: 250, yellowCards: 15 }
        }
    ],
    
    teams: [
        {
            id: '1',
            name: 'Flamengo Feminino',
            city: 'Rio de Janeiro',
            state: 'RJ',
            country: 'Brasil',
            founded: 2017,
            description: 'Time feminino do Clube de Regatas do Flamengo, uma das principais equipes do futebol feminino brasileiro.',
            logo: './img/placeholder.svg',
            colors: { primary: '#FF0000', secondary: '#000000' },
            league: 'Brasileirão Feminino'
        },
        {
            id: '2',
            name: 'Corinthians Feminino',
            city: 'São Paulo',
            state: 'SP',
            country: 'Brasil',
            founded: 2016,
            description: 'Time feminino do Sport Club Corinthians Paulista, campeão da Libertadores Feminina.',
            logo: './img/placeholder.svg',
            colors: { primary: '#000000', secondary: '#FFFFFF' },
            league: 'Brasileirão Feminino'
        },
        {
            id: '3',
            name: 'São Paulo Feminino',
            city: 'São Paulo',
            state: 'SP',
            country: 'Brasil',
            founded: 2018,
            description: 'Time feminino do São Paulo Futebol Clube, em crescimento no cenário nacional.',
            logo: './img/placeholder.svg',
            colors: { primary: '#FF0000', secondary: '#FFFFFF' },
            league: 'Brasileirão Feminino'
        }
    ],
    
    news: [
        {
            id: '1',
            title: 'Seleção Brasileira anuncia lista para amistosos',
            summary: 'Lista de 23 jogadoras convocadas para os amistosos contra Argentina e Chile.',
            content: 'A seleção brasileira feminina de futebol anunciou nesta segunda-feira a lista de 23 jogadoras convocadas para os amistosos contra Argentina e Chile, que serão realizados em janeiro.',
            date: '2024-01-10',
            author: 'Redação CBF',
            image: './img/placeholder.svg',
            category: 'GENERAL',
            tags: ['seleção', 'convocação', 'amistosos']
        },
        {
            id: '2',
            title: 'Brasileirão Feminino 2024: Calendário oficial divulgado',
            summary: 'CBF divulga calendário oficial do Brasileirão Feminino 2024.',
            content: 'A Confederação Brasileira de Futebol (CBF) divulgou o calendário oficial do Brasileirão Feminino 2024.',
            date: '2024-01-08',
            author: 'Redação CBF',
            image: './img/placeholder.svg',
            category: 'GAME',
            tags: ['brasileirão', 'calendário', '2024']
        },
        {
            id: '3',
            title: 'Marta é eleita melhor jogadora do mundo pela FIFA',
            summary: 'Brasileira recebe o prêmio pela sexta vez em sua carreira.',
            content: 'Marta Vieira da Silva foi eleita a melhor jogadora do mundo pela FIFA pela sexta vez em sua carreira.',
            date: '2024-01-05',
            author: 'Redação FIFA',
            image: './img/placeholder.svg',
            category: 'AWARD',
            tags: ['marta', 'prêmio', 'fifa', 'melhor jogadora']
        }
    ],
    
    products: [
        {
            id: '1',
            name: 'Camisa Flamengo Feminino 2024',
            description: 'Camisa oficial do Flamengo Feminino para a temporada 2024.',
            price: 199.9,
            image: './img/placeholder.svg',
            category: 'JERSEY',
            sizes: ['P', 'M', 'G', 'GG'],
            colors: ['Vermelho', 'Branco'],
            inStock: true,
            featured: true
        },
        {
            id: '2',
            name: 'Camisa Corinthians Feminino 2024',
            description: 'Camisa oficial do Corinthians Feminino para a temporada 2024.',
            price: 189.9,
            image: './img/placeholder.svg',
            category: 'JERSEY',
            sizes: ['P', 'M', 'G', 'GG'],
            colors: ['Preto', 'Branco'],
            inStock: true,
            featured: true
        },
        {
            id: '3',
            name: 'Chuteira Nike Mercurial',
            description: 'Chuteira de alta performance para futebol feminino.',
            price: 399.9,
            image: './img/placeholder.svg',
            category: 'ACCESSORY',
            sizes: ['35', '36', '37', '38', '39', '40'],
            colors: ['Rosa', 'Azul', 'Preto'],
            inStock: true,
            featured: false
        }
    ]
};

// Utility functions
function getPositionName(position) {
    const positions = {
        'GK': 'Goleira',
        'DF': 'Defensora',
        'MF': 'Meio-campo',
        'FW': 'Atacante'
    };
    return positions[position] || position;
}

function getCategoryName(category) {
    const categories = {
        'GAME': 'Jogos',
        'TRANSFER': 'Transferências',
        'TRAINING': 'Treinos',
        'AWARD': 'Prêmios',
        'GENERAL': 'Geral'
    };
    return categories[category] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// Stats functions
function loadStats() {
    const stats = {
        totalPlayers: 150,
        totalTeams: 12,
        totalFans: 2500,
        totalScouts: 45
    };
    
    updateStats(stats);
}

function updateStats(stats) {
    animateNumber('totalPlayers', stats.totalPlayers);
    animateNumber('totalTeams', stats.totalTeams);
    animateNumber('totalFans', stats.totalFans);
    animateNumber('totalScouts', stats.totalScouts);
}

function animateNumber(elementId, targetNumber) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const duration = 2000;
    const startTime = performance.now();
    const startNumber = 0;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * progress);
        
        element.textContent = currentNumber.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Players functions
function loadPlayers() {
    const loading = document.getElementById('loadingPlayers');
    const grid = document.getElementById('playersGrid');
    const emptyState = document.getElementById('noPlayers');
    
    if (loading) loading.classList.add('hidden');
    
    setTimeout(() => {
        if (mockData.players.length === 0) {
            if (emptyState) emptyState.classList.remove('hidden');
        } else {
            if (grid) {
                grid.classList.remove('hidden');
                grid.innerHTML = mockData.players.map(player => `
                    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-4">
                                <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                    <span class="text-2xl font-bold text-gray-600">${player.firstName.charAt(0)}${player.lastName.charAt(0)}</span>
                                </div>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPositionClass(player.position)}">${getPositionName(player.position)}</span>
                            </div>
                            
                            <h3 class="text-lg font-semibold text-gray-900 mb-2">
                                ${player.firstName} ${player.lastName}
                            </h3>
                            
                            <div class="space-y-2 text-sm text-gray-600">
                                <div class="flex justify-between">
                                    <span>Idade:</span>
                                    <span class="font-medium">${player.age} anos</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Nacionalidade:</span>
                                    <span class="font-medium">${player.nationality}</span>
                                </div>
                                ${player.height ? `
                                <div class="flex justify-between">
                                    <span>Altura:</span>
                                    <span class="font-medium">${player.height}cm</span>
                                </div>
                                ` : ''}
                                ${player.marketValue ? `
                                <div class="flex justify-between">
                                    <span>Valor de mercado:</span>
                                    <span class="font-medium">R$ ${player.marketValue.toLocaleString()}</span>
                                </div>
                                ` : ''}
                            </div>
                            
                            ${player.bio ? `
                            <div class="mt-4 pt-4 border-t border-gray-200">
                                <p class="text-sm text-gray-600 line-clamp-3">${player.bio}</p>
                            </div>
                            ` : ''}
                            
                            ${player.stats ? `
                            <div class="mt-4 pt-4 border-t border-gray-200">
                                <h4 class="text-sm font-medium text-gray-900 mb-2">Estatísticas</h4>
                                <div class="grid grid-cols-2 gap-2 text-xs">
                                    <div class="text-center">
                                        <div class="font-semibold text-pink-600">${player.stats.goals}</div>
                                        <div class="text-gray-500">Gols</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="font-semibold text-purple-600">${player.stats.assists}</div>
                                        <div class="text-gray-500">Assistências</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="font-semibold text-green-600">${player.stats.matches}</div>
                                        <div class="text-gray-500">Jogos</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="font-semibold text-yellow-600">${player.stats.yellowCards}</div>
                                        <div class="text-gray-500">Cartões</div>
                                    </div>
                                </div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('');
            }
        }
    }, 1000);
}

function getPositionClass(position) {
    const classes = {
        'GK': 'bg-blue-100 text-blue-800',
        'DF': 'bg-green-100 text-green-800',
        'MF': 'bg-yellow-100 text-yellow-800',
        'FW': 'bg-red-100 text-red-800'
    };
    return classes[position] || 'bg-gray-100 text-gray-800';
}

// Teams functions
function loadTeams() {
    const loading = document.getElementById('loadingTeams');
    const grid = document.getElementById('teamsGrid');
    const emptyState = document.getElementById('noTeams');
    
    if (loading) loading.classList.add('hidden');
    
    setTimeout(() => {
        if (mockData.teams.length === 0) {
            if (emptyState) emptyState.classList.remove('hidden');
        } else {
            if (grid) {
                grid.classList.remove('hidden');
                grid.innerHTML = mockData.teams.map(team => `
                    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div class="p-6 text-center">
                            <div class="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span class="text-2xl font-bold text-white">${team.name.charAt(0)}</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">${team.name}</h3>
                            ${team.city ? `<p class="text-gray-600 mb-2">${team.city}${team.state ? ', ' + team.state : ''}</p>` : ''}
                            ${team.league ? `<p class="text-sm text-pink-600 font-medium mb-2">${team.league}</p>` : ''}
                            ${team.description ? `<p class="text-gray-600 text-sm mb-4 line-clamp-3">${team.description}</p>` : ''}
                            <div class="flex justify-center space-x-2 mb-4">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                                    ${mockData.players.filter(p => p.teamId === team.id).length} jogadoras
                                </span>
                                ${team.founded ? `
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Fundado em ${team.founded}
                                </span>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }
    }, 1200);
}

// News functions
function loadNews() {
    const loading = document.getElementById('loadingNews');
    const grid = document.getElementById('newsGrid');
    const emptyState = document.getElementById('noNews');
    
    if (loading) loading.classList.add('hidden');
    
    setTimeout(() => {
        if (mockData.news.length === 0) {
            if (emptyState) emptyState.classList.remove('hidden');
        } else {
            if (grid) {
                grid.classList.remove('hidden');
                grid.innerHTML = mockData.news.map(news => `
                    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div class="h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
                            <img src="${news.image}" alt="${news.title}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100" style="display: none;">
                                <span class="text-4xl">📰</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                                    ${getCategoryName(news.category)}
                                </span>
                                <span class="text-sm text-gray-500">${formatDate(news.date)}</span>
                            </div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">${news.title}</h3>
                            <p class="text-gray-600 text-sm mb-4 line-clamp-3">${news.summary}</p>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Por ${news.author}</span>
                                <div class="flex flex-wrap gap-1">
                                    ${news.tags.slice(0, 2).map(tag => `
                                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                            #${tag}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }
    }, 1400);
}

// Products functions
function loadProducts() {
    const loading = document.getElementById('loadingProducts');
    const grid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('noProducts');
    
    if (loading) loading.classList.add('hidden');
    
    setTimeout(() => {
        if (mockData.products.length === 0) {
            if (emptyState) emptyState.classList.remove('hidden');
        } else {
            if (grid) {
                grid.classList.remove('hidden');
                grid.innerHTML = mockData.products.map(product => `
                    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div class="h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100" style="display: none;">
                                <span class="text-4xl">${getProductIcon(product.category)}</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getProductCategoryClass(product.category)}">
                                    ${getProductCategoryName(product.category)}
                                </span>
                                ${product.featured ? '<span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Destaque</span>' : ''}
                            </div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-2">${product.name}</h3>
                            <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                            
                            ${product.sizes ? `
                            <div class="mb-4">
                                <p class="text-sm font-medium text-gray-700 mb-2">Tamanhos:</p>
                                <div class="flex flex-wrap gap-1">
                                    ${product.sizes.map(size => `
                                        <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">${size}</span>
                                    `).join('')}
                                </div>
                            </div>
                            ` : ''}
                            
                            ${product.colors ? `
                            <div class="mb-4">
                                <p class="text-sm font-medium text-gray-700 mb-2">Cores:</p>
                                <div class="flex flex-wrap gap-1">
                                    ${product.colors.map(color => `
                                        <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">${color}</span>
                                    `).join('')}
                                </div>
                            </div>
                            ` : ''}
                            
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-pink-600">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                                <button class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}" ${!product.inStock ? 'disabled' : ''}>
                                    ${product.inStock ? 'Comprar' : 'Esgotado'}
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }
    }, 1600);
}

function getProductIcon(category) {
    const icons = {
        'JERSEY': '👕',
        'ACCESSORY': '⚽',
        'MERCHANDISE': '🧢'
    };
    return icons[category] || '🛍️';
}

function getProductCategoryName(category) {
    const names = {
        'JERSEY': 'Camisas',
        'ACCESSORY': 'Acessórios',
        'MERCHANDISE': 'Mercadorias'
    };
    return names[category] || category;
}

function getProductCategoryClass(category) {
    const classes = {
        'JERSEY': 'bg-blue-100 text-blue-800',
        'ACCESSORY': 'bg-green-100 text-green-800',
        'MERCHANDISE': 'bg-purple-100 text-purple-800'
    };
    return classes[category] || 'bg-gray-100 text-gray-800';
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Load all data
    loadStats();
    loadPlayers();
    loadTeams();
    loadNews();
    loadProducts();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
