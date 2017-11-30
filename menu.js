$(document).ready(function(){

    $("#nav-toggle").on("click", function(){
        $("#toggle").toggleClass("hide");
        
    });
    
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo('#slideshow');
}, 2000);