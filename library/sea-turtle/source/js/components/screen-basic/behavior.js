pl.game.component('screen-basic', function () {

	this.ready = function () {
		if (this.isMemberSafe('requiredQueue') && this.requiredQueue) {
			this.requiredQueue.on('complete', this.bind(function () {
				var sfx;

				sfx = pl.util.resolvePath(this, 'game.audio.sfx.screenComplete');

				if (sfx) sfx.play();
			}));
		}
	};
	
	this.next = function () {
		var nextScreen, buttonSound;

		if(this.hasClass('last') && this.hasClass('COMPLETE')) this.game.quit.okay();

		nextScreen = this.proto();
		buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

		if (nextScreen) {
			this.screen.leave();
			nextScreen.open();
			if (buttonSound) buttonSound.play();
		}

		return nextScreen;
	};

	this.prev = function () {
		var prevScreen, buttonSound;

		prevScreen = this.proto();
		buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

		if (prevScreen) {
			this.screen.close();
			prevScreen.open();
			if (buttonSound) buttonSound.play();
		}

		return prevScreen;
	};

	this.start = function () {
		var bgSound, voSound;

		bgSound = pl.util.resolvePath(this, 'audio.background[0]?');
		voSound = pl.util.resolvePath(this, 'audio.voiceOver[0]?');
		this.startFirstEntity();

		if (bgSound) bgSound.play();
		if (voSound) voSound.play();
		return this;
	};

	this.startFirstEntity = function (argument) {
		var conditions;

		if (this.hasOwnProperty('entities') && this.entities) {
			conditions = [
				this.entities[0],
				this.entities[0].hasOwnProperty('start'),
				typeof this.entities[0].start === 'function'
			];

			if (!~conditions.indexOf(false)) {
				return this.entities[0].start();
			}
		}

		return false;
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

	this.on('ui-leave', function (_event) {
		if (this.isReady && this === _event.targetScope) {
			this.stop();
		}
	});

});
