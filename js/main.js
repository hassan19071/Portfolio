// rate for my skills
let mySkillsRate = document.querySelectorAll(".about-me .skills .rate");
let myRate = document.querySelectorAll(".about-me .skills .rate span");

for(let i = 0;i < mySkillsRate.length;i++){
    mySkillsRate[i].style.width = mySkillsRate[i].getAttribute("data-rate");
    myRate[i].innerHTML = mySkillsRate[i].getAttribute("data-rate");
}


$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Hassan Khaled</small>';
			}
		},
	});
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});

// change active class after scrolling;
let links = document.querySelectorAll(".nav-item .nav-link");
let homeSec = document.querySelector(".header-section");
let aboutSec = document.querySelector(".about-me");
let servicesSec = document.querySelector(".services");
let portfolioSec = document.querySelector(".portfolio");
let testimonialSec = document.querySelector(".testimonial");


// when we scroll we make nav has fixed position
let navbarSec = document.querySelector(".header-section .navbar");

window.onscroll = function(){
    if (scrollY > 500){
        navbarSec.style.position = "fixed";
    }else{
        navbarSec.style.position = "static";
    }
   
    if (scrollY > homeSec.offsetTop + homeSec.offsetHeight - window.innerHeight){
        links.forEach((el)=>{
            el.classList.remove("active");
        })
        links[0].classList.add("active");
    }
    if (scrollY > aboutSec.offsetTop + aboutSec.offsetHeight - window.innerHeight){
        links.forEach((el)=>{
            el.classList.remove("active");
        })
        links[1].classList.add("active");
    }
    if (scrollY > servicesSec.offsetTop + servicesSec.offsetHeight - window.innerHeight){
        links.forEach((el)=>{
            el.classList.remove("active");
        })
        links[2].classList.add("active");
    }
    if (scrollY > portfolioSec.offsetTop - 200){
        links.forEach((el)=>{
            el.classList.remove("active");
        })
        links[3].classList.add("active");
    }
    if (scrollY > testimonialSec.offsetTop + testimonialSec.offsetHeight - window.innerHeight){
        links.forEach((el)=>{
            el.classList.remove("active");
        })
        links[4].classList.add("active");
    }
}



