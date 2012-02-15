// remap jQuery to $
(function($){})(window.jQuery);

/* trigger when page is ready */
$(document).ready(function (){
    var wdate = 1330234200000;
    var timerId = countdown(wdate, function(ts) {
        var current = new Date();
        var sign = current.getTime() > wdate ? '+' : '-';
        $('#countdown').html('D ' + sign + ' ' + ts.days + '\uC77C ' + ts.hours + '\uC2DC\uAC04 ' + ts.minutes + '\uBD84 ' + ts.seconds + '\uCD08');
    }, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
});
