// window.onload = function () {
//         var c = document.getElementById("Wcycle");
//         var ctx = c.getContext("2d");
//         var img = document.getElementById("water");
//         ctx.drawImage(img, 10, 10);
//     }

//     var img = document.getElementById("water");
//     img.onload = waves;
//     //img.src = "/content/images/title.png";

//     function waves() {

//         var canvas = document.querySelector("canvas"),
//           ctx = canvas.getContext("2d"),
//           w = canvas.width,
//           h = canvas.height;

//         ctx.drawImage(this, 0, 0);

//         var o1 = new Osc(0.05), o2 = new Osc(0.03), o3 = new Osc(0.06),
//             x0 = 0, x1 = w * 0.25, x2 = w * 0.5, x3 = w * 0.75, x4 = w;

//         (function loop() {
//             ctx.clearRect(0, 0, w, h);
//             for (var y = 0; y < h; y++) {

//                 // segment positions
//                 var lx1 = x1 + o1.current(y * 0.2) * 3; // scaled to enhance demo effect
//                 var lx2 = x2 + o2.current(y * 0.2) * 3;
//                 var lx3 = x3 + o3.current(y * 0.2) * 3;

//                 // segment widths
//                 var w0 = lx1;
//                 var w1 = lx2 - lx1;
//                 var w2 = lx3 - lx2;
//                 var w3 = x4 - lx3;

//                 // draw image lines ---- source ----   --- destination ---
//                 ctx.drawImage(img, x0, y, x1, 1, 0, y, w0, 1);
//                 ctx.drawImage(img, x1, y, x2 - x1, 1, lx1 - 0.5, y, w1, 1);
//                 ctx.drawImage(img, x2, y, x3 - x2, 1, lx2 - 1, y, w2, 1);
//                 ctx.drawImage(img, x3, y, x4 - x3, 1, lx3 - 1.5, y, w3, 1);
//             }
//             requestAnimationFrame(loop);
//         })();
//     }

//     function Osc(speed) {

//         var frame = 0;

//         this.current = function (x) {
//             frame += 0.002 * speed;
//             return Math.sin(frame + x * speed * 10);
//         };
//     }

$(document).ready(function () {

    $ ('.bkg-image').css('background-image','url(content/images/background/BKG_1.png)');

    $('.No').click(function () {
        $('#retry-level').modal('hide')
    });

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

     title.load();
     title.play();
    $(".title").hide().delay(800).fadeIn(5000);

    $(".play").hide().delay(5000).fadeIn(2000);

    $(".play").click(function () {
        click.load();
        click.play();
        setTimeout(function () {
                $("#putcontenthere").load("action_items/ai2.html");
        }, 2000);

    });


});

