/* navbar */
function menuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

//enlève le hamburger menu quand on clique sur un lien
var menuLinks = document.querySelectorAll('.nav-menu a');

for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function() {
        var menu = document.querySelector('.nav-menu');

        if (menu.classList.contains('responsive')) {
            menu.classList.remove('responsive');
        }
    });
}

//shadow on navbar
window.onscroll = function (){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50  || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else{
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

var typingEffect = new Typed(".typedText", {
    strings : ["PHP hater", "Student", "C lover"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/* start */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 60})
sr.reveal('.featured-text-info',{delay: 100})
sr.reveal('.featured-text-btn',{delay: 100})
sr.reveal('.social_icons',{delay: 100})
sr.reveal('.featured-image',{delay: 100})

/* projects */
sr.reveal('.card-content',{interval: 100})
sr.reveal('.top-header',{})
/* scroll left/right */
/* -- about/contact */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1000,
    reset: true
})

sr.reveal('.about-info',{delay: 60})
sr.reveal('.contact-info',{delay: 60})
/* -- about skills -- */
const srRight = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1000,
    reset: true
})

srRight.reveal('.skills-box',{delay: 60})
srRight.reveal('.form-control',{delay: 60})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }  else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

document.addEventListener("DOMContentLoaded", function() {
    const downloadButtons = document.querySelectorAll(".btn");

    downloadButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = "assets/pdf/CV.pdf";
        });
    });
});
