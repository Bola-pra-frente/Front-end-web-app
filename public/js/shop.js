// JavaScript para página da loja
// Load products on page load
document.addEventListener('DOMContentLoaded', function () {
  loadProducts();
});

// Load products function
async function loadProducts() {
  const loading = document.getElementById('loadingProducts');
  const productsGrid = document.getElementById('productsGrid');
  const noProducts = document.getElementById('noProducts');

  if (loading) loading.classList.remove('hidden');
  if (productsGrid) productsGrid.classList.add('hidden');
  if (noProducts) noProducts.classList.add('hidden');

  try {
    const response = await fetch('/api/mock/products');

    if (response.ok) {
      const data = await response.json();
      displayProducts(data.products);

      if (data.products.length === 0) {
        if (noProducts) noProducts.classList.remove('hidden');
      } else {
        if (productsGrid) productsGrid.classList.remove('hidden');
      }
    } else {
      throw new Error('Erro ao carregar produtos');
    }
  } catch (error) {
    console.error('Erro:', error);
    if (noProducts) noProducts.classList.remove('hidden');
  } finally {
    if (loading) loading.classList.add('hidden');
  }
}

// Display products
function displayProducts(products) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  products.forEach(product => {
    const productCard = `
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div class="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100" style="display: none;">
                        <span class="text-4xl">${getProductIcon(product.category)}</span>
                    </div>
                    ${product.featured ? '<div class="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">DESTAQUE</div>' : ''}
                    ${!product.inStock ? '<div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"><span class="text-white font-bold">ESGOTADO</span></div>' : ''}
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-2">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryClass(product.category)}">
                            ${getCategoryName(product.category)}
                        </span>
                        ${product.inStock ? '<span class="text-green-600 text-sm font-medium">✓ Em estoque</span>' : '<span class="text-red-600 text-sm font-medium">✗ Esgotado</span>'}
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">${product.name}</h3>
                    <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                    
                    ${
                      product.sizes
                        ? `
                    <div class="mb-4">
                        <p class="text-sm font-medium text-gray-700 mb-2">Tamanhos:</p>
                        <div class="flex flex-wrap gap-1">
                            ${product.sizes.map(size => `<span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">${size}</span>`).join('')}
                        </div>
                    </div>
                    `
                        : ''
                    }
                    
                    ${
                      product.colors
                        ? `
                    <div class="mb-4">
                        <p class="text-sm font-medium text-gray-700 mb-2">Cores:</p>
                        <div class="flex flex-wrap gap-1">
                            ${product.colors.map(color => `<span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">${color}</span>`).join('')}
                        </div>
                    </div>
                    `
                        : ''
                    }
                    
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-primary-600">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                        <button class="btn btn-primary add-to-cart-btn ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}" ${!product.inStock ? 'disabled' : ''} data-product-id="${product.id}">
                            ${product.inStock ? 'Comprar' : 'Esgotado'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    grid.innerHTML += productCard;
  });
}

// Get product icon based on category
function getProductIcon(category) {
  const icons = {
    JERSEY: '👕',
    ACCESSORY: '⚽',
    MERCHANDISE: '🧢',
  };
  return icons[category] || '🛍️';
}

// Get category name
function getCategoryName(category) {
  const names = {
    JERSEY: 'Camisas',
    ACCESSORY: 'Acessórios',
    MERCHANDISE: 'Mercadorias',
  };
  return names[category] || category;
}

// Get category class
function getCategoryClass(category) {
  const classes = {
    JERSEY: 'bg-blue-100 text-blue-800',
    ACCESSORY: 'bg-green-100 text-green-800',
    MERCHANDISE: 'bg-purple-100 text-purple-800',
  };
  return classes[category] || 'bg-gray-100 text-gray-800';
}

// Add to cart function (placeholder)
function addToCart(productId) {
  // Simular adição ao carrinho
  const button = document.querySelector(`[data-product-id="${productId}"]`);
  if (!button) return;

  const originalText = button.textContent;

  button.textContent = 'Adicionado!';
  button.classList.add('bg-green-600');
  button.classList.remove('bg-primary-600');

  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove('bg-green-600');
    button.classList.add('bg-primary-600');
  }, 2000);

  // Aqui seria implementada a lógica real do carrinho
  console.log('Produto adicionado ao carrinho:', productId);
}

// Event listeners para botões de adicionar ao carrinho
document.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('add-to-cart-btn') ||
    event.target.closest('.add-to-cart-btn')
  ) {
    const button = event.target.closest('.add-to-cart-btn');
    const productId = button?.dataset.productId;
    if (productId) {
      addToCart(productId);
    }
  }
});
