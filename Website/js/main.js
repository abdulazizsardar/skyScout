(function(){
	'use strict';
	$(document).ready(function(){
		// validate forms
		$(".common__form").validate();
		$("#contact_us .common__form").validate();

		// init wow js
		new WOW().init();

		// faq handler
		$('.faq__item').not('.is-opened').find('.faq__ans').hide();
		$('.faq__item').click(function(){
			if(!$(this).hasClass('is-opened')){
				$('.faq__ans').slideUp('fast');
				$('.faq__item').removeClass('is-opened');
			}
			$(this).find('.faq__ans').slideToggle('fast');
			$(this).toggleClass('is-opened');
		});

		// contact form
		$('.common__form .form-control').each(function(){
			if( typeof $(this).attr('required') !== 'undefined' ){
				$(this).parents('.form-group').find('label').append('<span class="required__sign">*</span>');
			}
		});

		// files uploader handler
		$('.common__form .files input').change(function(e){
			if(e.target.files.length !== 0){
				var fileName = e.target.files[0].name;
				$('.file__name').text(fileName);
				$('.files__hints-info').hide();
				$('.file__name--preview').show();	
			}
			
		});

		$('.remove__file').click(function(e){
			$('.common__form .files input').val('');
			$('.files__hints-info').show();
			$('.file__name--preview').hide();
		});
		$('.file__name--preview').hide();


	});


	// subscribe form handler
	$('.subscribe__form').submit(function(e){
		e.preventDefault();
		var email = $('#subscription_email').val();
		var apply_form_offset = $('.contact__form-container').offset().top;
		$('#email').val(email);
		$('html, body').animate({
			scrollTop: apply_form_offset
		});
	});

	// application form handler
	$('.contact__form-container form').submit(function(e){
		e.preventDefault();
		if( $(this).valid() ){
			$('#form_response').modal('show');
		}
	});

	// country select init
	$("#country").countrySelect({
		defaultCountry: "en",
		// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do', 'jp'],
		preferredCountries: ['ca', 'gb', 'us'],
		responsiveDropdown: true
	});



	// scroll to handler
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
		if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('.nav-link').removeClass('active');
				$(this).addClass('active');
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {

					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex','-1');
						$target.focus(); 
					};
				});
			}
			if( $(this).hasClass('nav-link') && window.innerWidth < 768 ) {
				$('.navbar-toggler').trigger('click');
			}
		}
	});

	$('.navbar-toggler').click(function(){
		if( $(this).hasClass('collapsed') ) {
			$(this).find('.navbar-toggler-icon i').toggleClass('fa-bars');
			$(this).find('.navbar-toggler-icon i').toggleClass('fa-times');
		}else {
			$(this).find('.navbar-toggler-icon i').toggleClass('fa-bars');
			$(this).find('.navbar-toggler-icon i').toggleClass('fa-times');
		}
		
	});

	// sticky header handler
	$(window).on('scroll', function(){
		if ($(window).scrollTop() >= 120) {
			$('body').addClass('is__header-fixed');
		} else {
			$('body').removeClass('is__header-fixed');
		}	
	});
	

})();


// anime handlers
anime({
	targets: '.anime-1',
	translateY: -10,
	opacity: .5,
	easing: 'linear',
	direction: 'alternate',
	duration: 2000,
	loop: true
});

anime({
	targets: '.move-x',
	translateX: 20,
	easing: 'linear',
	direction: 'alternate',
	duration: 3000,
	loop: true
});
anime({
	targets: '.move-x-slow',
	translateX: 30,
	easing: 'linear',
	direction: 'alternate',
	duration: 5000,
	loop: true
});
anime({
	targets: '.move-x-fast',
	translateX: 30,
	easing: 'linear',
	direction: 'alternate',
	duration: 2000,
	loop: true
});


anime({
	targets: '.anime-1-slow',
	translateY: -20,
	opacity: .5,
	easing: 'linear',
	direction: 'alternate',
	duration: 3000,
	loop: true
});

anime({
	targets: '.anime-1-very-slow',
	translateY: -20,
	opacity: .5,
	easing: 'linear',
	direction: 'alternate',
	duration: 4000,
	loop: true
});

anime({
	targets: '.anime-2',
	keyframes: [
	{translateY: -5},
	{translateY: 5},
	{translateY: 0}
	],
	opacity: .7,
	easing: 'linear',
	direction: 'alternate',
	duration: 2000,
	loop: true,
});

anime({
	targets: '.anime-2-very-slow',
	keyframes: [
	{translateY: -5},
	{translateY: 5},
	{translateY: 0}
	],
	opacity: .7,
	easing: 'linear',
	direction: 'alternate',
	duration: 4000,
	loop: true,
});

anime({
	targets: '.anime-2-slow',
	keyframes: [
	{translateY: -10},
	{translateY: 10},
	{translateY: 0}
	],
	easing: 'linear',
	direction: 'alternate',
	duration: 3000,
	loop: true,
});

var anime3 = anime({
	targets: '.anime-3',
	// scale: .3,
	opacity: .5,
	keyframes: [
	{scale: .1},
	// {scale: 1},
	],
	easing: 'easeInOutSine',
	// direction: 'alternate',
	duration: 3000,
	loop: true,
	reverse: true,
});
anime3.reverse();

anime3Slow = anime({
	targets: '.anime-3-slow',
	// scale: .3,
	opacity: .5,
	scale: .2,
	easing: 'easeInOutQuad',
	// direction: 'alternate',
	duration: 4000,
	loop: true,
});
anime3Slow.reverse();


var anime4 = anime({
	targets: '.anime-4',
	// scale: .3,
	opacity: .5,
	keyframes: [
	{
		scale: .1,
		rotate: 45,
	},
	// {scale: 1},
	],
	easing: 'easeInOutSine',
	// direction: 'alternate',
	duration: 3000,
	loop: true,
	reverse: true,
});
anime4.reverse();

var anime4Slow = anime({
	targets: '.anime-4-slow',
	// scale: .3,
	opacity: .5,
	keyframes: [
	{
		scale: .1,
		rotate: 45,
	},
	// {scale: 1},
	],
	easing: 'easeInOutSine',
	// direction: 'alternate',
	duration: 4000,
	loop: true,
	reverse: true,
});
anime4Slow.reverse();

var anime4VerySlow = anime({
	targets: '.anime-4-very-slow',
	// scale: .3,
	opacity: .5,
	keyframes: [
	{
		scale: .1,
		rotate: 45,
	},
	// {scale: 1},
	],
	easing: 'easeInOutSine',
	// direction: 'alternate',
	duration: 5000,
	loop: true,
	reverse: true,
});
anime4VerySlow.reverse();

var anime5 = anime({
	targets: '.anime-5',
	opacity: .5,
	keyframes: [
	{
		scale: .1,
	},
	],
	easing: 'easeInOutSine',
	// direction: 'alternate',
	delay: 1000,
	duration: 3000,
	loop: true,
});
anime5.reverse();


var anime6Fast = anime({
	targets: '.anime-6-fast',
	opacity: .5,
	keyframes: [
	{
		scale: .1,
	},
	],
	easing: 'easeInOutSine',
	delay: 4000,
	duration: 1000,
	loop: true,
});
anime6Fast.reverse();


var anime6 = anime({
	targets: '.anime-6',
	opacity: .5,
	keyframes: [
	{
		scale: .1,
	},
	],
	easing: 'easeInOutSine',
	delay: 3500,
	duration: 1500,
	loop: true,
});
anime6.reverse();

var anime6Slow = anime({
	targets: '.anime-6-slow',
	opacity: .5,
	keyframes: [
	{
		scale: .1,
	},
	],
	easing: 'easeInOutSine',
	delay: 3000,
	duration: 2000,
	loop: true,
});
anime6Slow.reverse();


var anime6VerySlow = anime({
	targets: '.anime-6-very-slow',
	opacity: .5,
	keyframes: [
	{
		scale: .1,
	},
	],
	easing: 'easeInOutSine',
	delay: 2500,
	duration: 2500,
	loop: true,
});
anime6VerySlow.reverse();



