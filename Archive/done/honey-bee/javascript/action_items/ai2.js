var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

var bgMusic = $("#video")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

$(document).ready(function () {

    $("#bee-game").hide();
    $("#next-button").hide();
    $("#info1").hide();
    $("#info2").hide();
    $("#info3").hide();

    //Questions
    $("#head").show();
    $("#pollen").hide();
    $("#wing").hide();

    // First modal
    $('#game-info').modal('show');

    $('#queen').click(function () {
        select.load();
        select.play();
        $("#info1").show();
        $("#info2").hide();
        $("#info3").hide();
    });

    $('#drone').click(function () {
        select.load();
        select.play();
        $("#info2").show();
        $("#info1").show();
        $("#info3").hide();
    });

    $('#work').click(function () {
        select.load();
        select.play();
        $("#info3").show();
        $("#info1").hide();
        $("#info2").hide();
        $("#next-button").show();
    });

    $('#next-button').click(function () {
        $("#game-info").modal('hide');
        $("#video-modal").modal('show');
        video.load();
        video.play();
    });

    //Video Modal
    $('#next-button2').click(function () {
        video.pause();
        $("#video-modal").modal('hide');
        $("#bee-game").show();

        $("#bee-parts2").hide();
        $("#compound").hide();
        $("#bee-button2").hide();

        $("#bee-parts3").hide();
        $("#mand").hide();
        $("#bee-button3").hide();

        $("#bee-parts4").hide();
        $("#pollen").hide();
        $("#bee-button4").hide();

        $("#bee-parts5").hide();
        $("#pollen2").hide();
        $("#bee-button5").hide();

        $("#bee-parts6").hide();
        $("#thorax").hide();
        $("#bee-button6").hide();

        $("#bee-parts7").hide();
        $("#wing").hide();
        $("#bee-button7").hide();

        $("#bee-parts8").hide();
        $("#antennae").hide();
        $("#bee-button8").hide();

        $("#bee-parts9").hide();
        $("#abdomen").hide();
        $("#bee-button9").hide();

        $("#bee-parts10").hide();
        $("#spiracles").hide();
        $("#bee-button10").hide();

        $("#bee-parts11").hide();
        $("#ocelli").hide();
        $("#bee-button11").hide();

        $("#bee-parts12").hide();
        $("#stingers").hide();
        $("#bee-button12").hide();

        $("#bee-parts13").hide();
        $("#wax-glands").hide();
        $("#bee-button13").hide();

        $("#bee-parts14").hide();
        $("#legs").hide();
        $("#bee-button14").hide();
        background.play();
    });

    //Bee Game 1
    $("#bee-button").hide();

    $("#active").hide();
    $("#active2").hide();
    $("#active3").hide();
    $("#active4").hide();
    $("#active5").hide();
    $("#active6").hide();
    $("#active7").hide();
    $("#active8").hide();
    $("#active9").hide();
    $("#active10").hide();
    $("#active11").hide();
    $("#active12").hide();
    $("#active13").hide();
    $("#active14").hide();
    $("#active15").hide();
    $("#active16").hide();
    $("#active17").hide();
    $("#active18").hide();
    $("#active19").hide();
    $("#active20").hide();
    $("#active21").hide();
    $("#active22").hide();
    $("#active23").hide();
    $("#active24").hide();
    $("#active25").hide();
    $("#active26").hide();
    $("#active27").hide();
    $("#active28").hide();
    $("#active29").hide();
    $("#active30").hide();
    $("#active31").hide();
    $("#active32").hide();
    $("#active33").hide();
    $("#active34").hide();
    $("#active35").hide();
    $("#active36").hide();
    $("#active37").hide();
    $("#active38").hide();
    $("#active39").hide();
    $("#active40").hide();
    $("#active41").hide();
    $("#active42").hide();

    $('#head-pick').click(function () {
        $("#bee-button").show();
        $("#active").show();
        $("#active2").hide();
        $("#active3").hide();
        correct.load();
        correct.play();
    });

    $('#pollen-pick').click(function () {
        $("#active2").show();
        $("#active3").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#wing-pick').click(function () {
        $("#active2").hide();
        $("#active3").show();
        incorrect.load();
        incorrect.play();
    });

    $('#bee-button').click(function () {
        $("#bee-parts").hide();
        $("#head").hide();
        $("#legs").show();
        $("#bee-parts2").show();
    });

    //Bee Game 2

    $('#head-pick12').click(function () {
        $("#active4").show();
        $("#active5").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#pollen-pick13').click(function () {
        $("#active4").hide();
        $("#active5").show();
        incorrect.load();
        incorrect.play();
    });

    $('#leg-pick').click(function () {
        $("#bee-button2").show();
        $("#active4").hide();
        $("#active5").hide();
        $("#active6").show();
        correct.load();
        correct.play();
    });

    $('#bee-button2').click(function () {
        $("#bee-parts2").hide();
        $("#legs").hide();
        $("#bee-parts3").show();
        $("#abdomen").show();
    });

    //Bee Game 3

    $('#head-pick7').click(function () {
        $("#active7").show();
        $("#active8").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#pollen-pick8').click(function () {
        $("#active7").hide();
        $("#active8").show();
        incorrect.load();
        incorrect.play();
    });

    $('#ab-pick').click(function () {
        $("#bee-button3").show();
        $("#active7").hide();
        $("#active8").hide();
        $("#active9").show();
        correct.load();
        correct.play();
    });

    $('#bee-button3').click(function () {
        $("#bee-parts3").hide();
        $("#abdomen").hide();
        $("#bee-parts4").show();
        $("#ocelli").show();
    });

    //Bee Game 4

    $('#head-pick9').click(function () {
        $("#active10").show();
        $("#active11").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#pollen-pick10').click(function () {
        $("#active10").hide();
        $("#active11").show();
        incorrect.load();
        incorrect.play();
    });

    $('#ocel-pick').click(function () {
        $("#bee-button4").show();
        $("#active10").hide();
        $("#active11").hide();
        $("#active12").show();
        correct.load();
        correct.play();
    });

    $('#bee-button4').click(function () {
        $("#bee-parts4").hide();
        $("#ocelli").hide();
        $("#bee-parts5").show();
        $("#wax-glands").show();
    });

    //Bee Game 5

    $('#head-pick11').click(function () {
        $("#active13").show();
        $("#active14").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#pollen-pick12').click(function () {
        $("#active13").hide();
        $("#active14").show();
        incorrect.load();
        incorrect.play();
    });

    $('#wax-pick').click(function () {
        $("#bee-button5").show();
        $("#active13").hide();
        $("#active14").hide();
        $("#active15").show();
        correct.load();
        correct.play();
    });

    $('#bee-button5').click(function () {
        $("#bee-parts5").hide();
        $("#wax-glands").hide();
        $("#bee-parts6").show();
        $("#pollen").show();
    });

    //Bee Game 6

    $('#head-pick2').click(function () {
        $("#active16").show();
        $("#active18").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#pollen-pick4').click(function () {
        $("#bee-button6").show();
        $("#active16").hide();
        $("#active17").show();
        $("#active18").hide();
        correct.load();
        correct.play();
    });

    $('#wing-pick4').click(function () {
        $("#active16").hide();
        $("#active18").show();
        incorrect.load();
        incorrect.play();
    });

    $('#bee-button6').click(function () {
        $("#bee-parts6").hide();
        $("#pollen").hide();
        $("#bee-parts7").show();
        $("#thorax").show();
    });

    //Bee Game 7

    $('#head-pick4').click(function () {
        $("#active19").show();
        $("#active21").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#thor-pick').click(function () {
        $("#bee-button7").show();
        $("#active19").hide();
        $("#active20").show();
        $("#active21").hide();
        correct.load();
        correct.play();
    });

    $('#wing-pick6').click(function () {
        $("#active19").hide();
        $("#active21").show();
        incorrect.load();
        incorrect.play();
    });

    $('#bee-button7').click(function () {
        $("#bee-parts7").hide();
        $("#thorax").hide();
        $("#bee-parts8").show();
        $("#stingers").show();
    });

    //Bee Game 8

    $('#head-pick10').click(function () {
        $("#active22").show();
        $("#active23").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#pollen-pick11').click(function () {
        $("#active22").hide();
        $("#active23").show();
        incorrect.load();
        incorrect.play();
    });

    $('#sting-pick').click(function () {
        $("#bee-button8").show();
        $("#active22").hide();
        $("#active23").hide();
        $("#active24").show();
        correct.load();
        correct.play();
    });

    $('#bee-button8').click(function () {
        $("#bee-parts8").hide();
        $("#stingers").hide();
        $("#bee-parts9").show();
        $("#antennae").show();
    });

    //Bee Game 9

    $('#head-pick6').click(function () {
        $("#active25").show();
        $("#active26").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#pollen-pick7').click(function () {
        $("#active25").hide();
        $("#active26").show();
        incorrect.load();
        incorrect.play();
    });

    $('#ant-pick').click(function () {
        $("#bee-button9").show();
        $("#active25").hide();
        $("#active26").hide();
        $("#active27").show();
        correct.load();
        correct.play();
    });

    $('#bee-button9').click(function () {
        $("#bee-parts9").hide();
        $("#antennae").hide();
        $("#bee-parts10").show();
        $("#spiracles").show();
    });

    //Bee Game 10

    $('#head-pick8').click(function () {
        $("#active28").show();
        $("#active29").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#pollen-pick9').click(function () {
        $("#active28").hide();
        $("#active29").show();
        incorrect.load();
        incorrect.play();
    });

    $('#spi-pick').click(function () {
        $("#bee-button10").show();
        $("#active28").hide();
        $("#active29").hide();
        $("#active30").show();
        correct.load();
        correct.play();
    });

    $('#bee-button10').click(function () {
        $("#bee-parts10").hide();
        $("#spiracles").hide();
        $("#bee-parts11").show();
        $("#compound").show();
    });

    //Bee Game 11

    $('#eye-pick').click(function () {
        $("#bee-button11").show();
        $("#active31").show();
        $("#active32").hide();
        $("#active33").hide();
        correct.load();
        correct.play();
    });

    $('#pollen-pick2').click(function () {
        $("#active32").show();
        $("#active33").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#wing-pick2').click(function () {
        $("#active32").hide();
        $("#active33").show();
        incorrect.load();
        incorrect.play();
    });

    $('#bee-button11').click(function () {
        $("#bee-parts11").hide();
        $("#compound").hide();
        $("#bee-parts12").show();
        $("#pollen2").show();
    });

    //Bee Game 12

    $('#head-pick3').click(function () {
        $("#active34").show();
        $("#active36").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#pollen-pick5').click(function () {
        $("#bee-button12").show();
        $("#active34").hide();
        $("#active35").show();
        $("#active36").hide();
        correct.load();
        correct.play();
    });

    $('#wing-pick5').click(function () {
        $("#active34").hide();
        $("#active36").show();
        incorrect.load();
        incorrect.play();
    });

    $('#bee-button12').click(function () {
        $("#bee-parts12").hide();
        $("#pollen2").hide();
        $("#bee-parts13").show();
        $("#wing").show();
    });

    //Bee Game 13

    $('#head-pick5').click(function () {
        $("#active37").show();
        $("#active38").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#pollen-pick6').click(function () {
        $("#active37").hide();
        $("#active38").show();
        incorrect.load();
        incorrect.play();
    });

    $('#wing-pick7').click(function () {
        $("#bee-button13").show();
        $("#active37").hide();
        $("#active38").hide();
        $("#active39").show();
        correct.load();
        correct.play();
    });

    $('#bee-button13').click(function () {
        $("#bee-parts13").hide();
        $("#wing").hide();
        $("#bee-parts14").show();
        $("#mand").show();
    });

    //Bee Game 14

    $('#mand-pick').click(function () {
        $("#bee-button14").show();
        $("#active40").show();
        $("#active41").hide();
        $("#active42").hide();
        correct.load();
        correct.play();
    });

    $('#pollen-pick3').click(function () {
        $("#active41").show();
        $("#active42").hide();
        incorrect.load();
        incorrect.play();
    });

    $('#wing-pick3').click(function () {
        $("#active41").hide();
        $("#active42").show();
        incorrect.load();
        incorrect.play();
    });

    $('#bee-button14').click(function () {
        $("#bee-game").hide();
        $("#game-complete").modal('show');
        background.pause();
        video.pause();
        complete.load();
        complete.play();
    });

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

    $('#next-button3').click(function () {
        $("#putcontenthere").load("action_items/ai3.html");
    });

});