$(document).ready(function () {
        try
        {
            vo_word.load();
            vo_word.play();
        }
        catch(err)
        {
            //no sound - log error
        }
        
        $('#bkg img').css('visibility', 'visible').hide().fadeIn(4000);
        $('#next_btn').click(function () {
            $('#next_btn').delay(1000).delay(1000, function () {
               $("#putcontenthere").load("action_items/ai5.html");
            });
            try {
                btn_click.load();
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }

             try {
                vo_word.pause();
            }
            catch (err) {
                //no sound - log error
            }

        });


    })