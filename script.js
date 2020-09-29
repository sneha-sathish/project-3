const navbarToggle = document.querySelector('.responsive-menu');
const navbar = document.querySelector('.header__menu__navigation');

navbarToggle.addEventListener('click', () => {
  if (navbar.style.display === 'none' || navbar.style.display === '') {
    document.querySelector('main').style.backgroundColor = 'rgba(0,0,0,0.2)';
    document
      .querySelector('.responsive-menu img')
      .setAttribute('src', 'images/icon-close.svg');
    navbar.style.display = 'flex';
  } else {
    document.querySelector('main').style.background = 'none';
    document
      .querySelector('.responsive-menu img')
      .setAttribute('src', 'images/icon-hamburger.svg');
    navbar.style.display = 'none';
  }
});
