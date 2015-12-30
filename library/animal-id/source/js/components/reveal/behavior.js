pl.game.component('reveal', function () {

	this.respond('select', function (_event) {
		var vo, index;

		index = _event.message;
		this.closeAll();

		if(index !== undefined) {
			if (typeof index === 'number') {
				this.open(this.find('li').eq(index));
				this.audio.voiceOver[index].play();
			}
				
			else if (typeof index === 'string') {
				if (this[index]) {
					this.open(this[index]);

					if (this.audio) {
						index = this[index].index();
						vo = this.audio.voiceOver ? this.audio.voiceOver[index] : null;
						
						if (vo) vo.play();
					}
				}
			}
		}
	});

	this.closeAll = function() {
		if(!this.screen.state(this.screen.STATE.VOICE_OVER)) {
			this.close(this.find('li.OPEN'));
		}
	};

	this.handleCloseClick = function() {
		this.closeAll();
		this.screen.next();
	};

});