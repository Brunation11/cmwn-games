//////////////  background //////////////
try
{
    background.load();
    background.play();
}
catch (err) {
    //no sound - log error
}
//////////////  Correct items //////////////
function playCorrect() {
    try
    {
        Correct.load();
        Correct.play();
    }
    catch (err) {
        //no sound - log error
    }
}

//////////////  Wrong items //////////////
function playWrong() {
    try
    {
        Wrong.load();
        Wrong.play();
    }
    catch (err) {
        //no sound - log error
    }
}

//////////////  clock ticking //////////////

try
{
    clock.load();
    clock.play();
}
catch (err) {
    //no sound - log error
}


