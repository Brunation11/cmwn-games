pl.game.component('video', function () {

	this.start = function() {
		var self = this;
		this.video.on('ended', function() {
			self.screen.complete();
		});
		this.video[0].play();
	};

	this.pause = function() {
		this.video[0].pause();
	};

	this.on('ready', function(_event) {
		if(!this.is(_event.target)) return;
		this.video.on('ended', this.complete.bind(this));
	});

});
