
      $(document).ready(function () {
        $('#game-complete').modal('hide');
		
		$('.sign1').click(function () {
            $('.sign1').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("/action_items/ai7.html");
            });

    });