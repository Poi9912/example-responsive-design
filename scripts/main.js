const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav-principal');
const overlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav__lista a');

function toggleMenu(forceClose = false) {
  const isOpen = forceClose ? false : !nav.classList.contains('abierto');

  nav.classList.toggle('abierto', isOpen);
  overlay.classList.toggle('activo', isOpen);
  menuToggle.classList.toggle('activo', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

menuToggle.addEventListener('click', () => toggleMenu());
overlay.addEventListener('click', () => toggleMenu(true));

navLinks.forEach(link => {
  link.addEventListener('click', () => toggleMenu(true));
});