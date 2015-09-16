
$(document).ready(function () {

        try {
            forest.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('#btn').click(function () {
            $('#btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai6.html");
            });
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


        $('#btn1').click(function () {
            $('#btn1').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai4.html");
            });
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


        $('#sign_up_btn').click(function () {
            try {
                sign_up.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


    })