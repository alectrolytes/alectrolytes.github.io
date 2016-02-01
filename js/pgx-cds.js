var main = function() {
  $('.order').hide();
  $('.report').hide();

  $('.add').click(function() {
    $('.medication:last').clone(true).appendTo('.cpoe:last');
    $(this).parent().append('<p>Select medication</p>');
    $(this).hide();
    $(this).parent().children('.remove').show();
  });

  $('.remove').click(function() {
    $(this).parent().parent().hide();
  });

  $('.medication').click(function() {
    $('.details').removeClass('current');
    $('.order').hide();
    $('.report').hide();

    $(this).children('.details').addClass('current');
    $(this).children('.order').show();
    $(this).children('.report').show();
  });

  $('.med').click(function() {
    var report = $(this).closest('.medication').find('.report');
    $(this).children('p').clone().appendTo(report);
  });
};

$(document).ready(main);
