var main = function() {
  $('.add').click(function() {
    $('li:last').clone().appendTo('ul:last');
  });
};

$(document).ready(main);
