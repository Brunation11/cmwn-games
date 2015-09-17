try
{
    background.volume = 0.1,
    background.play();
}
catch(err)
{
    //no sound - log error
}

$(document).ready(function () {


    $('.logo').hide().fadeIn(4000);

    $('#game-info').modal('hide');

    $('.Video').hide();


    $('.advance-btn').click(function () {
                $('.logo').hide();
                $('#game-info').modal('show');

                $('.Video').show();
                $('.advance-btn').hide().delay(36000).fadeIn(900);
        try
        {
            Hello.pause();
            Iam2.pause();
        }
        catch(err)
        {
            //no sound - log error
        }

        $('.first-slide').show();
        $('.second-slide').hide();
        $('.second-slide h1').hide();
        $('.third-slide h1').hide();
        $('.Open_oyster').hide();
        $('.fiveth-slide').hide();
        $('.six-slide').hide();
        $('.seven-slide').hide();
        $('.fourth-slide').show();


        $('.advance-btn').click(function () {

            $('.advance-btn').hide();
            $('#game-info').modal('hide');
            $('#game-info2').modal('show');
            $('.second-slide').show();
            $('.Video').hide();
            $('.second-slide h1').hide();
            $('.third-slide h1').hide();
            $('.Open_oyster').hide();
            $('.fourth-slide').hide();
            $('.fiveth-slide').hide();
            $('.six-slide').hide();
            $('.seven-slide').show();

            try
            {
                Hello.pause();
                Iam2.pause();
                EatAlgae.pause();
            }
            catch(err)
            {
                //no sound - log error
            }

            $('.easy-btn img').click(function () {

                $("#putcontenthere").load("action_items/ai2.html");

                try
                {
                    Btn_Click.load();
                    Btn_Click.play();
                }
                catch(err)
                {
                    //no sound - log error
                }

            });
            $('.hard-btn img').click(function () {

                $("#putcontenthere").load("action_items/ai3.html");

                try {
                    Btn_Click.load();
                    Btn_Click.play();
                }
                catch (err) {
                    //no sound - log error
                }
            });
        });

    });

});