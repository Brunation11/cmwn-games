$(document).ready(function () {
    completeFlip(24309);
    // $('#game-info').modal('show');

    $('#flip-info').modal('show');
    flip.play();

    // $('#done').click(function () {
    //     $('#game-info').modal('hide');
    //     $('#flip-info').modal('show');
    //     flip.play();
    // });

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
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