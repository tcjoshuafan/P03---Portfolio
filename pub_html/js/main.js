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

$(document).ready(function(){
	$('.bg-video').bgVideo();
});

$('.content-toggle .filter-button').on('click', function (e) {
   console.log(e);
   if ($(e.target).data('filter') === '.long') {
     $('body').addClass('long');
   } else {
     $('body').removeClass('long');
   }
 });

 // // When the user scrolls the page, execute myFunction
 // window.onscroll = function() {myFunction()};
 //
 // // Get the header
 // var header = document.getElementById("stickynav");
 //
 // // Get the offset position of the navbar
 // var sticky = header.offsetTop;
 //
 // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
 // function myFunction() {
 //   if (window.pageYOffset >= sticky) {
 //     header.classList.add("sticky");
 //   } else {
 //     header.classList.remove("sticky");
 //   }
 // }
