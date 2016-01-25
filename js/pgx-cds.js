var main = function() {
  $('.order').hide();

  $('.add').click(function() {
    $('.medication:last').clone(true).appendTo('.cpoe:last');
  });

  $('.medication').click(function() {
    $('<p>').text("Clicked!");

    $('this button').hide();
    $('.medication').removeClass('current');
    $('.order').hide();

    $(this).addClass('current');
    $(this).children('.order').show();
  });
};

$(document).ready(main);
