
var sound1 = document.getElementById('correct');
var sound2 = document.getElementById('recycle');
var sound3 = document.getElementById('landfill');
var sound4 = document.getElementById('ins');
var sound5 = document.getElementById('incorrect');

var already_matched   = new Array();
var selected_item;

function game() {

    var rand = 1;
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


  function newItem() {
        rand = match [ Math.floor(Math.random() * match.length) ];
        document.getElementById('text').innerHTML = '<p>' + rand.text + '</p>' ;
        rand.sound.play();

        selected_item = rand.text;
        console.log('randomly selected item: ' + selected_item);

         if (already_matched.indexOf(selected_item) >= 0) {
                //alert('already matched');
                rand.sound.pause();
                newItem();
        }
        already_matched.push(selected_item);
    }

   newItem();

    $('.button').on('click', function(event) {

            console.log('already_matched: ' + already_matched);

            if (already_matched.length > 4) {
                alert("All done");
                return rand;
            }

            if($(this).hasClass(rand.button)) {
                alert('it matches');
                rand.sound.pause();
                newItem();

            } else {
                alert('Try again');

            }

    });

}

game();



