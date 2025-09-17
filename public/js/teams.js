// JavaScript para página de times
let allTeams = [];
let allPlayers = [];

// Load teams on page load
document.addEventListener('DOMContentLoaded', function () {
  loadTeams();
});

// Load teams function
async function loadTeams() {
  const loading = document.getElementById('loading');
  const teamsGrid = document.getElementById('teams-grid');
  const emptyState = document.getElementById('empty-state');

  if (loading) loading.classList.remove('hidden');
  if (teamsGrid) teamsGrid.classList.add('hidden');
  if (emptyState) emptyState.classList.add('hidden');

  try {
    // Carregar times e jogadoras em paralelo
    const [teamsResponse, playersResponse] = await Promise.all([
      fetch('/api/mock/teams'),
      fetch('/api/mock/players'),
    ]);

    if (teamsResponse.ok && playersResponse.ok) {
      const teamsData = await teamsResponse.json();
      const playersData = await playersResponse.json();

      allTeams = teamsData.teams;
      allPlayers = playersData.players;

      displayTeams(allTeams);

      if (allTeams.length === 0) {
        if (emptyState) emptyState.classList.remove('hidden');
      } else {
        if (teamsGrid) teamsGrid.classList.remove('hidden');
      }
    } else {
      throw new Error('Erro ao carregar dados');
    }
  } catch (error) {
    console.error('Erro:', error);
    if (emptyState) emptyState.classList.remove('hidden');
  } finally {
    if (loading) loading.classList.add('hidden');
  }
}

// Display teams
function displayTeams(teams) {
  const grid = document.getElementById('teams-grid');
  if (!grid) return;

  grid.innerHTML = '';

  teams.forEach(team => {
    // Contar jogadoras do time
    const teamPlayers = allPlayers.filter(player => player.teamId === team.id);

    const teamCard = `
            <div class="card hover:shadow-lg transition-shadow cursor-pointer team-card" data-team-id="${team.id}">
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span class="text-2xl font-bold text-white">
                            ${team.name.charAt(0)}
                        </span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">${team.name}</h3>
                    ${team.city ? `<p class="text-gray-600 mb-2">${team.city}${team.state ? ', ' + team.state : ''}</p>` : ''}
                    ${team.league ? `<p class="text-sm text-primary-600 font-medium mb-2">${team.league}</p>` : ''}
                    ${team.description ? `<p class="text-gray-600 text-sm mb-4 line-clamp-3">${team.description}</p>` : ''}
                    <div class="flex justify-center space-x-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                            ${teamPlayers.length} jogadoras
                        </span>
                        ${
                          team.founded
                            ? `
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Fundado em ${team.founded}
                        </span>
                        `
                            : ''
                        }
                    </div>
                    <button class="btn btn-primary w-full view-details-btn" data-team-id="${team.id}">Ver Detalhes</button>
                </div>
            </div>
        `;
    grid.innerHTML += teamCard;
  });
}

// View team details
function viewTeamDetails(teamId) {
  const team = allTeams.find(t => t.id === teamId);
  if (team) {
    const teamPlayers = allPlayers.filter(player => player.teamId === teamId);

    // Criar modal com detalhes do time
    const modal = `
            <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" id="teamModal">
                <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
                    <div class="mt-3">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-2xl font-bold text-gray-900">${team.name}</h3>
                            <button class="close-modal-btn text-gray-400 hover:text-gray-600">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="text-lg font-semibold text-gray-900 mb-3">Informações</h4>
                                <div class="space-y-2 text-sm">
                                    ${team.city ? `<div><span class="font-medium">Cidade:</span> ${team.city}${team.state ? ', ' + team.state : ''}</div>` : ''}
                                    ${team.country ? `<div><span class="font-medium">País:</span> ${team.country}</div>` : ''}
                                    ${team.founded ? `<div><span class="font-medium">Fundado:</span> ${team.founded}</div>` : ''}
                                    ${team.league ? `<div><span class="font-medium">Liga:</span> ${team.league}</div>` : ''}
                                    ${team.website ? `<div><span class="font-medium">Website:</span> <a href="${team.website}" target="_blank" class="text-primary-600 hover:underline">${team.website}</a></div>` : ''}
                                </div>
                                
                                ${
                                  team.description
                                    ? `
                                <div class="mt-4">
                                    <h5 class="font-medium text-gray-900 mb-2">Descrição</h5>
                                    <p class="text-sm text-gray-600">${team.description}</p>
                                </div>
                                `
                                    : ''
                                }
                            </div>
                            
                            <div>
                                <h4 class="text-lg font-semibold text-gray-900 mb-3">Jogadoras (${teamPlayers.length})</h4>
                                <div class="max-h-64 overflow-y-auto">
                                    ${
                                      teamPlayers.length > 0
                                        ? teamPlayers
                                            .map(
                                              player => `
                                        <div class="flex items-center justify-between py-2 border-b border-gray-100">
                                            <div>
                                                <div class="font-medium text-sm">${player.firstName} ${player.lastName}</div>
                                                <div class="text-xs text-gray-500">${getPositionName(player.position)} • ${player.age} anos</div>
                                            </div>
                                            <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPositionClass(player.position)}">
                                                ${getPositionName(player.position)}
                                            </span>
                                        </div>
                                    `
                                            )
                                            .join('')
                                        : '<p class="text-sm text-gray-500">Nenhuma jogadora cadastrada</p>'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML('beforeend', modal);
  }
}

// Close modal
function closeModal() {
  const modal = document.getElementById('teamModal');
  if (modal) {
    modal.remove();
  }
}

// Get position name
function getPositionName(position) {
  const positions = {
    GK: 'Goleira',
    DF: 'Defensora',
    MF: 'Meio-campo',
    FW: 'Atacante',
  };
  return positions[position] || position;
}

// Get position class
function getPositionClass(position) {
  const classes = {
    GK: 'bg-blue-100 text-blue-800',
    DF: 'bg-green-100 text-green-800',
    MF: 'bg-yellow-100 text-yellow-800',
    FW: 'bg-red-100 text-red-800',
  };
  return classes[position] || 'bg-gray-100 text-gray-800';
}

// Event listeners para cards de times
document.addEventListener('click', function (event) {
  // Verificar se é um card de time ou botão de detalhes
  if (event.target.closest('.team-card') || event.target.closest('.view-details-btn')) {
    const teamId =
      event.target.closest('.team-card')?.dataset.teamId ||
      event.target.closest('.view-details-btn')?.dataset.teamId;
    if (teamId) {
      viewTeamDetails(teamId);
    }
  }

  // Fechar modal
  if (
    event.target.classList.contains('close-modal-btn') ||
    event.target.closest('.close-modal-btn')
  ) {
    closeModal();
  }

  // Fechar modal ao clicar fora
  const modal = document.getElementById('teamModal');
  if (modal && event.target === modal) {
    closeModal();
  }
});
