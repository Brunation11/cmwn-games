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

        $("#upload").hide();

        $('#video-modal').modal('show');

        $('#next-button').hide().fadeIn(4000);

        $('#next-button').click(function () {
            background.pause();
            $('#next-button').hide();
            $('#video-modal').modal('hide');
            $("#upload").fadeIn(2000);
        });

        $('#close').click(function () {
            $('#game-close').modal('show');
        });

        $('.No-Btns').click(function () {
            $('#game-close').modal('hide');
        });

        $('#up-button').click(function () {
            $("#putcontenthere").load("action_items/ai6.html");
        });

    });