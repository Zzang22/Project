'use strict'

// navbar의 height 만큼 scroll 되면, navbar를 진하게 만들기 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
   // console.log(window.scrollY); 스크롤 position
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu =document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if(link ==null){
        return; 
    }
    scrollIntoView(link);
});

//contact me 
const btn_contact = document.querySelector(".home__contact");
btn_contact.addEventListener('click', () =>{
   scrollIntoView('#contact');
});


//Make home slowly fadeto transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
   home.style.opacity =1 - window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling down

document.addEventListener('scroll', () =>{
    const arrowUp = document.querySelector('.arrow-up');
    if(window.scrollY > homeHeight /2){
        arrowUp.classList.add('visible');
        arrowUp.addEventListener('click', ()=>{
            scrollIntoView('#home');
        });
    } else{
        arrowUp.classList.remove('visible');
    }
   
});



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}
