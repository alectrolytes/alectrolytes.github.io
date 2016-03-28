var main = function() {

  var acetaminophen = {
    "strength" : ['160mg','325mg','650mg',],
    "route" : ['oral tablet','oral suspension','intravenous','rectal suppository'],
    "frequency" : ['daily','Q12','Q8','Q6','Q4']
  };

  var codeine = {
    "strength" : ['325-15mg','325-30mg','325-60mg',],
    "route" : ['oral tablet','oral suspension'],
    "frequency" : ['daily','Q12','Q8','Q6','Q4']
  };

  var fentanyl = {
    "strength" : ['12.5mcg/hr','25mcg/hr','50mcg/hr','75mcg/hr','100mcg/hr'],
    "route" : ['transdermal patch'],
    "frequency" : ['Q72']
  };

  var morphine = {
    "strength" : ['15mg','30mg','60mg','100mg','200mg'],
    "route" : ['oral tablet','oral suspension','intravenous'],
    "frequency" : ['daily','Q12','Q8','Q6','Q4']
  };

  var tramadol = {
    "strength" : ['25mg','50mg','100mg'],
    "route" : ['oral tablet'],
    "frequency" : ['daily','Q12','Q8','Q6','Q4']
  };

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

    $('#strength-table tbody').remove();
    $('#route-table tbody').remove();
    $('#frequency-table tbody').remove();

    console.log(acetaminophen['0']);

    if ($(this).is('#acetaminophen')) {
      populateTable($('#strength-table'), acetaminophen['0']);
      populateTable($('#route-table'), acetaminophen['1']);
      populateTable($('#frequency-table'), acetaminophen['2']);
    }
  });

  function populateTable(table, list) {
      table.append('<tbody class="list">');

      for (i in list) {
        table.append('<tr><td><p>');
        table.append(i);
        table.append('</p></td></tr>');
      }

      table.append('</tbody>');
  }

  $('.info-btn').click(function() {
    $('#more-info').show();
    $('#fade').show();
  });

  $('#close-btn').click(function() {
    $('#more-info').hide();
    $('#fade').hide();
  });

  $('#begin-btn').click(function() {
    $('#case').hide();
    $('#fade').hide();
  });

};

$(document).ready(main);
