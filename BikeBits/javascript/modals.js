$(document).ready(function () {
            //$('#game-complete').modal('hide');            
            $('.text-modal').append("<p>Are you sure you want to quit?</p>");
            

            $("#close").click(function () {
                $('#game-complete').modal('show');
               
            });

            $("#no").click(function () {
                $('#game-complete').modal('hide');
            });
        })