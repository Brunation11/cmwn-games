 
        var start = document.getElementById("designBtn");
        var clk = document.getElementById("hinty");
        var ca = document.getElementById("me1");
        var InC = document.getElementById("me2");
        var sel = document.getElementById("me5");
        var su = document.getElementById("mr2");
        var s1 = document.getElementById("mr3");
        var s2 = document.getElementById("nex");
        var s3 = document.getElementById("qt");
        var s4 = document.getElementById("sec");
        var s5 = document.getElementById("sl3");
        var s6 = document.getElementById("sl4");
        var s7 = document.getElementById("sl6");
        var s8 = document.getElementById("steps");
        var s9 = document.getElementById("titles");
        var end = document.getElementById("flipper");



        $(document).ready(function () {
            $('#Btn-hide1').click(function () {
                $('#retry-level').modal('hide')
            });

            $('.close-Btn').click(function () {

                $("#retry-level").modal('show');
                qt.play();
            });
        });