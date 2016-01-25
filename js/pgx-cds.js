var main = function() {
  $('.add').click(function() {
    $('.medication:last').clone(true).appendTo('.cpoe:last');
    $('p', this.parent()).text('Clicked!');
  });
};

$(document).ready(main);
