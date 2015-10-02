 $(document).ready(function () {
    titles.load();
    titles.play();
    $('.design').click(function () {
        $('.design').delay(3000).delay(2000, function () {
            $("#putcontenthere").load("action_items/ai2.html");
        });
        designBtn.play();
    });

    $('.bkg-image').css('background-image','url(content/images/title_4.png)');
});