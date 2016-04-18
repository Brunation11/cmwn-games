pl.game.component('screen-basic', function () {

	this.SELECTOR = {
		CORRECT: '[pl-correct]',
		INCORRECT: '[pl-incorrect]'
	};

	this.on('ui-open', function (_event) {
		if (!this.is(_event.target)) return;
		if (this.completed() && !this.isComplete) this.complete();
		if (this.isReady) this.start();
		if (this.screen.isLast()) this.addClass('last');
	});

	this.on('ui-leave', function (_event) {
		if (this.isReady && this.is(_event.target)) this.stop();
	});
	
	this.next = function () {
		var nextScreen;

		// @todo make isLast a method for slides. (this.isLast() for any sequence of views)
		// @todo Perhaps make the slides component the primary machine for screen
		// navigation since they are esentially the same.
		// 
		if(this.screen.isLast() && this.completed()) this.game.quit.okay();

		nextScreen = this.proto();

		if (nextScreen) {
			this.screen.leave();
			nextScreen.open();
			this.game.audio.sfx.button.play();
		}

		return nextScreen;
	};

	this.prev = function () {
		var prevScreen;

		prevScreen = this.proto();

		if (prevScreen) {
			this.screen.close();
			prevScreen.open();
			this.game.audio.sfx.button.play();
		}

		return prevScreen;
	};

	// @todo Possibly make this a behavior so decendants can respond to the screen starting - Micah: 3/8/16
	this.start = function () {
		var entities = this.hasOwnProperty('entities') && this.entities;

		this.startAudio();

		// start all screen entities.
		if (entities) {
			entities.forEach(function (_entity) {
				var type = typeof _entity.start;

				if (_entity.hasOwnProperty('start') && type === 'function') {
					_entity.start();
				}
			});
		}

		return this;
	};

	this.complete = function () {
		this.game.audio.sfx.play('screenComplete');
		return this.proto();
	};

	this.on('ui-close', function (_event) {
		if(!this.is(_event.target)) return;
		this.stop();
	});

	this.on('ready', function(_event) {
		if(!this.is(_event.target)) return;
		if(this.state(this.STATE.OPEN)) this.start();
	})

});
