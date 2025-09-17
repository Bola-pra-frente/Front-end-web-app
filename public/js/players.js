// JavaScript para página de jogadoras
let allPlayers = [];
let filteredPlayers = [];

// Carregar jogadoras
async function loadPlayers() {
  try {
    const response = await fetch('/api/mock/players');
    const data = await response.json();
    allPlayers = data.players;
    filteredPlayers = [...allPlayers];
    renderPlayers();
    hideLoading();
  } catch (error) {
    console.error('Erro ao carregar jogadoras:', error);
    hideLoading();
    showNoPlayers();
  }
}

// Renderizar jogadoras
function renderPlayers() {
  const grid = document.getElementById('playersGrid');
  const noPlayers = document.getElementById('noPlayers');

  if (filteredPlayers.length === 0) {
    grid.innerHTML = '';
    showNoPlayers();
    return;
  }

  hideNoPlayers();

  grid.innerHTML = filteredPlayers
    .map(
      player => `
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <span class="text-2xl font-bold text-gray-600">${player.firstName.charAt(0)}${player.lastName.charAt(0)}</span>
                    </div>
                    <span class="position-badge position-${player.position}">${getPositionName(player.position)}</span>
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
                    ${
                      player.height
                        ? `
                    <div class="flex justify-between">
                        <span>Altura:</span>
                        <span class="font-medium">${player.height}cm</span>
                    </div>
                    `
                        : ''
                    }
                    ${
                      player.marketValue
                        ? `
                    <div class="flex justify-between">
                        <span>Valor de mercado:</span>
                        <span class="font-medium">R$ ${player.marketValue.toLocaleString()}</span>
                    </div>
                    `
                        : ''
                    }
                </div>
                
                ${
                  player.bio
                    ? `
                <div class="mt-4 pt-4 border-t border-gray-200">
                    <p class="text-sm text-gray-600 line-clamp-3">${player.bio}</p>
                </div>
                `
                    : ''
                }
                
                ${
                  player.stats
                    ? `
                <div class="mt-4 pt-4 border-t border-gray-200">
                    <h4 class="text-sm font-medium text-gray-900 mb-2">Estatísticas</h4>
                    <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="text-center">
                            <div class="font-semibold text-primary-600">${player.stats.goals}</div>
                            <div class="text-gray-500">Gols</div>
                        </div>
                        <div class="text-center">
                            <div class="font-semibold text-secondary-600">${player.stats.assists}</div>
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
                `
                    : ''
                }
            </div>
        </div>
    `
    )
    .join('');
}

// Filtrar jogadoras por posição
function filterPlayers(position) {
  if (position === '') {
    filteredPlayers = [...allPlayers];
  } else {
    filteredPlayers = allPlayers.filter(player => player.position === position);
  }
  renderPlayers();
}

// Obter nome da posição
function getPositionName(position) {
  const positions = {
    GK: 'Goleira',
    DF: 'Defensora',
    MF: 'Meio-campo',
    FW: 'Atacante',
  };
  return positions[position] || position;
}

// Mostrar/ocultar loading
function hideLoading() {
  const loadingElement = document.getElementById('loadingSpinner');
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
}

function showNoPlayers() {
  const noPlayersElement = document.getElementById('noPlayers');
  if (noPlayersElement) {
    noPlayersElement.classList.remove('hidden');
  }
}

function hideNoPlayers() {
  const noPlayersElement = document.getElementById('noPlayers');
  if (noPlayersElement) {
    noPlayersElement.classList.add('hidden');
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
  loadPlayers();

  // Filtros
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterPlayers(this.dataset.position);
    });
  });
});
