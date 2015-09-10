
var timer;

function myTimer(sec) {
    if (timer) clearInterval(timer);
    timer = setInterval(function() {
        $('#timer').text(sec--);
        if (sec == -1) {
            clearInterval(timer);
            alert('done');
        }
    }, 1000);
}

$("#knap, #reset").click(function() {
    myTimer(0030);
});