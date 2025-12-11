const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
// funkcia na animovanie sekcií pri scrollovaní
function animateSections() {
    const sections = document.querySelectorAll('.section');

    const triggerBottom = window.innerHeight * 0.85; // kedy spustiť animáciu

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

// spustiť pri načítaní a scrollovaní
window.addEventListener('scroll', animateSections);
window.addEventListener('load', animateSections);
function animateElements(selector) {
    const elements = document.querySelectorAll(selector);
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if(top < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

// animácia sekcií
function animateSections() {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

// spustiť pri scrollovaní a načítaní
window.addEventListener('scroll', () => {
    animateSections();
    animateElements('.o-nas-boxes .box');
    animateElements('.sluzby .card');
});

window.addEventListener('load', () => {
    animateSections();
    animateElements('.o-nas-boxes .box');
    animateElements('.sluzby .card');
});
