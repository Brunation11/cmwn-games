


var sound1 = document.getElementById('correct');
var sound2 = document.getElementById('recycle');
var sound3 = document.getElementById('landfill');
var sound4 = document.getElementById('ins');
var sound5 = document.getElementById('incorrect');

function game() {
    var match = [
         {
            text: 'recycle recycle recycle recycle recycle recycle recycle recycle',
            sound: sound2,
            button: 'btn1'
        } ,

         {
            text: 'compost compost compost compost compost compost compost',
            sound: sound1,
            button: 'btn2'
        },

         {
            text: 'landfill landfill landfill landfill landfill landfill landfill landfill landfill',
            sound: sound3,
            button: 'btn3'
        },

         {
            text: 'insineration insineration insineration insineration insineration',
            sound: sound4,
            button: 'btn4'
        }
    ];



    var rand = match [ Math.floor(Math.random() * match.length) ];

    document.getElementById('text').innerHTML = '<p>' + rand.text + '</p>' ;
    rand.sound.play();

    $('.button').on('click', function(event){

        if (  ) {
            game();
        }
        console.log(event, rand);
    });

}

game();



// $(".btn1").click(function() {


// });

// $(".btn2").click(function() {

// });

// $(".btn3").click(function() {

// });

// $(".btn4").click(function() {

// });


