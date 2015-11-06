// b();
// console.log(a);

// var a = 'Hello World!';

// function b(){
// 	console.log('Called b!');
// }


    $(".quote").hide();

    var elements = $(".quote");
    var elementCount = elements.size();
    var elementsToShow = 1;
    var alreadyChoosen = ",";
    var i = 0;
    while (i < elementsToShow) {
        var rand = Math.floor(Math.random() * elementCount);
        if (alreadyChoosen.indexOf("," + rand + ",") < 0) {
            alreadyChoosen += rand + ",";
            elements.eq(rand).show();
            ++i;
        }
    }
