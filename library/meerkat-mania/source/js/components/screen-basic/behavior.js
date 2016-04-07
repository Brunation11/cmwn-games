pl.game.component('screen-basic', function () {

	this.on('ready', function (_event) {
		if (this.audio) {
			this.audio.rule('.voiceOver', 'shouldPlay', function (_event) {
				_event.response(!_event.target.config("dontautoplay"));
			});
		}
	});

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

		if (this.audio) {
			this.startAudio();
			this.audio.sfx.play('start');
		}

		if (entities) {
			entities.forEach(function (_entity) {
				if (_entity.hasOwnProperty('start')) _entity.start();
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
				if (_entity.hasOwnProperty('start')) _entity.stop();
			});
		}

		return this;
	};

	this.on('ui-open', function (_event) {
		if (this.isReady && this === _event.targetScope) {
			this.start();
		}

		if(this.properties.gameClass) {
			this.game.addClass(this.properties.gameClass);
		}

		if (!this.requiredQueue || (this.hasOwnProperty('requiredQueue') && !this.requiredQueue.length)) {
			this.complete();
		}
	});

	this.on('ui-leave', function (_event) {
		if(this.properties.gameClass) {
			this.game.removeClass(this.properties.gameClass);
		}

		if (this.isReady && this === _event.targetScope) {
			this.stop();
		}
	});

	this.on('ui-close', function (_event) {
		if(this.properties.gameClass) {
			this.game.removeClass(this.properties.gameClass);
		}

		if (this.isReady && this === _event.targetScope) {
			this.stop();
		}
	});

});
