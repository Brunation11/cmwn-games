$(document).ready(function () {
    $('.Next').hide().delay(2000).fadeIn(2000);

    $('.flip').hide();
    setTimeout(function () {
        $('.flip').hide().delay(10).fadeIn(2000);
    },1000);
});