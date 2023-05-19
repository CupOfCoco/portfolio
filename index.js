let menuIcon = document.querySelector('#menu-icon');
let linkUp = document.querySelector('.linkup');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    linkUp.classList.toggle ('active');
};
