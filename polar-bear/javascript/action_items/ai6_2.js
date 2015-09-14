$(document).ready(function () {
   
    // $('.No-Btns').click(function () {
    //     $('#game-close').modal('hide');
                    
    //     //$(".current").each(function () {

    //     //    $(this).show("display", "block");
    //     //});
        
    // });

    $('#close').click(function () {
        $('#game-close').modal('show');
    });
     
    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');                      
    });

    $('#back-button1').click(function () {
        $("#putcontenthere").load("action_items/ai6.html");
    });

    // $('.file-uploads').click(function () {
    //     $("#putcontenthere").load("action_items/ai7.html");
    // });

    $('#next-button6').click(function () {
        $("#putcontenthere").load("action_items/ai8.html");
    });
           
    // First modal
    $('#game-info3').modal('show');
    $('#game-info4').modal('hide');
    $('#game-info5').modal('hide');
    $('#game-info6').modal('hide');
    $('#game-info7').modal('hide');
    $('#game-info8').modal('hide');

    // next and back button function
   
    $('#next-button1').click(function () {
        $('#game-info2').modal('hide');
        $('#game-info3').modal('show');
    });

    $('#back-button1').click(function () {
        $('#game-info2').modal('show');
        $('#game-info3').modal('hide');
    });

    $('#next-button2').click(function () {
        $('#game-info3').modal('hide');
        $('#game-info4').modal('show');
    });

    $('#back-button2').click(function () {
        $('#game-info3').modal('show');
        $('#game-info4').modal('hide');
    });

    $('#next-button3').click(function () {
        $('#game-info4').modal('hide');
        $('#game-info5').modal('show');
    });

    $('#back-button3').click(function () {
        $('#game-info4').modal('show');
        $('#game-info5').modal('hide');
    });

    $('#next-button4').click(function () {
        $('#game-info5').modal('hide');
        $('#game-info6').modal('show');
    });

    $('#back-button4').click(function () {
        $('#game-info5').modal('show');
        $('#game-info6').modal('hide');
    });

    $('#next-button5').click(function () {
        $('#game-info6').modal('hide');
        $('#game-info7').modal('show');
    });

    $('#back-button5').click(function () {
        $('#game-info6').modal('show');
        $('#game-info7').modal('hide');
    });

    // $('#next-button6').click(function () {
    //     $('#game-info7').modal('hide');
    //     $('#game-info8').modal('show');
    // });

    // $('#back-button6').click(function () {
    //     $('#game-info7').modal('show');
    //     $('#game-info8').modal('hide');
    // });      

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