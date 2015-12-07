   $(document).ready(function () {
        $('#next_btn11').hide();

        $('#next_btn11').delay(20000).fadeIn(9000);

        $('#next_btn11').click(function () {
            $('#next_btn11').delay(1000).delay(100, function () {
                $("#putcontenthere").load("action_items/ai2.html");
            });
            try {
                btn_click.load();
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


    })