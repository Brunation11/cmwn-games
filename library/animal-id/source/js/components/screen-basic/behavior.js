pl.game.component('screen-basic', function () {
	var collection;

	this.SELECTOR = {
		CORRECT: '[pl-correct]',
		INCORRECT: '[pl-incorrect]'
	};

	this.playSound = function(_sound) {
		var delay, $sound;

		$sound = $(_sound);
		delay = $sound.attr('pl-delay');
		if($sound.hasClass('voice-over')) {
			this.currentVO = _sound;
		}

		if (delay) {
			return this.delay(delay, _sound.play.bind(_sound));
		} else {
			return _sound.play();
		}
	};

	this.handleProperty({
		bg: function (_node, _name, _value) {
			var img = new Image();
			
			if (!collection) collection = [];

			img.src = _value;
			collection.push(img);
			$(_node).css('background-image', 'url('+_value+')');
		}
	});

	this.on('initialize', function (_event) {
		if (!this.is(_event.targetScope)) return;
		this.watchAssets(collection);
	});

	this.ready = function () {
		if (this.isMemberSafe('requiredQueue') && this.requiredQueue) {
			this.requiredQueue.on('complete', this.bind(function () {
				var sfx;

				sfx = pl.util.resolvePath(this, 'game.audio.sfx.screenComplete');

				if (sfx) this.playSound(sfx);
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
			if (buttonSound) this.playSound(buttonSound);
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
			if (buttonSound) this.playSound(buttonSound);
		}

		return prevScreen;
	};

	this.start = function () {
		var bgSound, voSound;

		bgSound = pl.util.resolvePath(this, 'audio.background[0]?');
		voSound = pl.util.resolvePath(this, 'audio.voiceOver[0]?');

		if (bgSound) this.playSound(bgSound);
		if (voSound) this.playSound(voSound);

		if (this.hasOwnProperty('entities') && this.entities[0]) this.entities[0].start();

		return this;
	};

	this.stop = function() {
		if(this.currentVO) {
			this.currentVO.pause();
			this.currentVO.currentTime = 0;
		}

		return this;
	}

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

	this.on('ui-close', function (_event) {
		if(!this.is(_event.target)) return;
		this.stop();
	});

});
