 $(document).ready(function () {

    $('#btn').click(function () {
        $('#btn').delay(2000).delay(1000, function () {
           $("#putcontenthere").load("action_items/ai7.html");
        });
        click.play();
    });
});