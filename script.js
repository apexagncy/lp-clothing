// Dados do Catálogo (Adicione ou remova itens aqui)
const products = [
    { id: 1, category: 'tshirt', name: 'Oversized Apex Black', price: 'R$ 49,90', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop' },
    { id: 2, category: 'tshirt', name: 'Tee Acid Wash Premium', price: 'R$ 54,90', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1928&auto=format&fit=crop' },
    { id: 3, category: 'hoodie', name: 'Moletom Heavyweight Gelo', price: 'R$ 119,00', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop' },
    { id: 4, category: 'pants', name: 'Calça Cargo Militar Black', price: 'R$ 129,00', img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=1974&auto=format&fit=crop' },
    { id: 5, category: 'tshirt', name: 'Vintage Tee Off-White', price: 'R$ 49,90', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop' },
    { id: 6, category: 'hoodie', name: 'Hoodie Box Logo Apex', price: 'R$ 119,00', img: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1935&auto=format&fit=crop' },
];

const productContainer = document.getElementById('product-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

// 1. Função Renderizar Produtos
function renderProducts(list) {
    productContainer.innerHTML = list.map(item => `
        <div class="p-card" data-category="${item.category}">
            <img src="${item.img}" alt="${item.name}" class="p-img">
            <div class="p-info">
                <h3>${item.name}</h3>
                <span class="price">${item.price}</span>
            </div>
        </div>
    `).join('');
}

// 2. Filtros Dinâmicos
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        const filteredList = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);
        
        renderProducts(filteredList);
    });
});

// 3. Menu Mobile Toggle
mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars-staggered');
    icon.classList.toggle('fa-xmark');
});

// 4. Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// 5. Animação ao Rolar (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    
    // Adiciona classe para animação nos cards
    document.querySelectorAll('.b-card, .p-card').forEach(el => observer.observe(el));
});
