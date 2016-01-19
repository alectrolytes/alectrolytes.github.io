var main = function() {
  $('.add').click(function() {
    var newmed = $('li:last');
    $('.medications').append(newmed);
  });
};

$(document).ready(main);
