/**
 * HFF - Trash Screen
 */
export default function trash () {
	this.SELECTER = {
		CORRECT: '[pl-correct]'
	};

	this.on('ready', function(_event) {
		var $net;

		if (!this.is(_event.target)) return;

		$net = this.find('.net');

		this.mousemove(function(e){
			$net.css({left: e.clientX / this.game.zoom - 50, top: e.clientY / this.game.zoom - 65});
		}.bind(this));
		
		this.$items = this
			.selectable
			.find(this.SELECTER.CORRECT);
		this.setup();
	});

	this.setup = function () {
		var correct = pl.Queue.create();

		correct.on('complete', this.bind(function () {
			this.timer.stop();
			this.modal.item('goodJob');
			this.game.bgSound.pause();
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

		this.removeClass('try-again');
	};

	this.reset = function() {
		this.setup();
		this.deselect(this.modal);
		this.timer.restart();
	};

	this.respond('select', function(_event) {
		if(~this.items.correct.indexOf(_event.message)) {
			this.playSound(this.audio.sfx.correct);
			this.highlight(_event.behaviorTarget);
			this.items.correct.ready(_event.message);
		} else {
			this.playSound(this.audio.sfx.incorrect);
		}
	});

	this.entity('modal', function() {
		this.entity('reveal', function() {
			this.on('ready', function(_event) {
				if (!this.is(_event.target)) return;

				this.audio.voiceOver.goodJob.onended = function() {
					if(this.screen.state(this.screen.STATE.OPEN)) this.screen.playSound(this.audio.voiceOver.neverThrow);
				}.bind(this);

				this.audio.voiceOver.neverThrow.onended = function() {
					if(this.screen.state(this.screen.STATE.OPEN)) this.screen.complete();
				}.bind(this);
			});
		});
	});

	this.entity('timer', function() {
		this.render = function() {
			this.stopWatch.text(this.timeout/1000 - this.time);
			return this;
		};

		this.timerComplete = function() {
			this.stop();
			this.screen.modal.item('tryAgain');
			this.screen.addClass('try-again');
		};
	});
}
