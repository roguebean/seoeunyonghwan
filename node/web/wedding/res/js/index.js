// remap jQuery to $
(function($){})(window.jQuery);

/* trigger when page is ready */
$(document).ready(function (){
    $('#countdown').html("merong");
    var timerId = countdown(1330234200000, function(ts) {
        $('#countdown').html(ts.days + '\uC77C ' + ts.hours + '\uC2DC\uAC04 ' + ts.minutes + '\uBD84 ' + ts.seconds + '\uCD08');
    }, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
});
