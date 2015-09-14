
$(document).ready(function () {

        $('#owl').click(function () {
            $('#owl').delay(2000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai14.html");
            });
            try {
                ow.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


        $('#deer').click(function () {
            $('#deer').delay(2000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai20.html");
            });
            try {
                dee.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


        $('#wolf').click(function () {
            $('#wolf').delay(2000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai23.html");
            });
            try {
                wol.play();
            }
            catch (err) {
                //no sound - log error
            }
        });

        $('#eagle').click(function () {
            $('#eagle').delay(2000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai26.html");
            });
            try {
                eagl.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


        //


        $('#opossum').click(function () {
            $('#opossum').delay(2000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai29.html");
            });
            try {
                oposs.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


        $('#raccoon').click(function () {
            $('#raccoon').delay(2000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai32.html");
            });
            try {
                rac.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


        $('#wildturkey').click(function () {
            $('#wildturkey').delay(2000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai35.html");
            });
            try {
                tur.play();
            }
            catch (err) {
                //no sound - log error
            }
        });

        $('#badger').click(function () {
            $('#badger').delay(2000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai38.html");
            });
            try {
                badg.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


    })