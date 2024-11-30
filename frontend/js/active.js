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
	01. Mobile Menu JS
	02. Sticky Header JS
	06. Popular Slider JS
	13. Extra Scroll JS
	14. Aos Animate JS

	16. Scroll to Top JS
	17. Nice Select JS
	19. Preloader JS

*/

(function ($) {
	"use strict";

	/*====================================
			Mobile Menu
	======================================*/
	var $offcanvasNav = $("#offcanvas-menu a");
	$offcanvasNav.on("click", function () {
		var link = $(this);
		var closestUl = link.closest("ul");
		var activeLinks = closestUl.find(".active");
		var closestLi = link.closest("li");
		var linkStatus = closestLi.hasClass("active");
		var count = 0;

		closestUl.find("ul").slideUp(function () {
			if (++count == closestUl.find("ul").length)
				activeLinks.removeClass("active");
		});
		if (!linkStatus) {
			closestLi.children("ul").slideDown();
			closestLi.addClass("active");
		}
	});

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

	/*====================================
		06.  Popular Slider JS
	======================================*/
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
	/*====================================
		14. Aos Animate JS
	======================================*/
	AOS.init({
		duration: 1500,
		disable: !1,
		offset: 0,
		once: !0,
		easing: "ease"
	});


	
	/*====================================
		16. Scroll To Top JS
	======================================*/
	var scrollToTopBtn = '.scrollToTop'
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 400) {
			$(scrollToTopBtn).addClass('show');
		} else {
			$(scrollToTopBtn).removeClass('show');
		}
	});

	$(scrollToTopBtn).on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	/*=================================================
		17. Nice Select Js: Apply nice select library
				  on html select element
	==================================================*/
	$('select').niceSelect();

	/* Preloader Js */
	// After 2s preloader is fadeOut
	$('.dbcpreloader').delay(2000).fadeOut('slow');
})(jQuery);