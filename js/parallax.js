$(document).ready(function() {

  $('.bigjello').on('mouseenter', function(){
    $('.bigjello').addClass('animated jello infinite');
  });
  $(window).scroll(function(){
    $('.umbrella').addClass('animated swing');
  });
  $('.umbrella').on('mouseenter', function(){
    $('.umbrella').toggleClass('animated swing');
  });

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
  $('#parallax-big-jello').css('top',(0-(scrolled*.43))+'px');
  $('#parallax-umbrella').css('top',(0-(scrolled*.01))+'px');
}

