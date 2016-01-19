var main = function() {
  $('.add').click(function() {
    $('.medications').append($('li'));
  });
}

$(document).ready(main);
