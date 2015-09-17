$(document).ready(function () {
        
        try {
            forest.play();
        }
        catch (err) {
            //no sound - log error
        }
        
        $('#btn img').animate({ top: "+=50" }, 2000);


        $('#btn').click(function () {
            $('#btn').delay(2000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai2.html");
            });
            
            try {
                select.play();
            }
            catch (err) {
                //no sound - log error
            }
        });
    })