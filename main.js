// SHOW MENU 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU IN MOBILE

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// CHANGE BACKGROUND HEADER

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

//! new concept
//MIXITUP FILTER USE

    let mixerProducts = mixitup('.products__content', {
        selectors: {
            target: '.products__card'
        },
        animation: {
            duration: 300
        }
    }); 

    mixerProducts.filter('.delicacies')

//SCROLL UP

function showScrollup(){
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 50){
        scrollUp.classList.add('showScroll')
    }
    else{
        scrollUp.classList.remove('showScroll')
    }
}

window.addEventListener('scroll', showScrollup)