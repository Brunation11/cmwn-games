/**
 * HFF - multiBubbles Screen
 */
export default function multiBubbles () {
	this.on('ready', function(_event) {
		var correct;

		if (!this.is(_event.target)) return;

		correct = pl.Queue.create();

		correct.on('complete', this.bind(function () {
			// this.delay('1.5s',this.audio.sfx.confirmed.play.bind(this.audio.sfx.confirmed));
			this.complete();
		}));

		this.items = this
			.selectable
			.find('[pl-correct]')
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
