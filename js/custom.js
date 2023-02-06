let setElementHeight = function () {
    let height = $(window).height();
    $('.main-height').css('height', (height));
};

$(window).on("resize", function () {
    setElementHeight();
}).resize();

$(function(){
	$(".typed").typed({
		strings: ["Web Designer", "UI/UX Designer", "Freelancer"],
		stringsElement: null,
		typeSpeed: 30,
		startDelay: 1000,
		backSpeed: 20,
		backDelay: 500,
		loop: true,
        infinite: true,
		contentType: 'html',
        // showCursor: false
	});
});

$(document).ready(function () {
	$('#darkMode').click(function () {
		$('body').toggleClass('dark-bg');
		$(this).find('.bi-sun-fill').toggleClass('d-none');
		$(this).find('.bi-moon-fill').toggleClass('d-none');
	});
});

if(screen.width < 480) {
    $('body').removeClass('overflow-hidden');
}

var swiper = new Swiper(".client-slider", {
	slidesPerView: 2,
	loop: true,
	spaceBetween: 20,
	freeMode: true,
	speed: 2000,
	autoplay: {
	  delay: 0,
	},
    roundLengths: true,
    mousewheel: false,
	breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
	},
});