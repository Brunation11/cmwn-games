pl.game.component('audio-sequence', function () {
	
	this.sounds = null;

	this.on('ready', function (_event) {
		var i, sounds;

		if (!this.is(_event.target)) return;

		this.sounds = this.audio.find('.audio');
		i = 1;

		if (!this.sounds) debugger;

		this.screen.log('register', this.sounds);

		this.audio.on('ended', function (_event) {
			var next = this.sounds[i++];
			if (next) next.play();
		}.bind(this));
	});

	this.start = function() {
		this.log('register', this.sounds);
		if(this.sounds.length) this.sounds.play();
	};
});
