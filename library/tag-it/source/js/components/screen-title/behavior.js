pl.game.component('screen-title', function () {

	this.on('ready', function () {
		this.delay(0, this.open);
		this.close(this.game.loader);
	});

	/**
	 * Start the title screen logo animation when the screen opens.
	 */
	this.on('ui-open', function () {
		var so, delay = this.properties.delay;

		so = pl.util.resolvePath(this, 'audio.background[0]?');

		if (so) so.play();

		return this;
	});

	this.on('ui-close', function(_event) {
		if(!this.is(_event.target)) return;
		this.on('transitionend', function(_event) {
			if(!this.is(_event.target)) return;
		});
	});

	this.next = function () {
		var nextScreen, so, animate;
		
		function leave () {
			this.screen.leave();
			nextScreen.open();
		}

		nextScreen = this.proto();
		so = pl.util.resolvePath(this, 'audio.sfx.nextScreen');
		animate = this.properties.animOut || '';

		if (!so) {
			so = pl.util.resolvePath(this, 'game.audio.sfx.button');
		}

		if (nextScreen) {
			if (so) so.play();
		}

		return nextScreen;
	};

});
