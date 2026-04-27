// Dados dos produtos (Simulando uma API/Banco de dados)
const products = [
  {
    id: 1,
    category: "tshirt",
    name: "Oversized Black Apex",
    price: "R$ 45,90",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "tshirt",
    name: "Vintage White Tee",
    price: "R$ 42,90",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "hoodie",
    name: "Moletom Dark Minimal",
    price: "R$ 89,90",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "pants",
    name: "Calça Cargo Techwear",
    price: "R$ 110,00",
    img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "tshirt",
    name: "Acid Wash Tee",
    price: "R$ 49,90",
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1928&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "hoodie",
    name: "Essential Hoodie Grey",
    price: "R$ 85,00",
    img: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1935&auto=format&fit=crop",
  },
];

const productGrid = document.querySelector(".product-grid");
const filterBtns = document.querySelectorAll(".filter-btn");

// Função para renderizar produtos
function displayProducts(filteredList) {
  productGrid.innerHTML = filteredList
    .map(
      (product) => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.price} <small>(Atacado)</small></p>
            </div>
        </div>
    `,
    )
    .join("");
}

// Inicializar catálogo
displayProducts(products);

// Lógica de Filtro
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remover classe ativa
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    if (filterValue === "all") {
      displayProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === filterValue);
      displayProducts(filtered);
    }
  });
});

// Efeito Sticky Header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Animação de Entrada (Reveal)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".product-card, .benefit-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});
