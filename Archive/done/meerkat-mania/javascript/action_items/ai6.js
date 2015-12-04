$(document).ready(function () {

    slide_17.load();
    slide_17.play();

    $('#content2').hide();
    $('#content3').hide();
    $('#content4').hide();
    $('#btn1').hide();

    $('.close-Btn').click(function () {
        $('#retry-level').modal('show');
    });

    $("#Btn-hide1").click(function () {
        $('#retry-level').modal('hide');
    });

    $('#upload').click(function () {
        btn_upload.play()
        $('#content2').hide();
        $('#content3').show();
        slide_13.play();
       ;
    });

    $('#btn').click(function () {
        $('#btn').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai7.html");
        });
        btn_click.play();
    });

    $('#play').click(function () {
        $('#content').hide();
        btn_click.play();
        $('#content4').show();
        $('#btn1').delay(1000).fadeIn(2000); 
    });

    $('#btn1').click(function () {
        $('#content4').hide();
        btn_click.play();
        $('#btn1').hide();
        $('#content2').show();
    });

});