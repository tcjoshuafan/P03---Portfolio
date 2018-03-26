$(document).ready(function() {
    $("#navToggle a").click(function(e){
        e.preventDefault();

        $("header > nav").slideToggle();
        $("#logo").toggleClass("menuUp menuDown");
    });

    $(window).resize(function() {
        if($( window ).width() >= "850") {
            $("header > nav").css("display", "block");

            if($("#logo").attr('class') == "menuDown") {
                $("#logo").toggleClass("menuUp menuDown");
            }
        }
        else {
            $("header > nav").css("display", "none");
        }
    });

    $("header > nav > ul > li > a").click(function(e) {
        if($( window ).width() <= "850") { if($(this).siblings().size() > 0 ) {
                e.preventDefault();
                $(this).siblings().slideToggle("fast")
                $(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');
            }
        }
    });
});

setInterval(function(){
  $("#glitch-business").toggle();
  setTimeout(function(){
    $("#glitch-business").toggle();
  }, 1000)
},2000);

setInterval(function(){
  $("#glitch-ux").toggle();
  setTimeout(function(){
    $("#glitch-ux").toggle();
  }, 1000)
},2000);
