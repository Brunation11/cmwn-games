$(document).ready(function () {

    $('#game-close').modal('hide');

    $('#close').click(function () {
        $('#game-close').modal('show');
        $('.header_Bkg').hide();
        $('.Pop_up').hide();
        $('.Post_btn').hide();
        $('.file-upload').hide();
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
        $('.header_Bkg').hide().fadeIn(600);
        $('.Pop_up').hide().fadeIn(600);
        $('.Post_btn').hide().fadeIn(600);
        $('.file-upload').hide().fadeIn(600);
    });

    $('#post-button').click(function () {
        $("#putcontenthere").load("action_items/ai8.html");
    });
});
    
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.file-upload-image').attr('src', e.target.result);
            $('.image-upload-wrap').show();
            $('.image-title').html(input.files[0].name);
        };

        //create an AJAX call that writes the file to the file system then stored the file location in session to be read later


        reader.readAsDataURL(input.files[0]);

    } else {
        $('.image-upload-wrap').hide();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.image-upload-wrap').hide();
}