pl.game.component('audio-sequence', function () {
	
	var sounds = null;

	var playSound = function (_sound) {
		var delay;
	
		delay = $(_sound).attr('pl-delay');

		if (delay) {
			return this.delay(delay, _sound.play.bind(_sound));
		} else {
			return _sound.play();
		}
	};

	this.on('ready', function(_event) {
		if (!this.is(_event.target)) return;

		sounds = this.find("> audio");
		sounds.each(function(i, audio) {
			audio.onended = function() {
				if(sounds[i+1]) playSound(sounds[i+1]);
			};
		});
	});

	this.start = function() {
		if(sounds[0]) playSound(sounds[0]);
	};
});
