$(document).ready(function() {
  $('.project').hover(function() {
    $('.content').fadeIn(500);
  });
  var $root = $('html, body');
  $('a').click(function() {
    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
  $('img').on('dragstart', function(){return false;});
});
