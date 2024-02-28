

function page4Animation(){
    var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-img")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll( ".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
}
function redirectToDiscord() {
    window.location.href = "https://discord.gg/8d34nRF6";
}
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 100,
        freeMode: true,
      });
}

swiperAnimation()
page4Animation()

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click", function () {
    if(flag == 0){
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    }else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
})