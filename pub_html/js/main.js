setInterval(function(){
  $("#glitch-business").toggle();
  setTimeout(function(){
    $("#glitch-business").toggle();
  }, 3000)
},4000);

setInterval(function(){
  $("#glitch-ux").toggle();
  setTimeout(function(){
    $("#glitch-ux").toggle();
  }, 3000)
},4000);


$(function() {
  $('.toggle-button').on('click',function() {
    $('.navbar-links').toggleClass('open');
  });
});

$('.content-toggle .filter-button').on('click', function (e) {
   if ($(e.target).data('filter') === '.long') {
     $('body').addClass('long');
   } else {
     $('body').removeClass('long');
   }
 });

 //
 // $(document).ready(function() {
	// 		// grab the initial top offset of the navigation
	// 	   	var stickyNavTop = $('.stickynav').offset().top;
 //
	// 	   	// our function that decides whether the navigation bar should have "fixed" css position or not.
	// 	   	var stickyNav = function(){
	// 		    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
 //
	// 		    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	// 		    // otherwise change it back to relative
	// 		    if (scrollTop > stickyNavTop) {
	// 		        $('.stickynav').addClass('sticky');
	// 		    } else {
	// 		        $('.stickynav').removeClass('sticky');
	// 		    }
	// 		};
 //
	// 		stickyNav();
	// 		// and run it again every time you scroll
	// 		$(window).scroll(function() {
	// 			stickyNav();
	// 		});
	// 	});

$(document).ready(function() {
 			$('.stickynav').scrollspy({
 				min: $('.stickynav').offset().top,
 				onEnter: function(element, position) {
 					$(".stickynav").addClass('sticky');
 				},
 				onLeave: function(element, position) {
 					$(".stickynav").removeClass('sticky');
 				}
 			});
    });
