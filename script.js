const whatsappNumber = '51923726273';

function whatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll('.js-whatsapp').forEach((link) => {
  const message = link.dataset.message || 'Hola, quisiera conocer HanndcyPets.';
  link.href = whatsappUrl(message);
});

// Iconos inline: reemplazan los caracteres provisionales y no dependen de una librería externa.
const svgIcon = (name) => {
  const paths = {
    whatsapp: '<path d="M19.1 4.9A9.9 9.9 0 0 0 3.3 16.8L2 22l5.3-1.3A9.9 9.9 0 1 0 19.1 4.9Z"/><path d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.5c.2-.2.4-.2.7-.1l1.7.7c.3.1.4.3.4.6 0 .8-.3 1.3-.8 1.5-1.1.5-3-.2-4.8-1.7-1.5-1.2-2.8-3-3-4.2-.1-.7.2-1.5.6-2.1Z"/>',
    home: '<path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/>',
    heart: '<path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    spark: '<path d="m12 3 1.7 6.3L20 11l-6.3 1.7L12 19l-1.7-6.3L4 11l6.3-1.7L12 3Z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>'
  };
  return `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.spark}</svg>`;
};

document.querySelectorAll('.wa-icon').forEach((icon) => { icon.innerHTML = svgIcon('whatsapp'); });
const floatingIcon = document.querySelector('.floating-icon');
if (floatingIcon) floatingIcon.innerHTML = svgIcon('whatsapp');
document.querySelectorAll('.hero-benefits .benefit-icon').forEach((icon, index) => {
  icon.innerHTML = svgIcon(['home', 'heart', 'check'][index] || 'check');
});
document.querySelectorAll('.round-icon').forEach((icon, index) => {
  icon.innerHTML = svgIcon(['home', 'heart', 'calendar'][index] || 'spark');
});
document.querySelectorAll('.package-icon').forEach((icon, index) => {
  icon.innerHTML = svgIcon(['spark', 'heart', 'plus'][index] || 'spark');
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  mobileMenu.classList.toggle('open', !expanded);
  mobileMenu.setAttribute('aria-hidden', String(expanded));
});

document.querySelectorAll('.mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

// Fotografías editoriales temporales. Se reemplazan por fotos propias sin tocar el layout.
const dogPhoto = 'assets/real-dog-home.webp';
const catPhoto = 'assets/real-cat-home.webp';
const faqPhoto = 'assets/real-cat-care.webp';
document.querySelectorAll('.art-card-pet, .faq-pet').forEach((frame) => {
  const image = document.createElement('img');
  const catFocused = frame.classList.contains('faq-pet') || frame.closest('.service-sage');
  image.src = frame.classList.contains('faq-pet') ? faqPhoto : (catFocused ? catPhoto : dogPhoto);
  image.alt = catFocused ? 'Gato acompañado en casa' : 'Perro acompañado en casa';
  image.loading = 'lazy';
  image.className = 'real-photo-cutout';
  frame.replaceChildren(image);
  frame.classList.add('photo-cutout');
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const motionTargets = '.eyebrow, h1, h2, h3, .lead, .centered > p, .hero-actions, .hero-benefits, .trust-item, .check-list, .service-copy > .button, .package-card, .step, .booking-note, .booking-form, .accordion, .footer-grid > div';

document.querySelectorAll('.reveal').forEach((section) => {
  if (reducedMotion) return;
  section.querySelectorAll(motionTargets).forEach((element, index) => {
    element.classList.add('stagger-item');
    element.style.setProperty('--stagger-index', index);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const heroVisual = document.querySelector('.hero-visual');
if (heroVisual && !reducedMotion) heroVisual.classList.add('is-visible');

const parallaxLayers = reducedMotion ? [] : [
  { element: document.querySelector('.hero-photo'), speed: -0.035, max: 18 },
  { element: document.querySelector('.hero-sticker'), speed: -0.07, max: 28 },
  ...Array.from(document.querySelectorAll('.service-art .shape')).map((element, index) => ({ element, speed: index % 2 ? 0.045 : -0.03, max: 22 })),
  ...Array.from(document.querySelectorAll('.service-art .art-card')).map((element) => ({ element, speed: -0.055, max: 30 })),
  { element: document.querySelector('.faq-shape'), speed: 0.035, max: 18 },
  { element: document.querySelector('.pattern'), speed: -0.018, max: 12 },
].filter(({ element }) => element);

let parallaxTick = false;
function updateParallax() {
  const viewport = window.innerHeight;
  parallaxLayers.forEach(({ element, speed, max }) => {
    const rect = element.getBoundingClientRect();
    if (rect.bottom < -80 || rect.top > viewport + 80) return;
    const offset = Math.max(-max, Math.min(max, (viewport / 2 - (rect.top + rect.height / 2)) * speed));
    element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
  });
  parallaxTick = false;
}
window.addEventListener('scroll', () => {
  if (!parallaxTick) {
    window.requestAnimationFrame(updateParallax);
    parallaxTick = true;
  }
}, { passive: true });
updateParallax();

document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const panel = trigger.nextElementSibling;
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isOpen));
    panel.classList.toggle('open', !isOpen);
  });
});

const bookingForm = document.querySelector('#booking-form');
bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const service = document.querySelector('#booking-service').value;
  const district = document.querySelector('#booking-district').value;
  const date = document.querySelector('#booking-date').value;
  const time = document.querySelector('#booking-time').value;
  const pet = document.querySelector('#booking-pet').value.trim();
  const formattedDate = date ? new Date(`${date}T12:00:00`).toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' }) : 'por confirmar';
  const message = `Hola, quisiera solicitar una cita a domicilio para ${pet}.%0A%0AServicio: ${service}%0ADistrito: ${district}%0AFecha preferida: ${formattedDate}%0AHorario preferido: ${time}%0A%0AEntiendo que la cita queda confirmada cuando HanndcyPets valide la disponibilidad.`;
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
});

document.querySelector('#year').textContent = new Date().getFullYear();
