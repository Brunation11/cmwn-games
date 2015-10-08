var correct_items = new Array();
$(document).ready(function () {



    $ ('.bkg-image').css('background-image','url(content/images/background/BKG_6.png)');

    $('.No').click(function () {
        $('#retry-level').modal('hide')
    });

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    slide1.load();
    slide1.play();
    var selected_item = $(".next-Btn-4");

    $(".text_2").hide();
    $(".text_3").hide();
    $(".text_4").hide();
    $(".text_5").hide();
    $(".text_6").hide();
    $(".Flip").hide();



    $(".next-Btn-4").click(function () {
        $(".next-Btn-4").hide().delay(900).fadeIn(1000);
        click.load();
        click.play();
        correct_items.push(selected_item);
        if (correct_items.length === 1) {
            slide2.load();
            slide2.play();
            slide1.pause();
            $ ('.bkg-image').css('background-image','url(content/images/background/BKG_7.png)');
            $(".banners").animate({ top: '-=120' }, 1000);
            $(".text_1").hide();
            $(".text_2").hide().delay(900).fadeIn(1000);
        }

        if (correct_items.length === 2) {
            slide3.load();
            slide3.play();
            slide2.pause();
            $ ('.bkg-image').css('background-image','url(content/images/background/BKG_8.png)');
            $(".banners").animate({ top: '+=120' }, 1000);
            $(".text_2").hide();
            $(".text_3").hide().delay(900).fadeIn(1000);
        }

        if (correct_items.length === 3) {
            slide4.load();
            slide4.play();
            slide3.pause();
            $ ('.bkg-image').css('background-image','url(content/images/background/BKG_9.png)');
            $(".text_3").hide();
            $(".text_4").show();
        }

        if (correct_items.length === 4) {
            slide5.load();
            slide5.play();
            slide4.pause();
            $ ('.bkg-image').css('background-image','url(content/images/background/BKG_10.png)');
            $(".banners").animate({ top: '-=230' }, 1000);
            $(".text_4").hide();
            $(".text_5").hide().delay(900).fadeIn(1000);
            //document.location.href = "/ActionItem/AI3";
        }

        if (correct_items.length === 5) {
            completeFlip(12941);
            slide5.pause();
            Flip.load();
            Flip.play();
            $ ('.bkg-image').css('background-image','url(content/images/background/BKG_11.png)');
            $(".banners").animate({ top: '+=80', height: "200px" }, 1000);
            $(".Flip").hide().delay(1000).fadeIn(2000);
            $(".text_5").hide();
            $(".text_6").hide().delay(900).fadeIn(1000);
        }


    });

});