
    var auto_slide = 1;
    var auto_slide_seconds = 3000;

    $('#carousel_ul li:first').before($('#carousel_ul li:last'));

    if (auto_slide == 1) {

        var timer = setInterval('slide("right")', auto_slide_seconds);
        // $('#hidden_auto_slide_seconds').val(auto_slide_seconds);
    }


function Stop() {
    clearInterval(timer);
}

function slide(where) {

    var item_width = $('#carousel_ul li').outerWidth() + 0;

    if (where == 'left') {

        var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
    } else {
        var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;

    }

    $('#carousel_ul:not(:animated)').animate({ 'left': left_indent }, 650, function () {

            if (where == 'left') {

                $('#carousel_ul li:first').before($('#carousel_ul li:last'));
            } else {

                $('#carousel_ul li:last').after($('#carousel_ul li:first'));
            }

            $('#carousel_ul').css({ 'left': '-210px' });
    });

}
