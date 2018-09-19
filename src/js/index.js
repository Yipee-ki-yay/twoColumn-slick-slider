// let status = "JS - OK!";
// function cl(arg1, arg2, arg3, arg4) {
// 	console.log(arg1, arg2 || '', arg3 || '', arg4 || '');
// 	return '-';
// }

// cl(status);

// var PopupModule, RecentFunctions, ValidationModule;
// var AccordionModule;
// var AnimateBorder;

// var popupOrder,
// 		modals, pageOverlay;

// var test = 'include js error';

jQuery(document).ready(function() {
	// console.log('document ready')
	// popupOrder = document.getElementById('popupOrder');
	
	// modals = document.getElementsByClassName('popup');
	// pageOverlay = document.getElementById('pageOverlay');


	// =================Include Modules==============================

	// @@include('testModule.js')

	/*@@include('frames/RecentFunctionsModule.js')*/
	/*@@include('frames/toggleButtonContent.js')*/
	/*@@include('frames/custom_Input_Type_number.js')*/

	/*@@include('frames/AccordionModule.js')*/
	/*@@include('frames/ToggleContentModule.js')*/
	/*@@include('frames/SwitchTabsModule.js')*/
	/*@@include('frames/PopupModule.js')*/
	/*@@include('frames/TextLimitModule.js')*/
	/*@@include('frames/AnimateBorderModule.js')*/
	/*@@include('frames/ValidationModule.js')*/


	// =============================================================

	
		// console.log('window load')

	// if ($('body')) {console.log('jQuery OK')}
	// console.log(test);


  // ---------Popups Block-------

	// $('body').on('click', '.orderButton', function() {
 //  	// e.preventDefault();
 //  	if (popupOrder) {
 //  		PopupModule.openPopup(popupOrder);
 //  	}
 //  });

  // ---------Accordion Blocks-------
	// $('accordionBlockSelector').on('click', '.buttonSelector', function(e) {
	// 	// console.time('click accordion working time');

	// 	if (document.documentElement.clientWidth < 992) {
	// 		e.stopPropagation();
	// 		let submenuBlock = this.nextElementSibling;
	// 		let button = this;

	// 	// let siblingsBlocks = document.querySelectorAll('#publicInfoPage article.publicInfo-block .titleBlock + .hiddenContent');

	// 		toggleButtonContent(button);
	// 		AccordionModule.toggleContent("withoutSiblings", button, submenuBlock );
	// 		// AccordionModule.toggleContent("withSiblings", button, submenuBlock, siblingsBlocks );				

	// 	}
	// 	// console.timeEnd('click accordion working time');
	// })

  // ---------Text Limit-------
	// let textBlocks = document.querySelectorAll('.selector');
	// textBlocks.length ? TextLimitModule.sliceText(textBlocks, 180) : null;
	

	// ----------Scroll-to Section---------------
	
	// $('body').on('click', 'article.story-item', function() {
		
	// 	$('html, body').animate({
	// 		scrollTop: $("#" + $(this).attr('data-story-id') ).offset().top
	// 	}, 500);
	// })



	// ===========Initializations=============

	// AnimateBorder(document.querySelectorAll('.animated-border-block svg'), {
	// 	borderWidth: 3,
	// 	shadedSection: 100,
	// 	transparentSection: 25,
	// 	reverse: false,
	// 	radius: true 
	// })
	
	if (window.innerWidth < 768) {
		(function() {
			if (! jQuery('.main-slider-mobile').length) return;

			jQuery('.main-slider-mobile').slick({
				arrows: false,
				dots: true,
			});
		})();
	}

	if (window.innerWidth >= 768) {
		(function() {
			if(! jQuery('.main-slider-desctop').length) return;

			let sliderDesctop = jQuery('.main-slider-desctop');
			let counter = 0;			

			sliderDesctop.slick({
				arrows: false,
				dots: true,
				fade: true,
				speed: 600,
				autoplay: true,
		    autoplaySpeed: 4000,
			});

			// begin custom numbers dots
			let sliderDots = jQuery('.slick-dots li button');
			
			for (let i = 0; i < sliderDots.length; i++) {
				$(sliderDots[i]).text(i);	
			}
			jQuery('.slick-dots li:first-child').css('display', 'none');
			// end custom numbers dots

			// setTimeout(function() {
			// 	sliderDesctop.find('.slider-desctop-item:first-child').addClass('animated');				
			// }, 10);

			sliderDesctop.on('beforeChange', function(event, slick, currentSlide) {	
				jQuery(slick['$slides'][currentSlide]).removeClass('animated');					
			});

			sliderDesctop.on('afterChange', function(event, slick, currentSlide) {
				jQuery(slick['$slides'][currentSlide]).addClass('animated');	

				counter++;
				if(counter == slick['$slides'].length) {
					jQuery(this).slick('slickSetOption', 'autoplay', false);
				}

			});

		})();
	}

});


// window.onload = function() {
	// console.log('window load')
	// jQuery('#page-preloader').fadeOut('slow');
// }
