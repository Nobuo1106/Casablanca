'use strict';
$(function() {
  var width = 720;
  var animationSpeed = 2500;
  var pause = 5000;
  var currentSlide = 1;
  var $sdr1841 = $('#sdr1841');
  var $slideContainer = $('.sld', $sdr1841);
  var $sld = $('.slide', $sdr1841);
  var interval;

  function startsdr1841() {
    interval = setInterval(function() {
      $slideContainer.animate({
        'margin-left': '-=' + width
      }, animationSpeed, function() {
        if (++currentSlide === $sld.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function pausesdr1841() {
    clearInterval(interval);
  }
  $slideContainer.on('mouseenter', pausesdr1841).on('mouseleave', startsdr1841);
  startsdr1841();
});
document.getElementsByTagName("h1")[0].style.fontSize = "60px";
