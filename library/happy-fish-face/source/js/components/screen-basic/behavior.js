pl.game.component('screen-basic', function () {

	this.on('ready', function (_event) {
		if (this.is(_event.target) && this.audio) {
			this.audio.rule('.voiceOver', 'shouldPlay', function (_event) {
				_event.response(!_event.target.config("dontautoplay"));
			});
		}
	});

	this.allowAction = function() {
		return (this.screen.state(this.screen.STATE.OPEN) && !this.screen.state(this.screen.STATE.VOICE_OVER)) || this.game.demoMode;
	};

	this.next = function () {
		var nextScreen, buttonSound;

		nextScreen = this.proto();
		buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

		if (nextScreen) {
			this.leave();
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
		var entities = this.hasOwnProperty('entities') && this.entities;

		this.startAudio();
		if (this.audio) this.audio.sfx.play('start');

		if (entities) {
			entities.forEach(function (_entity) {
				if (_entity.isMemberSafe('start')) _entity.start();
			});
		}

		return this;
	};

	this.stop = function () {
		var entities = this.hasOwnProperty('entities') && this.entities;

		this.stopAudio();
		this.kill('delay');

		if (entities) {
			entities.forEach(function (_entity) {
				if (_entity.isMemberSafe('start')) _entity.stop();
			});
		}

		return this;
	};

	this.complete = function () {
		this.game.audio.sfx.screenComplete.play();
		return this.proto();
	};

	this.on('ui-open', function (_event) {
		if (this.is(_event.target)) {
			if (this.isReady) this.start();
			if (this.completed() && !this.isComplete) this.complete();

			if (this.properties.gameClass) {
				this.game.addClass(this.properties.gameClass);
			}
		}
	});

	this.on('ui-leave ui-close', function (_event) {
		if (this.is(_event.target)) {
			this.stop();

			if (this.properties.gameClass) {
				this.game.removeClass(this.properties.gameClass);
			}
		}
	});
});
