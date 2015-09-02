
        var start = document.getElementById("title_screen");
        var s13 = document.getElementById("slide_13");
        var s17 = document.getElementById("slide_17");
        var btnclk = document.getElementById("btn_click");
        var s3 = document.getElementById("slide_3");
        var s4 = document.getElementById("slide_4");
        var btnup = document.getElementById("btn_upload");
        var fin = document.getElementById("flip");

     

            $('#pop-up').modal('hide');



            //to use the close modal, use this function

            $('.close-Btn').click(function () {
                $('#retry-level').modal('show');
            });

            /* Exp: <div id="close">
            <div class="col-sm-4 content-box">
            <img src="~/Content/images/btn_close.png" class="img-responsive" alt="Responsive image">
            </div>*/

            $('.A').click(function () {

                $("#level-complete").modal('show');



            });

            $('.B').click(function () {

                $("#retry-level").modal('show');



            });

            $("#Btn-hide1").click(function () {
                $('#retry-level').modal('hide');

            });

            $('.purple-button').click(function () {
                $('#retry-level').modal('hide')
            });

            $('.close-Btn').click(function () {

                $("#retry-level").modal('show');



            });

          //  $('.close-Btn').click(function () {

            //    $("#game-info").modal('hide');



           // });

