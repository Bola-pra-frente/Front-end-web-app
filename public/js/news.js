// JavaScript para página de notícias
let allNews = [];
let filteredNews = [];

// Carregar notícias
async function loadNews() {
  try {
    const response = await fetch('/api/mock/news');
    const data = await response.json();
    allNews = data.news;
    filteredNews = [...allNews];
    renderNews();
    hideLoading();
  } catch (error) {
    console.error('Erro ao carregar notícias:', error);
    hideLoading();
    showNoNews();
  }
}

// Renderizar notícias
function renderNews() {
  const grid = document.getElementById('newsGrid');
  const noNews = document.getElementById('noNews');

  if (filteredNews.length === 0) {
    if (grid) grid.innerHTML = '';
    showNoNews();
    return;
  }

  hideNoNews();

  if (grid) {
    grid.innerHTML = filteredNews
      .map(
        news => `
            <div class="news-card cursor-pointer" data-news-id="${news.id}">
                <div class="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative">
                    <img src="${news.image}" alt="${news.title}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100" style="display: none;">
                        <span class="text-4xl">📰</span>
                    </div>
                    <span class="category-badge category-${news.category} absolute top-3 left-3">
                        ${getCategoryName(news.category)}
                    </span>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-sm text-gray-500">${formatDate(news.date)}</span>
                        <span class="text-sm text-gray-500">${news.source}</span>
                    </div>
                    
                    <h3 class="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                        ${news.title}
                    </h3>
                    
                    <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                        ${news.summary}
                    </p>
                    
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${news.tags
                          .map(
                            tag => `
                            <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                #${tag}
                            </span>
                        `
                          )
                          .join('')}
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-500">Por ${news.author}</span>
                        <button class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                            Ler mais →
                        </button>
                    </div>
                </div>
            </div>
        `
      )
      .join('');
  }
}

// Filtrar notícias por categoria
function filterNews(category) {
  if (category === '') {
    filteredNews = [...allNews];
  } else {
    filteredNews = allNews.filter(news => news.category === category);
  }
  renderNews();
}

// Obter nome da categoria
function getCategoryName(category) {
  const categories = {
    GAME: 'Jogos',
    TRANSFER: 'Transferências',
    TRAINING: 'Treinos',
    AWARD: 'Prêmios',
    GENERAL: 'Geral',
  };
  return categories[category] || category;
}

// Formatar data
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

// Mostrar/ocultar loading
function hideLoading() {
  const loadingElement = document.getElementById('loadingSpinner');
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
}

function showNoNews() {
  const noNewsElement = document.getElementById('noNews');
  if (noNewsElement) {
    noNewsElement.classList.remove('hidden');
  }
}

function hideNoNews() {
  const noNewsElement = document.getElementById('noNews');
  if (noNewsElement) {
    noNewsElement.classList.add('hidden');
  }
}

// Ver detalhes da notícia
function viewNewsDetails(newsId) {
  const news = allNews.find(n => n.id === newsId);
  if (news) {
    // Criar modal com detalhes da notícia
    const modal = `
            <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" id="newsModal">
                <div class="relative top-10 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 shadow-lg rounded-md bg-white">
                    <div class="mt-3">
                        <div class="flex items-center justify-between mb-4">
                            <span class="category-badge category-${news.category}">
                                ${getCategoryName(news.category)}
                            </span>
                            <button class="close-modal-btn text-gray-400 hover:text-gray-600">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        
                        <h2 class="text-2xl font-bold text-gray-900 mb-4">${news.title}</h2>
                        
                        <div class="flex items-center justify-between mb-6 text-sm text-gray-500">
                            <div class="flex items-center space-x-4">
                                <span>Por ${news.author}</span>
                                <span>•</span>
                                <span>${news.source}</span>
                            </div>
                            <span>${formatDate(news.date)}</span>
                        </div>
                        
                        ${
                          news.image
                            ? `
                        <div class="mb-6">
                            <img src="${news.image}" alt="${news.title}" class="w-full h-64 object-cover rounded-lg" onerror="this.style.display='none';">
                        </div>
                        `
                            : ''
                        }
                        
                        <div class="prose max-w-none">
                            <p class="text-lg text-gray-700 mb-4">${news.summary}</p>
                            <div class="text-gray-600 whitespace-pre-line">${news.content}</div>
                        </div>
                        
                        <div class="mt-6 pt-6 border-t border-gray-200">
                            <div class="flex flex-wrap gap-2">
                                ${news.tags
                                  .map(
                                    tag => `
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                                        #${tag}
                                    </span>
                                `
                                  )
                                  .join('')}
                            </div>
                        </div>
                        
                        ${
                          news.url
                            ? `
                        <div class="mt-6">
                            <a href="${news.url}" target="_blank" class="btn btn-primary">
                                Ler notícia original
                            </a>
                        </div>
                        `
                            : ''
                        }
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML('beforeend', modal);
  }
}

// Fechar modal
function closeModal() {
  const modal = document.getElementById('newsModal');
  if (modal) {
    modal.remove();
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
  loadNews();

  // Filtros
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterNews(this.dataset.category);
    });
  });
});

// Event listeners para cards de notícias
document.addEventListener('click', function (event) {
  // Verificar se é um card de notícia
  if (event.target.closest('.news-card')) {
    const newsId = event.target.closest('.news-card')?.dataset.newsId;
    if (newsId) {
      viewNewsDetails(newsId);
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
  const modal = document.getElementById('newsModal');
  if (modal && event.target === modal) {
    closeModal();
  }
});
