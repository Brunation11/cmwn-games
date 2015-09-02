var start = document.getElementById("title_screen");
        var correct = document.getElementById("btn_yes");
        var complete = document.getElementById("btn_wrong");
        var load = document.getElementById("other_screen");
        var fin = document.getElementById("final");
        var lio = document.getElementById("lion");
        var dol = document.getElementById("dolphin");
        

    $(document).ready(function () {

            $('.purple-button').click(function () {
                $('#retry-level').modal('show')
            });

            $("#close-Btn").click(function () {
                $('#pop-up').modal('show');

            });

    });