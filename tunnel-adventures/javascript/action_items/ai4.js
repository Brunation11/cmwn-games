$(document).ready(function () {

    //change the background class
    $("#main-background").removeClass('intro').addClass('page');
    //remove the intro title
    $("#main-title").removeClass('intro-title');


    window.GameApp = {
        "idBtnNext": $("#sign").find("a"),
        "idBtnNextSound": $("#btn-next-sound"),
        "idContentWrapper": $(".content-wrapper"),

        screenID: 5
    };

    GameApp.loadContent = function(id) {
        //if (id == 3 || id == 5 || id == 21) {//id == 3 //game
        if (id == 5 || id == 21) {//id == 3 //game
            
            GameApp.idBtnNext.hide();
        } else {
            GameApp.idBtnNext.show();
        }

        // var screen_location = "@Url.Content("/screens/")";
        var screen_location = "screens/";
            var screen_name = "_screen" + id;
            var screen_ext = ".html";

            console.log(screen_location + screen_name + screen_ext);

            GameApp.idContentWrapper.load(screen_location + screen_name + screen_ext);
        };
        GameApp.loadContent(5);

        GameApp.onClickBtnNext = function () {
            //alert(GameApp.screenID);

            GameApp.idBtnNextSound[0].play();
            GameApp.screenID++;
            GameApp.loadContent(GameApp.screenID);

            return false;
        };

        GameApp.onWormPartsPassed = function () {

            GameApp.idBtnNext.show();
        };

        GameApp.idBtnNext.click(GameApp.onClickBtnNext);

        $('#game-complete').modal('hide');

        $('.text-modal').append("<p>Are you sure you want to quit?</p>");

        $("#close").click(function () {
            $('#game-complete').modal('show');
        });

        $("#no").click(function () {
            $('#game-complete').modal('hide');
        });

        $('#yes').click(function () {
            $("#putcontenthere").load("action_items/ai1.html");
        });
});