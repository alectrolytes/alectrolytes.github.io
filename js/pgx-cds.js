var main = function() {
  $('.order').hide();
  $('.report').hide();
  $('.info-btn').hide();

  $('#fade').show();
  $('#case').show();

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
    $('.details').removeClass('current-details');
    $('.order').hide();
    $('.report').hide();

    $(this).children('.details').addClass('current-details');
    $(this).children('.order').show();
    $(this).children('.report').show();
  });

  $('.med').click(function() {
    $(this).closest('.list').find('.med').removeClass('current-med');
    $(this).addClass('current-med');

    var report = $(this).closest('.medication').find('.report');
    report.children('p').remove();
    report.children('.info-btn').hide();
    if ($(this).children().hasClass('pgx-warning')) {
      $('<p><strong>Major Drug-Gene Interaction:</strong> Codeine (CYP2D6 substrate) is contraindicated patient John Doe who exhibits ultra-rapid metabolism. Morphine is recommended as an alternative.</p>').appendTo(report);
      report.children('.info-btn').show();
    }
  });

  $('.info-btn').click(function() {
    $('#more-info').show();
    $('#fade').show();
  });

  $('#close-btn').click(function() {
    $('#more-info').hide();
    $('case').hide();
    $('#fade').hide();
  });

};

$(document).ready(main);
