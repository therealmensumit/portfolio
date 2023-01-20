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
