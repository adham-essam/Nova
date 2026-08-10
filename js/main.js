const root = document.documentElement;
const header = document.querySelector('.site-header');
const themeToggle = document.querySelector('[data-theme-toggle]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

const savedTheme = localStorage.getItem('nova-theme');
if (savedTheme === 'premium') root.setAttribute('data-theme', 'premium');

function syncThemeIcon() {
  if (!themeToggle) return;
  const premium = root.getAttribute('data-theme') === 'premium';
  themeToggle.setAttribute('aria-label', premium ? 'استخدام الثيم الأساسي' : 'استخدام الثيم البديل');
  themeToggle.textContent = premium ? '✦' : '◐';
}
syncThemeIcon();

themeToggle?.addEventListener('click', () => {
  const premium = root.getAttribute('data-theme') === 'premium';
  if (premium) {
    root.removeAttribute('data-theme');
    localStorage.setItem('nova-theme', 'default');
  } else {
    root.setAttribute('data-theme', 'premium');
    localStorage.setItem('nova-theme', 'premium');
  }
  syncThemeIcon();
});

function setHeaderState() {
  header?.classList.toggle('scrolled', window.scrollY > 18);
}
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = navLinks?.classList.toggle('open');
  document.body.classList.toggle('menu-open', !!open);
  menuToggle.setAttribute('aria-expanded', String(!!open));
});

document.querySelectorAll('[data-nav-links] a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Lightweight decorative star field.
const stars = document.querySelector('.stars');
if (stars && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  for (let i = 0; i < 34; i++) {
    const star = document.createElement('i');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${2.4 + Math.random() * 3.8}s`;
    stars.appendChild(star);
  }
  const shooting = document.createElement('i');
  shooting.className = 'shooting-star';
  shooting.style.top = '10%';
  shooting.style.left = '6%';
  stars.appendChild(shooting);
}

// Front-end-only instructor form demo.
const instructorForm = document.querySelector('#instructor-form');
instructorForm?.addEventListener('submit', event => {
  event.preventDefault();
  const success = instructorForm.querySelector('.form-success');
  success?.classList.add('show');
  instructorForm.reset();
});

// WhatsApp links are placeholders. Replace the number once available.
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.setAttribute('href', 'https://wa.me/201000000000?text=' + encodeURIComponent('مرحبًا Nova Verse Academy، أود حجز حصة مجانية لطفلي.'));
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

const year = document.querySelectorAll('[data-year]');
year.forEach(node => node.textContent = new Date().getFullYear());
