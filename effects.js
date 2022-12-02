const navBar = document.getElementById('nav__bar')
let scrolled = false;

window.onscroll = function () {

    if (window.pageYOffset > 100){

navBar.classList.remove('top')

if(!scrolled){

    navBar.style.transform = 'translateY(-70px)'
}

setTimeout(function() {

    navBar.style.transform = 'translateY(0)'

}, 2000)
    }
    else{

        navBar.classList.add('top')
        scrolled = false;
    }
}
