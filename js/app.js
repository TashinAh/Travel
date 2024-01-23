$(document).ready(function(){
	$(window).on('scroll', function(){
		var scroll = $(this).scrollTop();
		if(scroll > 100) {
			$('.header').addClass('header-bg');
		}else{
			$('.header').removeClass('header-bg');
		}
	})
})

let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-bar');

window.onscroll = () =>{
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
}

menuBtn.onclick = () =>{
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slide", {
   grapCursor: true,
   loop: true,
   centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

lightGallery(document.querySelector('.service .service-container'));


