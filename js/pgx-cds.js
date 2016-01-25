var main = function() {
  $('.order').hide();

  $('.add').click(function() {
    $('.medication:last').clone(true).appendTo('.cpoe:last');
    $(this).parent().append('<p>Select medication</p>');
    $(this).hide();
  });

  $('.medication').click(function() {
    $('.details').removeClass('current');
    $('.order').hide();

    $(this).children('.details').addClass('current');
    $(this).children('.order').show();
  });
};

$(document).ready(main);
