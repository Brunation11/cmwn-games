$(document).ready(function () {
     try {
         titlel.play();
      }
      catch (err) {
         //no sound - log error
      }

  $('.bkg-image').css('background-image','url(content/images/background/bkg_11.png)');
      
      $('.nextBtn').click(function () {
          try {
         arrows.play();
      }
      catch (err) {
         //no sound - log error
      }
          $('#slide_1 img').hide();
          $('#slide_2 img').fadeIn(2000);
          $('#slide_2 h2').fadeIn(2000);
          $('.bkg-image').css('background-image','url(content/images/background/bkg_2.png)');

      });
      
       $('.nextBtn1').click(function () {
          try {
         arrows.play();
      }
      catch (err) {
         //no sound - log error
      }
          $('#slide_2 img').hide();
          $('#slide_2 h2').hide();
          $('#slide_3 img').fadeIn(2000);
          $('#slide_3 h2').fadeIn(2000);
          });

       $('.nextBtn2').click(function () {
          try {
         arrows.play();
      }
      catch (err) {
         //no sound - log error
      }
          $('#slide_3 img').hide();
          $('#slide_3 h2').hide();
          $('#slide_4 img').fadeIn(2000);
          $('#slide_4 h2').fadeIn(2000);
          });

      $('.nextBtn3').click(function () {
          try {
         arrows.play();
      }
      catch (err) {
         //no sound - log error
      }
      $('.nextBtn3').delay(1000).delay(1000, function () {
          $("#putcontenthere").load("action_items/ai2.html");
      });
    });
});