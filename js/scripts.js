$(document).ready(function () {

  // Hello World
  $('#intro-hello').delay(800).queue(function (next) {
    $(this).addClass('intro-visible');
  })

  // Paragraph description
  $('#intro-h2').delay(1100).queue(function (next) {
    $(this).addClass('intro-visible');
  })

  $('svg').delay(2250).queue(function (next) {
    $(this).css('opacity', '1');
  })

  // Signature - Marc
  $('#stroke-1').delay(2000).queue(function (next) {
    $(this).css('stroke', '#222');
  })

  // P - bottom line
  $('#stroke-2').delay(3000).queue(function (next) {
    $(this).css('stroke', '#222');
  })

  // P - top
  $('#stroke-3').delay(3300).queue(function (next) {
    $(this).css('stroke', '#222');
  })

  // osth
  $('#stroke-4').delay(3800).queue(function (next) {
    $(this).css('stroke', '#222');
  })

  // osth - line
  $('#stroke-5').delay(4000).queue(function (next) {
    $(this).css('stroke', '#222');
  })

  function getRandomDarkColorMenu() {
    var letters = '012345'.split('');
    var color = '#';
    color += letters[Math.round(Math.random() * 5)];
    letters = '0123456789ABCDEF'.split('');
    for (var i = 0; i < 5; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  $('#menu').click(function () {
    $(this).toggleClass('open');
    $('#menu-overlay').toggleClass('active-overlay');
    var randomDarkColor = getRandomDarkColorMenu();
    $('.active-overlay').css('background-color', randomDarkColor);
  });

});


