var main = function() {
  $('.order').hide();

  $('.add').click(function() {
    $('.medication:last').clone(true).appendTo('.cpoe:last');
  });

  $('.medication').click(function() {
    $('<p>').text("Clicked!");

    $(this).children('button').hide();
    $('.details').removeClass('current');
    $('.order').hide();

    $(this).children('.details').addClass('current');
    $(this).children('.order').show();
  });
};

$(document).ready(main);
