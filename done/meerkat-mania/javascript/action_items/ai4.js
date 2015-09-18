$(document).ready(function () {
    flip.load();
    flip.play();

    $('#frame').hide();
    $('#video').hide();
    $('#btn').hide();
    $('#btn1').hide();
    $('#btn').fadeIn(3000);
    $('#btn').click(function () {
        $('#content').hide();
        $('#btn').hide();
        $('#frame').show();
        $('#video').show();
        btn_click.play();
        $('#btn1').fadeIn(74000);
       
    });
    $('#btn1').click(function () {
        
            $("#putcontenthere").load("action_items/ai5.html");
        
        btn_click.play();
    });
    $("#Btn-hide1").click(function () {
        $('#retry-level').modal('hide');

    });
    $('.close-Btn').click(function () {
        $('#retry-level').modal('show');
    });
})