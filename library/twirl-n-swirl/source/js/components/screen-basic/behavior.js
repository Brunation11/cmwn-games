pl.game.component('screen-basic', function () {

	function playButtonSFX (_direction) {
		var so = (_direction === "next") ? this.audio.sfx.nextScreen : this.game.audio.sfx.button;
		if (so) so.play();
	}

	this.on('ui-open', function (_event) {
		if (this.is(_event.target) && this.isReady) {
			this.game.setWallpaper(this.properties.wallpaper);
			this.start();
			if (this.completed() && !this.isComplete) this.complete();
		}
	});

	this.on('ui-leave', function (_event) {
		if (this.is(_event.target)) this.stop();
	});

	this.next = function () {
		var nextScreen, isLastScreen;

		nextScreen = this.proto();
		isLastScreen = this.game.screens.length - 1 === this.index();

		if (nextScreen) {
			this.screen.leave();
			nextScreen.open();
			playButtonSFX.call(this, 'next');
		} else if (isLastScreen && this.completed()) {
			this.game.quit.okay();
		}

		return nextScreen;
	};

	this.prev = function () {
		var prevScreen;

		prevScreen = this.proto();

		if (prevScreen) {
			this.screen.close();
			prevScreen.open();
			playButtonSFX.call(this, 'prev');
		}

		return prevScreen;
	};

	this.start = function () {
		this.audio.background.play();
		this.audio.voiceOver.play();

		// Start all screen entities
		if (this.hasOwnProperty('entities')) this.entities.forEach(function (_entity) {
			if (typeof _entity.start === 'function' && _entity.hasOwnProperty('start')) _entity.start();
		});

		return this;
	};
	
	this.complete = function () {
		var sfx;

		sfx = pl.util.resolvePath(this, 'game.audio.sfx.screenComplete');

		if (sfx) sfx.play();

		return this.proto();
	};

});
