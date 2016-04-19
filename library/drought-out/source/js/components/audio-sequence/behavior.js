pl.game.component('audio-sequence', function () {
	var sounds;

	this.on('ready', function (_event) {
		var i = 1;

		if (!this.is(_event.target)) return;

		sounds = this.audio.find('.audio');

		this.audio.on('ended', function (_event) {
			var next = sounds[i++];
			if (next) next.play();
		}.bind(this));
	});

	this.start = function() {
		if(sounds.length) sounds.play();
	};
});
