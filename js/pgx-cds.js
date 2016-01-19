var main = function() {
  $('.add').click(function() {
    $('.medications:last-child').clone().appendTo('li');
  });
};

$(document).ready(main);
