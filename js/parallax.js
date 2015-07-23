$(document).ready(function() {

  /* Scroll event handler */
    $(window).bind('scroll',function(e){
      parallaxScroll();
    });
});

/* Scroll the background layers */
function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  $('#parallax-small-raindrops').css('top',(0-(scrolled*.16))+'px');
  $('#parallax-big-raindrops').css('top',(0-(scrolled*.26))+'px');
  $('#parallax-big-jello').css('top',(0-(scrolled*.4))+'px');
  $('#parallax-umbrella').css('top',(0-(scrolled*.07))+'px');
}

