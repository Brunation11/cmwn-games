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
		var entities = this.hasOwnProperty('entities') && this.entities;

		this.startAudio();

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

		if(this.properties.sfx) {
			var sfx = this.properties.sfx.split(" ");
			for(var i = 0, n = sfx.length; i < n; i++) {
				if(this.audio.sfx[sfx[i]]) this.audio.sfx[sfx[i]].play();
			}
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
