/**
 * Monarch - Fly-Across Screen
 */
export default function flyAcross () {
	var count = 0;

	this.respond('landed', function(_event) {
		if(_event.message === "red") {
			this.audio.sfx.correct.play();
			this.modal.item(count++);
		} else {
			this.audio.sfx.incorrect.play();
		}
	});

	this.entity('modal', function() {
		this.close = function() {
			if(!this.screen.state(this.screen.STATE.VOICE_OVER) || this.game.demoMode) {
				this.deselect();
				this.screen.runner.restart();
			}
		};
	});
};
