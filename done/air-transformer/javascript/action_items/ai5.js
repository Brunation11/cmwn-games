
 $(document).ready(function () {
        try
        {
            vo_times.load();
            vo_times.play();
        }
        catch (err)
        {
            //no sound - log error
        }
        
        $('#next_btn').click(function () {
            $('#next_btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai6.html");
            });
            try {
                btn_click.load();
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }

             try {
                vo_times.pause();
            }
            catch (err) {
                //no sound - log error
            }

        });


    })