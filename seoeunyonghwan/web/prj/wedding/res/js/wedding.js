// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){
  var card = $('#card');
  registerCardFlipper(card);

  var props = {
    'r': true,
    's': true,
    'g': true,
    'b': true,
    'p': false 
  }
  card.keypress(function(event) {
    switch(event.keyCode) {
      case 114:
        var value = props['r'] ? '0%' : '18%';
        $('.shadow, .background, .fog, .foreground, .overlay').css('border-radius', value);
        $('.gloss').css('border-top-left-radius', value);
        $('.gloss').css('border-top-right-radius', value);
        props['r'] = !props['r'];
        break;
      case 115:
        var value = props['s'] ? '0.0' : '1.0';
        $('.shadow').css('opacity', value);
        props['s'] = !props['s'];
        break;
      case 103:
        var value = props['g'] ? '0.0' : '1.0';
        $('.gloss').css('opacity', value);
        props['g'] = !props['g'];
        break; 
      case 98:
        var value = props['b'] ? '0.0' : '1.0';
        $('.badge').css('opacity', value);
        props['b'] = !props['b'];
        break;
      case 112:
        var bg = props['p'] ? '#eee' : 'white';
        var border = props['p'] ? '1px' : '0px';
        var shadow = props['p'] ? '0px 6px 6px rgba(0, 0, 0, 0.4)' : 'none';
        $('body').css('background-color', bg);
        $('.face').css('border-width', border);
        $('.face').css('box-shadow', shadow);
        props['p'] = !props['p'];
        break;
    }
  });
  card.focus();
  // your functions go here
  /*
  $("#app_maps").click(function() {
    window.location = "http://maps.google.com/maps?q=%EA%B0%95%EB%82%A8%EA%B5%AC+%EB%85%BC%ED%98%84%EB%8F%99+66-24+%ED%8C%8C%ED%8B%B0%EC%98%A4%EB%82%98%EC%9D%B8&ll=37.519138,127.029119&t=m&z=15";
  });
  */
});


/* optional triggers
$(window).load(function() {
});

$(window).resize(function() {
	
});

*/
