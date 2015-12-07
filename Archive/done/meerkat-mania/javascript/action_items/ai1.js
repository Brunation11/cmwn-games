$(document).ready(function () {

    title_screen.play();

    document.getElementById('title_screen').addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);

    $('#btn').click(function () {
        $('#btn').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai2.html");
        });
        btn_click.play();
        title_screen.pause();
    });
    
})