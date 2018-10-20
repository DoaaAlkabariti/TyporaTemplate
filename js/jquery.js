$(document).ready(function(){
////*******function for fade in and out for the images in theme section *********////
  $(".theme a").click(function(){
      $(".groupOfImages").fadeIn(1000);
      $(".secondGroupOfImages").fadeOut(1000);
});
////****fuction show the hidden div in cotact section**************************////
$("#feedback-content").click(function(){
    $("#feedback-from ,.send-update").show(1000);
});
////*************************************************////
// Page Scroll
// jQuery(document).ready(function ($) {
// 	$("a[href*=#]:not([href=#])").click(function() {
// 		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
// 			|| location.hostname == this.hostname) {
//
// 			var target = $(this.hash);
// 			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
// 			if (target.length) {
// 				$('html,body').animate({
// 					scrollTop: target.offset().top - 32
// 				}, 1000);
// 				return false;
// 			}
// 		}
// 	});
// });

// Fixed Nav
jQuery(document).ready(function ($) {
	$(window).scroll(function(){
		var scrollTop = 142;
		if($(window).scrollTop() >= scrollTop){
			$('nav').css({
				position : 'fixed',
				top : '0'
			});
		}
		if($(window).scrollTop() < scrollTop){
			$('nav').removeAttr('style');
		}
	})

  // Active Nav Link
  $('nav ul li a').click(function(){
         $('nav ul li a').removeClass('active');
         $(this).addClass('active');
    });
})



});
