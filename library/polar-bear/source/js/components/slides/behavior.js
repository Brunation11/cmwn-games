pl.game.component('slides', function () {
		
	this.ready = function () {
		this.find('.frame-component:first-child').scope().open();
	};

	/*
	 * @this {frame-component-scope} called by the next button in a frame component.
	 */
	this.next = function () {
		var index, nextSlide;

		index = this.frame.indexOf(this);

		if (~index) nextSlide = this.frame[index+1];
		
		if (nextSlide) {
			this.leave();
			nextSlide.open();

			return nextSlide;
		}

		else {
			return this.proto();
		}
	};
});