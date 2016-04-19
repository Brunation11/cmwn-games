pl.game.component('screen-title', function () {

	this.playSound = function (_sound) {
		var delay;

		delay = $(_sound).attr('pl-delay');

		if($(_sound).hasClass('voice-over')) {
			this.currentVO = _sound;
		}

		if (delay) {
			return this.delay(delay, _sound.play.bind(_sound));
		} else {
			return _sound.play();
		}
	};

	this.on('ready', function (_event) {
		if(!this.is(_event.target)) return;

		if(this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();

		if (this.isMemberSafe('requiredQueue') && this.requiredQueue) {
			this.requiredQueue.on('complete', this.bind(function () {
				var sfx;

				sfx = pl.util.resolvePath(this, 'screen.audio.sfx.screenComplete') || pl.util.resolvePath(this, 'game.audio.sfx.screenComplete');

				if (sfx) this.playSound(sfx);
			}));
		}
	});

	/**
	 * Start the title screen logo animation when the screen opens.
	 */
	this.on('ui-open', function () {
		var so, delay = this.properties.delay;

		if(typeof this.properties.wallpaper != 'undefined') {
			this.game.changeWallpaper(this.properties.wallpaper);
		}

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
		var nextScreen, buttonSound;

		nextScreen = this.proto();
		buttonSound = pl.util.resolvePath(this, 'audio.sfx.button') || pl.util.resolvePath(this, 'game.audio.sfx.button');

		if (nextScreen) {
			this.leave();
			nextScreen.open();
			if (buttonSound) buttonSound.play();
		}

		return nextScreen;
	};

});
