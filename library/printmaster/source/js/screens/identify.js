/**
 * Printmaster - Identify Screen
 */
export default function identify () {
	this.on('ready', function(_event) {
		var correct;

		if (!this.is(_event.target)) return;

		correct = pl.Queue.create();

		correct.on('complete', this.bind(function () {
			this.delay('1.5s',this.audio.sfx.confirmed.play.bind(this.audio.sfx.confirmed));
		}));

		this.items = this
			.find('.header img')
			.map(function (_index, _node) {
				correct.add($(_node).id());
				return _node;
			})
			.toArray();

		this.items.correct = correct;

		this.headers = this.find('.header img');
		this.answers = this.find('.items li');
		this.setItem();
	});

	this.setItem = function(_idx) {
		if(this.item && this.items[this.item]) this.items[this.item].ready();
		this.idx = _idx || 0;
		this.item = $(this.items[this.idx]).id();

		if(this.item) {
			this.select(this.headers.filter('[pl-id='+this.item+']'));
			if(this.selectable) this.selectable.deselectAll();

			for(var i = 0; i < 5; i++) {
				this.delay(i*150, function() {
					this.answers.each(function (_index, _node) {
						_node.style.order = Math.round(20*Math.random());
					});
				});
			}
		}
	};

	this.respond('select', function(_event) {
		if(_event.message === this.item) {
			this.audio.sfx.correct.play();
			this.audio.sfx.granted.play();
			this.select(_event.behaviorTarget);
			this.items.correct.ready(this.item);
			this.delay('1s', this.setItem.bind(this,++this.idx));
		} else {
			this.audio.sfx.incorrect.play();
			this.audio.sfx.denied.play();
			this.highlight(_event.behaviorTarget);
		}
	});
}
