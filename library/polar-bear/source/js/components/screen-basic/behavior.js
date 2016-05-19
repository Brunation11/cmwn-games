pl.game.component('screen-basic', function () {

	this.allowAction = function() {
		return !this.screen.state(this.screen.STATE.VOICE_OVER) || this.game.demoMode;
	};

	this.on('ready', function (_event) {
		if(!this.is(_event.target)) return;

		if (this.isMemberSafe('requiredQueue') && this.requiredQueue) {
			this.requiredQueue.on('complete', this.bind(function () {
				var sfx;

				sfx = pl.util.resolvePath(this, 'game.audio.sfx.screenComplete');

				if (sfx) sfx.play();
			}));
		}

		if(this.state(this.STATE.OPEN)) this.start();
	});
	
	this.next = function () {
		var current, nextScreen, buttonSound;

		if(this.hasClass('last') && this.hasClass('COMPLETE')) this.game.quit.okay();

		if (this !== this.screen) {
			this.log('Not called on a screen');
			console.trace();
			return;
		}

		buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

		// delegate to a child "slides" component.
		if (this.slides && this.slides.isComponent) {
			current = this.slides.current();
			nextScreen = current.next();

			if (nextScreen == null) {
				current = this;
				nextScreen = this.proto();
			}
		}

		else {
			current = this;
			nextScreen = this.proto();
		}

		if (nextScreen) {
			current.leave();
			nextScreen.open();
			if (buttonSound) buttonSound.play();
		}

		return nextScreen;
	};

	this.prev = function () {
		var current, prevScreen, buttonSound;

		if (this !== this.screen) {
			this.log('Not called on a screen');
			console.trace();
			return;
		}

		buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

		// delegate to a child "slides" component.
		if (this.slides && this.slides.isComponent) {
			current = this.slides.current();
			prevScreen = current.prev();

			if (prevScreen == null) {
				current = this;
				prevScreen = this.proto();
			}
		}

		else {
			current = this;
			prevScreen = this.proto();
		}

		if (prevScreen) {
			current.close();
			prevScreen.open();
			if (buttonSound) buttonSound.play();
		}

		return prevScreen;
	};

	this.start = function () {
		this.startAudio();

		if (this.hasOwnProperty('entities') && this.entities[0]) this.entities[0].start();

		return this;
	};

	this.on('ui-open', function (_event) {
		if (this !== _event.targetScope) return;

		if (this.isReady) {
			this.start();
		}

		if (!this.isComplete) {
			if (!this.requiredQueue || (this.isMemberSafe('requiredQueue') && !this.requiredQueue.length)) {
				this.complete();
			}
		}

		if (this.screen.isLast()) {
			this.addClass('last');
		}
	});

	this.on('ui-close', function (_event) {
		if (this.isReady && this === _event.targetScope) {
			this.stop();
		}
	});

});
