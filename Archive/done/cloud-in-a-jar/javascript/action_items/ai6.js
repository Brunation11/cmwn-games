
$(document).ready(function () {


        $('#btn').click(function () {
            $('#btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai7.html");
    });
         
            try {
                skip_btn.play();
            }
            catch (err) {
                //no sound - log error
            }
});

$('#email').click(function () {
    $('#email').delay(1000).delay(1000, function () {
        $("#putcontenthere").load("action_items/ai8.html");
    });
    try {
        btn_click.play();
    }
    catch (err) {
        //no sound - log error
    }
});

    })