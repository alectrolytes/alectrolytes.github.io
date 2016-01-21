var main = function() {
  $('.add').click(function() {
    $('li:last').clone(true).appendTo('ul:last');
    $('p', this.parent()).text('Clicked!');
  });
};

$(document).ready(main);
