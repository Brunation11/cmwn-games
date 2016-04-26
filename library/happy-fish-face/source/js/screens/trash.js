/**
 * HFF - Trash Screen
 */
export default function trash () {
	this.SELECTOR = {
		CORRECT: '[pl-correct]'
	};

	this.on('ready', function(_event) {
		var $net;

		if (!this.is(_event.target)) return;

		$net = this.find('.net');

		this.mousemove(function(e){
			$net.css({left: e.clientX / this.game.zoom - 50, top: e.clientY / this.game.zoom - 65});
		}.bind(this));

		this.on('touchstart', function() {
			this.addClass('TOUCH');
		}.bind(this));
		
		this.$items = this
			.selectable
			.find(this.SELECTOR.CORRECT);
		this.setup();

		this.modal.reveal.audio.voiceOver.on('ended', function (_event) {
			if (this.screen.state(this.STATE.OPEN)) {
				if(_event.target.id() === 'goodJob') this.audio.voiceOver.neverThrow.play();
			}
		}.bind(this.modal.reveal));
	});

	this.setup = function () {
		var correct = pl.Queue.create();

		correct.on('complete', this.bind(function () {
			this.timer.stop();
			this.modal.item('goodJob');
			this.addClass('GOOD-JOB');
		}));

		this.items = this
			.$items
			.map(function (_index, _node) {
				correct.add($(_node).id());
				return _node;
			})
			.toArray();

		this.unhighlight(this.$items);

		this.items.correct = correct;

		this.removeClass('TRY-AGAIN GOOD-JOB');
	};

	this.reset = function() {
		this.setup();
		this.deselect(this.modal);
		this.timer.restart();
	};

	this.respond('select', function(_event) {
		if(~this.items.correct.indexOf(_event.message)) {
			this.audio.sfx.correct.play();
			this.highlight(_event.behaviorTarget);
			this.items.correct.ready(_event.message);
		} else {
			this.audio.sfx.incorrect.play();
		}
	});

	this.entity('timer', function() {
		this.render = function() {
			this.stopWatch.text(this.timeout/1000 - this.time);
			return this;
		};

		this.timerComplete = function() {
			this.stop();
			this.screen.modal.item('tryAgain');
			this.screen.addClass('TRY-AGAIN');
		};
	});

	this.on('ui-open', function(_e) {
		if(!this.is(_e.target)) return;

		if(this.modal.state(this.STATE.SELECTED)) {
			this.reset();
		}
	});
}
