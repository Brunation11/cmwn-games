/**
 * HFF - multiBubbles Screen
 */
export default function multiBubbles () {
	this.SELECTER = {
		CORRECT: '[pl-correct]'
	};

	this.on('ready', function(_event) {
		var correct;

		if (!this.is(_event.target)) return;

		correct = pl.Queue.create();

		correct.on('complete', this.bind(function () {
			this.playSound(this.game.audio.sfx.screenComplete);
			this.complete();
		}));

		this.items = this
			.selectable
			.find(this.SELECTER.CORRECT)
			.map(function (_index, _node) {
				correct.add($(_node).id());
				return _node;
			})
			.toArray();

		this.items.correct = correct;
	});

	this.respond('select', function(_event) {
		if(~this.items.correct.indexOf(_event.message)) {
			this.playSound(this.audio.voiceOver[_event.message]);
			this.highlight(_event.behaviorTarget);
			this.score.up(10);
			this.items.correct.ready(_event.message);
		} else {
			this.score.down(10);
			this.playSound(this.audio.sfx.incorrect);
		}
	});
}
