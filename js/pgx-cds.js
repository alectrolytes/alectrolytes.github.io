var main = function() {
  $('.order').hide();
  $('.report').hide();
  $('.info-btn').hide();

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
    $('.med').removeClass('current-details');
    $(this).children('.med').addClass('current-med');

    var report = $(this).closest('.medication').find('.report');
    report.children('p').remove();
    report.children('.info-btn').hide();
    if ($(this).children().hasClass('pgx-warning')) {
      $('<p><strong>PGX Warning:</strong> Codeine (CYP2D6 substrate) is contraindicated patient John Doe who exhibits weak expression of CYP2D6. Guaifenesin is recommended as an alternative.</p>').appendTo(report);
      report.children('.info-btn').show();
    }
  });

  $('.info-btn').click(function() {
    $('#more-info').show();
    $('#fade').show();
  });

  $('#close-btn').click(function() {
    $('#more-info').hide();
    $('#fade').hide();
  });

};

$(document).ready(main);
