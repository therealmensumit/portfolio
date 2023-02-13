/* let setElementHeight = function () {
    let height = $(window).height();
    $('.main-height').css('height', (height));
};

$(window).on("resize", function () {
    setElementHeight();
}).resize(); */

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

document.getElementById("darkMode").onclick = ()=> {
	document.getElementsByTagName("body")[0].classList.toggle("dark-bg");
	document.querySelector(".bi-sun-fill").classList.toggle("d-none");
	document.querySelector(".bi-moon-fill").classList.toggle("d-none");
}

if(screen.width < 768) {
	document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
}

const swiper = new Swiper(".client-slider", {
	slidesPerView: 2,
	loop: true,
	spaceBetween: 20,
	freeMode: false,
	speed: 2000,
	autoplay: {
	  delay: 0,
	},
    roundLengths: false,
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