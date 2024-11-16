/* =====================================
Template Name: DoubiCommerce Template
Author Name: Doube Victoire
Author URI: 
Description: DoubiComm - eCommerce HTML5 Template.
Version:1.0
========================================*/
/*=======================================
[Start Activation Code]
=========================================
	02. Sticky Header Js
	06. Popular Slider Js
	13. Extra Scroll JS

	17. Nice Select Js
	19. Preloader Js

*/

(function ($) {
	"use strict";

	/*====================================
		02. Sticky Header JS
	======================================*/
	jQuery(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			$('.header').addClass("sticky");
		} else if ($(this).scrollTop() < 200) {
			$('.header').removeClass("sticky");
		}
	});

	/*=======================
		  Popular Slider JS
		=========================*/
	$('.popular-slider').owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 400,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		merge: true,
		dots: false,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		responsive: {
			0: {
				items: 1,
			},
			300: {
				items: 1,
			},
			480: {
				items: 2,
			},
			768: {
				items: 3,
			},
			1170: {
				items: 4,
			},
		}
	});

	/*====================================
		13. Extra Scroll JS
	======================================*/
	// $('.scroll').on("click", function (e) {
	// 	var anchor = $(this);
	// 	$('html, body').stop().animate({
	// 		scrollTop: $(anchor.attr('href')).offset().top - 0
	// 	}, 900);
	// 	e.preventDefault();
	// });

	/*=================================================
		17. Nice Select Js: Apply nice select library
				  on html select element
	==================================================*/
	$('select').niceSelect();

	/* Preloader Js */
	// After 2s preloader is fadeOut
	$('.dbcpreloader').delay(2000).fadeOut('slow');
})(jQuery);