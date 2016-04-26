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
			this.game.audio.sfx.screenComplete.play();
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
			this.audio.voiceOver.play(_event.message);
			this.highlight(_event.behaviorTarget);
			this.score.up(10);
			this.items.correct.ready(_event.message);
		} else {
			this.score.down(10);
			this.audio.sfx.incorrect.play();
		}
	});

	this.on('ui-open', function(_e) {
		if(!this.is(_e.target)) return;

		if(this.isComplete) {
			this.unhighlight(this.find('.'+this.STATE.HIGHLIGHTED));
			this.start();
		}
	});
}
