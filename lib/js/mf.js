$(document).ready(function() {
		//Calculate the height of <header>
		//Use outerHeight() instead of height() if have padding
		var aboveHeight = $('.menu').outerHeight();
	//when scroll
		$(window).scroll(function(){
			//if scrolled down more than the header’s height
				if ($(window).scrollTop() > aboveHeight){
			// if yes, add “fixed” class to the <nav>
			// add padding top to the #content 
				$('.menu').addClass('fixed').css('top','0').next()
				.css('padding-top','60px');
				} else {
				$('.menu').removeClass('fixed').next()
				.css('padding-top','0');
			}
		});
});