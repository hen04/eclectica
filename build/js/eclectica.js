$(function(){

	$('.slider-top').slick({
		infinite: true,
		speed: 500,
		autoplay: true,
		arrows: false,
		fade: true,
		cssEase: 'linear'
	});

	$('.slider-service').slick({
		infinite: true,
		speed: 500,
		autoplay: true
	});

	$('.slider-content').slick();

});
