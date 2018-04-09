$(document).ready(function() {
     // grab the initial top offset of the navigation
       var stickyNavTop = $('.stickynav').offset().top;

       // our function that decides whether the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
         var scrollTop = $(window).scrollTop(); // our current vertical position from the top

         // if we've scrolled more than the navigation, change its position to fixed to stick to top,
         // otherwise change it back to relative
         if (scrollTop > stickyNavTop) {
             $('.stickynav').addClass('sticky');
         } else {
             $('.stickynav').removeClass('sticky');
         }
     };

     stickyNav();
     // and run it again every time you scroll
     $(window).scroll(function() {
       stickyNav();
     });
   });

$(".stickynav").scrollspy({activeClass: 'activeNav'});
