var correct_items = new Array();
$(document).ready(function () {



    $ ('.bkg-image').css('background-image','url(content/images/new/BKG_6.png)');

    $('.No').click(function () {
        $('#retry-level').modal('hide')
    });

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    slide1.load();
    slide1.play();
    vo19.play(); 
    var selected_item = $(".next-Btn-4");

    $(".text_2").hide();
    $(".text_3").hide();
    $(".text_4").hide();
    $(".text_5").hide();
    $(".text_6").hide();
    $(".text_7").hide();
    $(".Flip").hide();
    $(".Flip1").hide();



    $(".next-Btn-4").click(function () {
        $(".next-Btn-4").hide().delay(900).fadeIn(1000);
        click.load();
        click.play();
        
        correct_items.push(selected_item);
        if (correct_items.length == 1) {
            vo19.pause(); 
        vo20.play(); 
            slide2.load();
            slide2.play();
            slide1.pause();
            $ ('.bkg-image').css('background-image','url(content/images/new/BKG_7.png)');
            $(".banners").animate({ top: '-=120' }, 1000);
            $(".text_1").hide();
            $(".text_2").hide().delay(900).fadeIn(1000);
        }

        if (correct_items.length == 2) {
            slide3.load();
            slide3.play();
            slide2.pause();
            vo20.pause(); 
            vo21.play(); 
            $ ('.bkg-image').css('background-image','url(content/images/new/BKG_8.png)');
            $(".banners").animate({ top: '+=120' }, 1000);
            $(".text_2").hide();
            $(".text_3").hide().delay(900).fadeIn(1000);
        }

        if (correct_items.length == 3) {
            slide4.load();
            slide4.play();
            slide3.pause();
            vo21.pause(); 
            vo22.play(); 
            $ ('.bkg-image').css('background-image','url(content/images/new/BKG_9.png)');
            $(".text_3").hide();
            $(".text_4").hide().delay(900).fadeIn(1000);
        }

        if (correct_items.length == 4) {
            slide5.load();
            slide5.play();
            slide4.pause();
            vo22.pause(); 
            vo23.play(); 
            $ ('.bkg-image').css('background-image','url(content/images/new/BKG_10.png)');
            $(".banners").animate({ top: '-=230' }, 1000);
            $(".text_4").hide();
            $(".text_5").hide().delay(900).fadeIn(1000);
            //document.location.href = "/ActionItem/AI3";
        }

       if (correct_items.length == 5) {
            vo23.pause(); 
            vo24.play(); 
            $ ('.bkg-image').css('background-image','url(content/images/new/BKG_11.png)');
            $(".banners").animate({ top: '-=230' }, 1000);
            $(".Flip1").hide().delay(1000).fadeIn(2000);
            $(".text_5").hide();
            $(".text_6").hide().delay(900).fadeIn(1000);
            //document.location.href = "/ActionItem/AI3";
        }




        if (correct_items.length == 6) {
            // completeFlip(12941);
            slide5.pause();
            Flip.load();
            Flip.play();
            vo24.pause(); 
            vo25.play(); 
            $ ('.bkg-image').css('background-image','url(content/images/new/BKG_12.png)');
            $(".banners").animate({ top: '+=80', height: "0px" }, 1000);
            $(".Flip").hide().delay(1000).fadeIn(2000);
            $(".Flip1").hide();
            $(".text_6").hide();
            $(".text_7").hide().delay(900).fadeIn(1000);
            //completeFlip(12941);
        }


    });

});