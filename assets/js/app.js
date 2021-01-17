/* ====================== 0, VARIABLE ====================== */
let menu = document.querySelector(".header")
let logo = document.querySelector(".header__content-logo")
let navLink = document.querySelectorAll(".header__content-link")
let menuPosition = menu.getBoundingClientRect().top
let nav = document.querySelector(".header__content-nav")
let mobileBtn = document.querySelector(".header__mobileBtn")
let section = document.querySelectorAll(".section")
let body = document.querySelector('body')
let modalContent = document.querySelector('.modal__content')
let img = [
    {
        src:'assets/img/portfolio/thumbnails/1.jpg'
    },
    {
        src:'assets/img/portfolio/thumbnails/2.jpg'
    },
    {
        src:'assets/img/portfolio/thumbnails/3.jpg'
    },
    {
        src:'assets/img/portfolio/thumbnails/4.jpg'
    },
    {
        src:'assets/img/portfolio/thumbnails/5.jpg'
    },
    {
        src:'assets/img/portfolio/thumbnails/6.jpg'
    },
]
let gallery = document.querySelectorAll('.portfolio__gallery')
let box = document.querySelector(".box")
let findOutBtn = document.querySelector(".banner__content-btn")
let getStartedBtn = document.querySelector(".about__content-btn")
/* ====================== 1, HEADER  ====================== */
let header = {
    init:function(){
        header.headerChange()
    },
    headerChange:function(){
        if (scrollY> menuPosition + 150) {
            menu.classList.add('header__active')
            logo.classList.add('logo__active')
            navLink.forEach(links=>{
                links.classList.add('link__active')
            })
        }
        else{
            menu.classList.remove('header__active')
            logo.classList.remove('logo__active')
            navLink.forEach(links=>{
                links.classList.remove('link__active')
            })
        }
        if (body.clientWidth < 992){
            navLink.forEach(links=>{
                links.classList.remove('link__active')
            })
        }
    }
}
window.addEventListener('scroll',header.init)
/* ====================== 2, MENU RESPONSIVE  ====================== */
let menuStatus = true
let mobile = {
    init:function(){
        mobile.menuMobile()
    },
    menuMobile:function(){
        mobileBtn.addEventListener('click',()=>{
            if(menuStatus == true){
                nav.classList.add("nav__active")
                return menuStatus = false
            }
            else{
                nav.classList.remove("nav__active")
                return menuStatus = true
            }
        })
    }
}
mobile.init()
/* ====================== 3, SCROLL TO SECTION  ====================== */
let scrollSmooth = {
    init:function(){
        scrollSmooth.scrollSection()
    },
    scrollSection:function(){
        navLink.forEach((links,index)=>{
            links.addEventListener("click",(e)=>{
                e.preventDefault()
                let sectionPosition = section[index].offsetTop
                window.scrollTo(0,sectionPosition-67.6)
                nav.classList.remove("nav__active")
                return menuStatus = true
            })
        })
        getStartedBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            let sectionPosition = section[1].offsetTop
            window.scrollTo(0,sectionPosition-67.6)
        })
        findOutBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            let sectionPosition = section[0].offsetTop
            window.scrollTo(0,sectionPosition-67.6)
        })
    }
}
scrollSmooth.init()
/* ====================== 4, HIGHLIGHT NAV ====================== */
function removeColor(){
    navLink.forEach(links=>{
           links.classList.remove("highlight__active")
    })
}
let scrollHighLight = {
    init:function(){
        scrollHighLight.scroll()
    },
    scroll:function(){
        section.forEach((sections,index)=>{
            let sectionPosition = sections.offsetTop
            if (scrollY > sectionPosition -70){
                removeColor()
                navLink[index].classList.add("highlight__active")
            }
            else{
                navLink[index].classList.remove("highlight__active")
            }
        })
    }
}
window.addEventListener("scroll",scrollHighLight.init)
/* ====================== 5, SLIDE ====================== */
let closeSlide = document.querySelector('.box__icon-close')
let textIndex = document.querySelector('.box__text-index')
let nextBtn = document.querySelector('.box__next')
let prevBtn = document.querySelector('.box__prev')
let counter = 0
let slide = {
    init:function(){
        slide.imgBox()
    },
    imgBox:function(){
        gallery.forEach((galleries,index)=>{
            galleries.addEventListener("click",(e)=>{
                e.preventDefault()
                counter = index
                box.classList.add('box__active')
                body.classList.add('body__active')
                document.getElementById('box__img').src = img[index].src
                textIndex.innerText = counter+1
            })
        })
        closeSlide.addEventListener('click',()=>{
            box.classList.remove('box__active')
            body.classList.remove('body__active')
        })
        nextBtn.addEventListener('click',()=>{
            if(counter < gallery.length-1){
                counter++
                textIndex.innerText = counter+1
                box.classList.add('box__active')
                document.getElementById('box__img').src = img[counter].src
            }
            else{
                counter = 0
                textIndex.innerText = counter+1 
                document.getElementById('box__img').src = img[counter].src
            }
        })
        prevBtn.addEventListener('click',()=>{
            if(counter > 0){
                counter--
                textIndex.innerText = counter+1
                box.classList.add('box__active')
                document.getElementById('box__img').src = img[counter].src
            }
            else{
                counter = gallery.length-1
                textIndex.innerText = counter+1 
                document.getElementById('box__img').src = img[counter].src
            }
        })
        window.addEventListener("click",(event)=>{
            if (event.target == box){
                box.classList.remove("box__active")
                body.classList.remove('body__active')
              }
        })
    }
}
slide.init()