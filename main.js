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
        
    } else{
        arrowUp.classList.remove('visible');
    }
    arrowUp.addEventListener('click', ()=>{
        scrollIntoView('#home');
    });
});

//Projects
const workBtnContainer= document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
   if(filter== null){
       return;
   }
   //for(let project of projects){}
    /**let project;
     * for(let i =0; i <projects.length; i++){
     *  project = projects[i]
     * }
     */
    projectContainer.classList.add('anim-out'); // 필터링되기 전에 애니메이션을 실행해주고
   setTimeout(()=>{
        //필터링 해준다. 
        projects.forEach((project) =>{
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
       });
       projectContainer.classList.remove('anim-out');
   }, 300); // 3초 뒤에 class remove
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}
