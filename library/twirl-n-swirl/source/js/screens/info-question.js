export default function infoQuestion () {

	this.next = function () {
		var nextScreen, so;

		if (!this.completed()) return;

		nextScreen = this.sup();
		so = pl.util.resolvePath(this, 'game.audio.sfx.flush');

		if (so) so.play();

		this.delay('2s', function () {
			this.leave();
			nextScreen.open();
		});

		return nextScreen;
	};

}
