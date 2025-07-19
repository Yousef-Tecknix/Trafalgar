// 🔍 Select the close (X) icon element
const menuToggle = document.querySelector('.close-icon');

// 🔍 Select the navigation panel
const nav = document.querySelector('.site-header .container nav');

// 🔍 Select the menu trigger (e.g. hamburger icon or menu button)
const listMenue = document.querySelector('.list-menue');

// 🧩 Toggle nav visibility when close icon is clicked
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// 🧩 Toggle nav visibility when menu trigger is clicked
listMenue.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});
