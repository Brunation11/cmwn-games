  var full;
    var correct_items = new Array();

$(document).ready(function () {

    $(".body-content").addClass("net");

    bkg_sg.load();
    bkg_sg.play();

    document.getElementById('bkg_sg').addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);

    $('#btn').hide();
    $('#btn').click(function () {
        $('#btn').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai6.html");
        });
        click.play();
    });

    $('#pb').click(function () {
        $('#pb').css('display', 'none');
        correct_scoop_game.play();
        correct_items.push(1);
        if (correct_items.length === 7) {
            //pop or redirect your game complete screen
            $('#btn').show();
            scoop_game.play();
            $('#happy').css('opacity', '1');
        }
    });

    $('#bb').click(function () {
        $('#bb').css('display', 'none');
        correct_scoop_game1.play();
        correct_items.push(2);
        if (correct_items.length === 7) {
            //pop or redirect your game complete screen
            $('#btn').show();
            scoop_game.play();
            $('#happy').css('opacity', '1');
        }
    });

    $('#cc').click(function () {
        $('#cc').css('display', 'none');
        correct_scoop_game2.play();
        correct_items.push(3);
        if (correct_items.length === 7) {
            //pop or redirect your game complete screen
            $('#btn').show();
            scoop_game.play();
            $('#happy').css('opacity', '1');
        }
    });

    $('#wb').click(function () {
        $('#wb').css('display', 'none');
        correct_scoop_game3.play();
        correct_items.push(4);
        if (correct_items.length === 7) {
            //pop or redirect your game complete screen
            $('#btn').show();
            scoop_game.play();
            $('#happy').css('opacity', '1');
        }
    });

    $('#cp').click(function () {
        $('#cp').css('display', 'none');
        correct_scoop_game4.play();
        correct_items.push(5);
        if (correct_items.length === 7) {
            //pop or redirect your game complete screen
            $('#btn').show();
            scoop_game.play();
            $('#happy').css('opacity', '1');
        }
    });

    $('#cb').click(function () {
        $('#cb').css('display', 'none');
        correct_scoop_game5.play();
        correct_items.push(6);
        if (correct_items.length === 7) {
            //pop or redirect your game complete screen
            $('#btn').show();
            scoop_game.play();
            $('#happy').css('opacity', '1');
        }
    });

    $('#pr').click(function () {
        $('#pr').css('display', 'none');
        correct_scoop_game6.play();
        correct_items.push(7);
        if (correct_items.length === 7) {
            //pop or redirect your game complete screen
            $('#btn').show();
            scoop_game.play();
            $('#happy').css('opacity', '1');
        }
    });

    $('.wrong').click(function () {
        incorrect.play();
    });

})