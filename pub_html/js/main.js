

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
