let menuIcon = document.querySelector('#menu-icon');
let linkUp = document.querySelector('.linkup');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    linkUp.classList.toggle ('active');
};
let typingText = new Typed ("#text", {
    strings: ['WEB DEVELOPER','FRONTEND DEVELOPER','WEB APP DESIGNER','WEB APP DEVELOPER'],
    typeSpeed: 35,
    startDelay:500,
    backSpeed: 35,
    backDelay: 1000,
    loop: true,
    showCursor:true
});

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay:200
// });
// ScrollReveal().reveal('.itemmenu , .heading' , {origin: 'top'});

