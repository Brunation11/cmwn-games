var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

background.play();

$(document).ready(function () {

    $('.next').click(function () {
        $("#putcontenthere").load("action_items/ai2.html");
        button.load();
        button.play();
    });
    
});