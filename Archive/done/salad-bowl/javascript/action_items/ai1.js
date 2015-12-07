$(document).ready(function () {
        try
        {
            title.load();
            title.play();
        }
        catch(err)
        {
            //no sound - log error
        }
        

    $('.play').click(function () {
        $('.play').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai2.html");
        });
        try
        {
            click.play();
        }
        catch(err)
        {
            //no sound - log error
        }
        title.pause();
    });
    }); 