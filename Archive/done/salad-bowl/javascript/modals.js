var start = document.getElementById("title");
        var next = document.getElementById("click");
        var win = document.getElementById("flip");
        var slide4 = document.getElementById("slides4");
        var slide22 = document.getElementById("slides22");

        $(document).ready(function () {

            $('#Btn-hide1').click(function () {
                $('#retry-level').modal('hide')
            });

            $('.close-Btn').click(function () {

                $("#retry-level").modal('show');
            });

           
        });