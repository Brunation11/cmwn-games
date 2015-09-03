   $(document).ready(function () {
        $('#next_btn').hide();

        $('#next_btn').delay(20000).fadeIn(9000);

        $('#next_btn').click(function () {
            $('#next_btn').delay(1000).delay(100, function () {
                $("#putcontenthere").load("/action_items/ai2.html");
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