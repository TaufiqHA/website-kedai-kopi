// toggle class active

const navbarnav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

hamburger.addEventListener('click', () => {
    navbarnav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active');
    };
});