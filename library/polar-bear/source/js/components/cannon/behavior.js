pl.game.component('cannon', function () {

	this.willInit = function () {
		var $ball;

		if (this.properties.ball) {
			$ball = this.findOwn('[pl-id=ball]');
			$ball.attr('src', this.properties.ball);
		}
	};

	this.behavior('fire', function () {
		this.launch();
		return {
			message: this.properties.fire
		};
	});

	this.launch = function () {
		this.ball.removeClass('RELOAD').addClass('LAUNCHED');
	};

	this.reload = function () {
		this.ball.addClass('RELOAD').removeClass('LAUNCHED');
	};

	this.didLaunch = function () {
		return this.ball.hasClass('LAUNCHED');
	};

});