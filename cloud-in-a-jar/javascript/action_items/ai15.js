$(document).ready(function () {
        try {
            load_15.load();
            load_15.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('#btn1').hide();


        $('#btn').click(function () {
            $('#btn1').show();
    
    });

        $('#btn1').click(function () {
            $('#btn1').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai16.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });

    })