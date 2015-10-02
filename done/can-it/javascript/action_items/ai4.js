$(document).ready(function(){
    $(".compost").css("left", "650px");
 first();
 second();
 third();

    function first(){
         $('.compost').animate({left:'-=760px'},5000, function(){
            $(".compost").css("left", "530px");
             // second();
             var y = $('.compost').position();

             if ("Left position:" + y.left  === 300){
                alert("You got it");
             }
             //if position of compost Y is greater than 50% main div width
             // call second() if is true else dont call


         });

    }

    function second(){
         $('.trash').animate({left:'-=760px'},5000, function(){
            $(".trash").css("left", "530px");
             third();

         });

    }

    function third(){
         $('.recycle').animate({left:'-=760px'},5000, function(){
            $(".recycle").css("left", "530px");
             first();

         });

    }



});
//////////////////////////////////////////////////// set 1 /////////////////////////////////////////////////////////////////////////////////////////////////////
// $(function () {
//     var current = 1,

//     $imgs = jQuery('.cans .swap');
//     imgAmount = $imgs.length;

//     $($imgs.css('position', 'absolute').hide().get(1)).show();


//     window.setInterval(swapImages, 6000);

//     function swapImages() {

//         var $currentImg = $('.swap:visible');

//         var $nextImg = $('.swap:hidden').eq(Math.floor(Math.random() * $('.swap:hidden').length));
//             speed = 500;
//         // animation speed should be the same for both images so we have a smooth change
//         $currentImg.fadeOut(speed);
//         $nextImg.fadeIn(speed);
//     }
// });



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$("#down").click(function(){
  $(".block").animate({"top": "+=280px"}, "fast", checkCollisions);
});

function getPositions(box) {
  var $box = $(box);
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}

function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(){
  var box = $(".compost")[0];
  var pos = getPositions(box);

  var pos2 = getPositions(this);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);
  var match = horizontalMatch && verticalMatch;
  if (match) { alert("Collision works!!!");}
}


