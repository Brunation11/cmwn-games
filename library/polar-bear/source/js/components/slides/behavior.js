pl.game.component('slides', function () {
		
	this.ready = function () {
		this.find('.frame-component:first-child').scope().open();
	};

	/*
	 * @this {frame-component-scope} called by the next button in a frame component.
	 */
	this.next = function () {
		var index, nextSlide, buttonSound;

		index = this.frame.indexOf(this);
		buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

		if (~index) nextSlide = this.frame[index+1];
		
		if (nextSlide) {
			this.leave();
			nextSlide.open();

			if (buttonSound) buttonSound.play();

			return nextSlide;
		}

		else {
			return this.proto();
		}
	};

	/*
	 * @this {frame-component-scope} called by the next button in a frame component.
	 */
	this.prev = function () {
		var index, prevSlide, buttonSound;

		index = this.frame.indexOf(this);
		buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

		if (~index) prevSlide = this.frame[index-1];
		
		if (prevSlide) {
			this.close();
			prevSlide.open();

			if (buttonSound) buttonSound.play();

			return prevSlide;
		}

		else {
			return this.proto();
		}
	};
});