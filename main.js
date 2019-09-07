const btnNavToggle = document.getElementById('btn-toggle-drawer');

btnNavToggle.addEventListener('click', () => {
  // toggle stuff
  let drawer = document.getElementById('nav-drawer');
  drawer.classList.toggle('active');
  btnNavToggle.firstElementChild.classList.toggle('fa-bars');
  btnNavToggle.firstElementChild.classList.toggle('fa-times');
});

// give nav links active class