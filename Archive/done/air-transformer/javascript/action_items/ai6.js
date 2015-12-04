  $(document).ready(function () {
       completeFlip(24271);

        try
        {
            vo_transform.load();
            vo_transform.play();
        }
        catch(err)
        {
            //no sound log error
        }


        $('#next_btn').click(function () {
            $('#next_btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai1.html");
            });
            try {
                btn_click.load();
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }

             try {
                vo_transform.pause();
            }
            catch (err) {
                //no sound - log error
            }

        });


    })