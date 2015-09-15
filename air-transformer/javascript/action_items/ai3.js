  $(document).ready(function () {
        try {
            correct.load();
            correct.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('#bkg img').css({ 'opacity': '100' }).fadeOut(0001).fadeIn(2000, function () {
            $('#kids img').css({ 'opacity': '100' }).fadeOut(00000).fadeIn(1000, function () {
                $('#right img').css({ 'opacity': '100' }).fadeOut(00000).fadeIn(1000, function () {
                    $('#tree img').css({ 'opacity': '100' }).fadeOut(00000).fadeIn(1000, function () {
                        $('#left img').css({ 'opacity': '100' }).fadeOut(00000).fadeIn(1000);
                    });
                });
            });
        });


        $('#next_btn').click(function () {
            $('#next_btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai4.html");
            });
            try {
                btn_click.load();
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }

             try {
                correct.pause();
            }
            catch (err) {
                //no sound - log error
            }

        });


    })