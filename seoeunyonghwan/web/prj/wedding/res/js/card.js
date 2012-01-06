function registerCardFlipper(jqel) {
	jqel.click(function() {
        var faces = $(this).find('.faces');
        if(faces.hasClass('flipped')) {
        	faces.removeClass('flipped');
        } else {
            faces.addClass('flipped');
        }
        return false;
	});
}
