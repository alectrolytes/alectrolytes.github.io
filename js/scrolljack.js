var main = function() {
	
	// --- navbar buttons ---
	$('#home-btn').click(function() {
	  $('.main').moveTo(1);
	});

	$('#about-btn').click(function() {
		$('.main').moveTo(2);
	});

	$('#projects-btn').click(function() {
		$('.main').moveTo(3);
	});

	$('#challenges-btn').click(function() {
		$('.main').moveTo(4);
	});

};

$(document).ready(main);
