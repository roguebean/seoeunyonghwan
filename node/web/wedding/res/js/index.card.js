// remap jQuery to $
(function($){})(window.jQuery);

/* trigger when page is ready */
$(document).ready(function (){
  var card = $('#card');
  registerCardFlipper(card);
});
