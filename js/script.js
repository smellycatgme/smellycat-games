const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? 'Close' : 'Menu';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = 'Menu';
    });
  });
}

const form = document.querySelector('#signup-form');
const message = document.querySelector('#form-message');
if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.textContent = 'Thanks — you’re on the list!';
    form.reset();
  });
}
