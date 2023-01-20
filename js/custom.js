var setElementHeight = function () {
    var height = $(window).height();
    $('.main-height').css('height', (height));
};

$(window).on("resize", function () {
    setElementHeight();
}).resize();

$(function(){
	$(".typed").typed({
		strings: ["Web Designer", "UI/UX Designer", "Freelance"],
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

var swiper = new Swiper(".client-slider", {
	slidesPerView: 3,
	loop: true,
	spaceBetween: 20,
	freeMode: true,
	speed: 2000,
	autoplay: {
	  delay: 0,
	//   disableOnInteraction: false
	},
    roundLengths: true,
    mousewheel: true,
	/* pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	}, */
});