$(document).ready(function () {
        $('#slide_2 img').hide();
        $('#slide_3 img').hide();
        $('.sb2').hide();
        $('.sb3').hide();
        $('#box2').hide();
        $('#box3').hide();
        $('#box4').hide();
        $('#box5').hide();
        $('.frame').hide();
        $('.frame2').hide();
        $('.frame3').hide();
        $('.frame4').hide();
        $('.frame5').hide();
        $('.frame6').hide();
        $('.frame7').hide();
        $('.frame8').hide();
        $('.frame9').hide();
        $('.nextBtnx2').hide();


        $('.sm').click(function () {
            $('.frame').show();
            $('.frame2').hide();
            $('.frame3').hide();
            $('.frame4').hide();
            $('.frame5').hide();
            $('.frame6').hide();
            $('.frame7').hide();
            $('.frame8').hide();
            $('.frame9').hide();
            $('.nextBtnx').hide();
            $('.nextBtnx2').hide();
        });
        $('.sm2').click(function () {
            $('.frame2').show();
            $('.frame').hide();
            $('.frame3').hide();
            $('.frame4').hide();
            $('.frame5').hide();
            $('.frame6').hide();
            $('.frame7').hide();
            $('.frame8').hide();
            $('.frame9').hide();
            $('.nextBtnx').hide();
            $('.nextBtnx2').hide();
        });
        $('.sm3').click(function () {
            $('.frame3').show();
            $('.frame2').hide();
            $('.frame').hide();
            $('.frame4').hide();
            $('.frame5').hide();
            $('.frame6').hide();
            $('.frame7').hide();
            $('.frame8').hide();
            $('.frame9').hide();
            $('.nextBtnx').hide();
            $('.nextBtnx2').hide();
        });
        $('.sm4').click(function () {
            $('.frame4').show();
            $('.frame2').hide();
            $('.frame3').hide();
            $('.frame').hide();
            $('.frame5').hide();
            $('.frame6').hide();
            $('.frame7').hide();
            $('.frame8').hide();
            $('.frame9').hide();
            $('.nextBtnx').hide();
            $('.nextBtnx2').hide();
        });
        $('.sm5').click(function () {
            $('.frame5').show();
            $('.frame2').hide();
            $('.frame3').hide();
            $('.frame4').hide();
            $('.frame').hide();
            $('.frame6').hide();
            $('.frame7').hide();
            $('.frame8').hide();
            $('.frame9').hide();
            $('.nextBtnx').hide();
            $('.nextBtnx2').hide();
        });
        $('.sm6').click(function () {
            $('.frame6').show();
            $('.frame2').hide();
            $('.frame3').hide();
            $('.frame4').hide();
            $('.frame5').hide();
            $('.frame').hide();
            $('.frame7').hide();
            $('.frame8').hide();
            $('.frame9').hide();
            $('.nextBtnx').hide();
            $('.nextBtnx2').hide();
        });
        $('.sm7').click(function () {
            $('.frame7').show();
            $('.frame2').hide();
            $('.frame3').hide();
            $('.frame4').hide();
            $('.frame5').hide();
            $('.frame6').hide();
            $('.frame').hide();
            $('.frame8').hide();
            $('.frame9').hide();
            $('.nextBtnx').hide();
            $('.nextBtnx2').hide();
        });
        $('.sm8').click(function () {
            $('.frame8').show();
            $('.frame2').hide();
            $('.frame3').hide();
            $('.frame4').hide();
            $('.frame5').hide();
            $('.frame6').hide();
            $('.frame7').hide();
            $('.frame').hide();
            $('.frame9').hide();
            $('.nextBtnx').hide();
            $('.nextBtnx2').hide();
        });
        $('.sm9').click(function () {
            $('.frame9').show();
            $('.frame2').hide();
            $('.frame3').hide();
            $('.frame4').hide();
            $('.frame5').hide();
            $('.frame6').hide();
            $('.frame7').hide();
            $('.frame8').hide();
            $('.frame').hide();
            $('.nextBtnx').hide();
            $('.nextBtnx2').hide();
        });

        $('.nextBtn').click(function () {
            $('#slide_1 img').fadeOut(2000);
            $('.sb').fadeOut(2000);
            $('#box').fadeOut(2000);
            $('#box1').fadeOut(2000);
            $('#slide_2 img').fadeIn(2000);
            $('.sb2').fadeIn(2000);
            $('#box2').fadeIn(2000);
            $('#box3').fadeIn(2000);
            $('.frame').hide(1000);
            $('.frame2').hide(1000);
            $('.frame3').hide(1000);
            $('.frame4').hide(1000);
            $('.frame5').hide(1000);
            $('.frame6').hide(1000);
            $('.frame7').hide(1000);
            $('.frame8').hide(1000);
            $('.frame9').hide(1000);
            $('.nextBtnx2').show();

        });
        
        $('.nextBtnx').click(function () {
            alert('Must select a friend to proceed');

        });

        $('.nextBtnx2').click(function () {
            alert('Must select a emoji to proceed');

        });

        $('.nextBtn2').click(function () {
            $('#slide_2 img').fadeOut(2000);
            $('#slide_3 img').fadeIn(2000);
            $('.sb2').fadeOut(2000);
            $('#box2').fadeOut(2000);
            $('#box3').fadeOut(2000);
            $('#box4').fadeIn(2000);
            $('#box5').fadeIn(2000);
            $('.sb3').fadeIn(2000);
        });


    $('.nextBtn3').click(function () {
             var theCheckboxes = $("input[type='checkbox']"); 
    if (!$("input:checkbox").is(":checked")) {
        alert( "Please selected one option to proceed." );

        return false;
    }else{
            $('.nextBtn3').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai5.html");
            });
        }

        });


        $('input[type="checkbox"]').on('change', function () {
            $('input[type="checkbox"]').not(this).prop('checked', false);
        });
    });