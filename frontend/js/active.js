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
	05. Checkbox JS
	06. Popular Slider JS
	13. Extra Scroll JS
	14. Aos Animate JS

	16. Scroll to Top JS
	17. Nice Select JS
	18. Product Quantity Input
	19. Preloader JS

*/

(function ($) {
	"use strict";
	owlCarousels();
	/*====================================
		01. Mobile Menu
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

	// // Popup - Iframe Video - Map etc.
	// if ( $.fn.magnificPopup ) {
	//     $('.btn-iframe').magnificPopup({
	//         type: 'iframe',
	//         removalDelay: 600,
	//         preloader: false,
	//         fixedContentPos: false,
	//         closeBtnInside: false
	//     });
	// }

	// Product Image Zoom plugin - product pages
	if ($.fn.elevateZoom) {
		var zoom_type;
		if (window.innerWidth <= 991) {
			zoom_type = "inner";
		} else {
			zoom_type = "window";
		}
		function initializeZoom() {
			$('#product-zoom').elevateZoom({
				gallery: 'product-zoom-gallery',
				galleryActiveClass: 'active',
				zoomType: zoom_type,
				zoomWindowWidth: 500,
				zoomWindowHeight: 500,
				cursor: "crosshair",
				zoomWindowFadeIn: 400,
				zoomWindowFadeOut: 400,
				responsive: true
			});
		}
		initializeZoom();
		// On click change thumbs active item
		$('.product-gallery-item').on('click', function (e) {
			e.preventDefault();
			$('#product-zoom-gallery').find('a').removeClass('active');
			$(this).addClass('active');
			// Change the main product image based on the thumbnail clicked
			const newSrc = $(this).find('img').attr('data-zoom-image');
			console.log(newSrc);
			$('#product-zoom').attr('src', newSrc).attr('data-zoom-image', newSrc)//.data('elevateZoom');.changeZoom(newSrc);//$(this).find('img').data('data-zoom-image')
		});

		var ez = $('#product-zoom').data('elevateZoom');

		// Open popup - product images
		$('#btn-product-gallery').on('click', function (e) {
			if ($.fn.magnificPopup) {
				$.magnificPopup.open({
					items: ez.getGalleryList(),
					type: 'image',
					gallery: {
						enabled: true
					},
					fixedContentPos: false,
					removalDelay: 600,
					closeBtnInside: false
				}, 0);

				e.preventDefault();
			}
		});
	}
	/*===============================
		10. Checkbox JS
	=================================*/
	$('input[type="checkbox"]').change(function () {
		if ($(this).is(':checked')) {
			$(this).parent("label").addClass("checked");
		} else {
			$(this).parent("label").removeClass("checked");
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



	function owlCarousels($wrap, options) {
		if ($.fn.owlCarousel) {
			var owlSettings = {
				items: 1,
				loop: true,
				margin: 0,
				responsiveClass: true,
				nav: true,
				navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
				dots: true,
				smartSpeed: 400,
				autoplay: false,
				autoplayTimeout: 15000
			};
			if (typeof $wrap == 'undefined') {
				$wrap = $('body');
			}
			if (options) {
				owlSettings = $.extend({}, owlSettings, options);
			}

			// Init all carousel
			$wrap.find('[data-toggle="owl"]').each(function () {
				var $this = $(this),
					newOwlSettings = $.extend({}, owlSettings, $this.data('owl-options'));

				$this.owlCarousel(newOwlSettings);

			});
		}
	}


	/* Preloader Js */
	// After 2s preloader is fadeOut
	$('.dbcpreloader').delay(2000).fadeOut('slow');
})(jQuery);