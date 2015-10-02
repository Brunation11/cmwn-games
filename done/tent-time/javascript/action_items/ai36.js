
$(document).ready(function () {

        try {
            tur.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('#btn1').click(function () {
            $('#btn1').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai35.html");
            });
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });

       $(function () {
            $("#tfq2b").click(function () {
                if ($("#tfq2b").val() == "Max Characters 11") {
                    $("#tfq2b").val("");
                }else{
            }
            });
        });


        $("#tfq2b").keypress(function (e) {
            var tval = $("#tfq2b").val(),
                tlength = tval.length,
                set = 10,
                remain = parseInt(set - tlength);
            $("#tfq2b").text(remain);
            if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
                $("#tfq2b").val((tval).substring(0, tlength - 1))
            }

        })

        
        $('.proceed').click(function () {

            var camp_name = $("#tfq2b").val();

            if(camp_name == null || camp_name == '' || camp_name == 'Max Characters 11') {
                $("#tfq2b").val('');
                alert('Your camp name cannot be empty!');
            } else {
                $("#putcontenthere").load("action_items/ai37.html");
            }
        });

        

    })