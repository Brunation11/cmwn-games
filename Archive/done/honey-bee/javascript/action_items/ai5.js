var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

$(document).ready(function () {

    $('#game-info').modal('show');

    $('#next-button').click(function () {
        $('#game-info').modal('hide');
        $('#video-modal').modal('show');
        background.play();
    });

    // $('#next-button2').click(function () {
    //     $('#video-modal').modal('hide');
    //     $('#game-info2').modal('show');
    // });

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

    // $('#next-button3').click(function () {
    //     $("#putcontenthere").load("action_items/ai6.html");
    // });

    $('#next-button2').click(function () {
        $("#putcontenthere").load("action_items/ai6.html");
        
    });

});

// function readURL(input) {
//     if (input.files && input.files[0]) {

//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('.file-upload-image').attr('src', e.target.result);
//             $('.image-upload-wrap').show();
//             $('.image-title').html(input.files[0].name);
//         };

//         //create an AJAX call that writes the file to the file system then stored the file location in session to be read later


//         reader.readAsDataURL(input.files[0]);

//     } else {
//         $('.image-upload-wrap').hide();
//     }
// }

// function removeUpload() {
//     $('.file-upload-input').replaceWith($('.file-upload-input').clone());
//     $('.image-upload-wrap').hide();
// }