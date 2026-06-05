function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('shadow-xl', window.scrollY > 20);
  });
}

function initGalleryLightbox() {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const closeButton = document.querySelector('.lightbox-close');
  const triggers = document.querySelectorAll('.gallery-item');

  if (!lightbox || !lightboxImage || !closeButton || !triggers.length) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const imageSrc = trigger.dataset.image;
      if (!imageSrc) return;
      lightboxImage.src = imageSrc;
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  };

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });
}

function initTestimonials() {
  const testimonials = [
    {
      quote: 'Mi llavero personalizado llegó perfecto. El brillo y la textura son espectaculares.',
      author: 'Camila R.',
      stars: 5
    },
    {
      quote: 'La atención fue rápida y el diseño quedó exactamente como lo imaginé.',
      author: 'Martín S.',
      stars: 5
    },
    {
      quote: 'Entrega impecable y el embalaje premium hizo que la experiencia fuera muy especial.',
      author: 'Sofía L.',
      stars: 5
    }
  ];

  const slider = document.querySelector('.testimonial-slider');
  const prev = document.querySelector('.testimonial-control.prev');
  const next = document.querySelector('.testimonial-control.next');
  if (!slider || !prev || !next) return;

  let currentIndex = 0;

  const renderTestimonial = index => {
    const item = testimonials[index];
    slider.innerHTML = `
      <article class="testimonial-card p-8 glass-panel">
        <p class="text-[#5A5A5A] leading-8">“${item.quote}”</p>
        <div class="mt-6 flex items-center justify-between gap-4">
          <div>
            <h4 class="text-lg font-semibold text-[#2D2D2D]">${item.author}</h4>
            <p class="text-sm text-[#7B61FF]">${'★'.repeat(item.stars)}</p>
          </div>
        </div>
      </article>
    `;
  };

  prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(currentIndex);
  });

  next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    renderTestimonial(currentIndex);
  });

  renderTestimonial(currentIndex);
}

function initProductCollection() {
  const products = [
    { name: 'Llavero Bruma Rosa', category: 'Llaveros', price: 28, tag: 'Llaveros' },
    { name: 'Aros Celeste Aura', category: 'Joyería', price: 42, tag: 'Joyería' },
    { name: 'Set Nube Pastel', category: 'Portavasos', price: 36, tag: 'Portavasos' },
    { name: 'Collar Gota de Luz', category: 'Joyería', price: 58, tag: 'Joyería' },
    { name: 'Bandeja Perla', category: 'Decoración', price: 62, tag: 'Decoración' },
    { name: 'Portallaves Ópalo', category: 'Llaveros', price: 24, tag: 'Llaveros' }
  ];

  const productGrid = document.querySelector('#product-grid');
  const filterContainer = document.querySelector('#category-filters');
  const searchInput = document.querySelector('#product-search');
  const cartCount = document.querySelector('#cart-count');
  const cartTotal = document.querySelector('#cart-total');
  const cartSummary = document.querySelector('.cart-summary');

  if (!productGrid || !filterContainer || !searchInput || !cartCount || !cartTotal || !cartSummary) return;

  const categories = ['Todos', ...new Set(products.map(product => product.category))];
  const cart = [];

  const renderFilters = () => {
    filterContainer.innerHTML = categories
      .map(category => `<button type="button" class="btn-secondary filter-btn" data-category="${category}">${category}</button>`)
      .join('');
  };

  const renderProducts = items => {
    productGrid.innerHTML = items
      .map(product => `
        <article class="product-card glass-panel group" data-category="${product.category}">
          <div class="product-image bg-[linear-gradient(135deg,#f8e9ff_0%,#f7d8fa_35%,#f1e0ff_100%)]"></div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-[#2D2D2D]">${product.name}</h3>
            <p class="mt-3 text-sm leading-6 text-[#5A5A5A]">${product.tag} con acabados artesanales y brillo premium.</p>
            <div class="mt-6 flex items-center justify-between gap-4">
              <span class="text-lg font-semibold text-[#7B61FF]">$${product.price}</span>
              <button type="button" class="btn-primary btn-add-to-cart" data-name="${product.name}" data-price="${product.price}">Agregar</button>
            </div>
          </div>
        </article>
      `)
      .join('');
  };

  const updateCart = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartCount.textContent = cart.length;
    cartTotal.textContent = `$${total.toFixed(2)}`;
    cartSummary.querySelector('p')?.remove();
    const message = document.createElement('p');
    message.className = 'text-sm text-[#5A5A5A]';
    message.textContent = cart.length ? `Has añadido ${cart.length} artículo(s) al carrito.` : 'Tu carrito está vacío.';
    cartSummary.appendChild(message);
  };

  const bindAddButtons = () => {
    productGrid.querySelectorAll('.btn-add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        cart.push({ name, price });
        updateCart();
        button.textContent = 'Añadido';
        button.disabled = true;
        setTimeout(() => {
          button.textContent = 'Agregar';
          button.disabled = false;
        }, 1200);
      });
    });
  };

  const applyFilter = category => {
    const term = searchInput.value.trim().toLowerCase();
    const filtered = products.filter(product => {
      const matchCategory = category === 'Todos' || product.category === category;
      const matchSearch = `${product.name} ${product.tag}`.toLowerCase().includes(term);
      return matchCategory && matchSearch;
    });
    renderProducts(filtered);
    bindAddButtons();
  };

  filterContainer.addEventListener('click', event => {
    const button = event.target.closest('.filter-btn');
    if (!button) return;
    filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('bg-[#7B61FF]', 'text-white'));
    button.classList.add('bg-[#7B61FF]', 'text-white');
    applyFilter(button.dataset.category);
  });

  searchInput.addEventListener('input', () => {
    const active = filterContainer.querySelector('.filter-btn.bg-[#7B61FF]');
    const category = active?.dataset.category || 'Todos';
    applyFilter(category);
  });

  renderFilters();
  renderProducts(products);
  bindAddButtons();
  updateCart();
}

function initPersonalizationForm() {
  const form = document.querySelector('form.personalization-form');
  if (!form) return;

  if (typeof handleFormSubmission === 'function') return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    requiredFields.forEach(field => {
      field.classList.remove('border-red-500');
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('border-red-500');
      }
    });
    if (!isValid) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }
    alert('Solicitud enviada. Nos contactaremos pronto.');
    form.reset();
  });
}

function initTimelineAnimation() {
  const steps = document.querySelectorAll('.timeline-step');
  steps.forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(24px)';
    setTimeout(() => {
      step.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      step.style.opacity = '1';
      step.style.transform = 'translateY(0)';
    }, 150 * index);
  });
}

function initFooterYear() {
  const yearElement = document.querySelector('#footer-year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();
}

function initGsapHero() {
  if (typeof gsap === 'undefined') return;
  gsap.from('.hero-copy', { opacity: 0, y: 28, duration: 1.1, ease: 'power3.out' });
  gsap.from('.hero-panel', { opacity: 0, y: 40, duration: 1.1, ease: 'power3.out', delay: 0.15 });
}

function initApp() {
  initSmoothScroll();
  initMobileMenu();
  initStickyHeader();
  initGalleryLightbox();
  initTestimonials();
  initProductCollection();
  initPersonalizationForm();
  initTimelineAnimation();
  initFooterYear();
  initGsapHero();
}

document.addEventListener('DOMContentLoaded', initApp);
