// Core code by HugeInc.
// Tweaked by TeamNexus

var main = function() {
	$('#home-btn').click(function() {
		$('slide').removeClass('active');
		$('slide:nth-child(1)').addClass('active');
	});

	$('#home-btn').click(function() {
		$('slide').removeClass('active');
		$('slide:nth-child(2)').addClass('active');
	});

	$('#home-btn').click(function() {
		$('slide').removeClass('active');
		$('slide:nth-child(3)').addClass('active');
	});

	$('#home-btn').click(function() {
		$('slide').removeClass('active');
		$('slide:nth-child(4)').addClass('active');
	});

	var delta;
	var currentSlideIndex = 1;

	function elementScroll (e) {

		// --- Scrolling up ---
		if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {

			delta--;

			if ( Math.abs(delta) >= 5) {
			document.prevSlide();
			}
		}

		// --- Scrolling down ---
		else {

			delta++;

			if (delta >= 5) {
				document.nextSlide();
			}
		}

		// Prevent page from scrolling
		return false;
	}

	function prevSlide() {

		$('slide:nth-child(' + currentSlideIndex + ')').toggleClass('active');

		currentSlideIndex--;

		if(currentSlideIndex < 1) {
			currentSlideIndex = 1;
		}

		$('slide:nth-child(' + currentSlideIndex + ')').toggleClass('active');
	}

	function nextSlide() {

		$('slide:nth-child(' + currentSlideIndex + ')').toggleClass('active');

		currentSlideIndex++;

		if(currentSlideIndex > 4) {
			currentSlideIndex = 4;
		}

		$('slide:nth-child(' + currentSlideIndex + ')').toggleClass('active');
	}

	$(document).keypress(function(event) {
	    if(event.which === 33 || event.which === 37 || event.which === 38) {
	      document.write(5);
	    }
			else if(event.which === 34 || event.which === 39 || event.which === 40) {
				document.nextSlide();
			};
	});

	$(window).on({
		'DOMMouseScroll mousewheel': elementScroll
	});
};

$(document).ready(main);
