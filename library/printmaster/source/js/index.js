/**
 * Index script
 * @module
 */
import './testPlatformIntegration';
import '../../../../../js-interactive-library';
import './config.game';

import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/title/behavior';
import './components/frame/behavior';
import './components/score/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-reveal/behavior';
import './components/audio-sequence/behavior';
import './components/modal/behavior';

pl.game('printmaster', function () {

	this.screen('title', function () {
		this.ready = function (_event) {
			this.open();
			this.close($('#loader'));
		};

		this.on('ui-open', function (_event) {
			if (this === _event.targetScope) {
				this.title.start();
			}
		});

		this.on('ready', function (_event) {
			// Screens are display:none then when READY get display:block.
			// When a screen is OPEN then it transitions a transform,
			// the delay is to prevent the transition failing to play
			// because of collision of these styles.
			// 
			if (this.is(_event.target)) this.delay(0, this.open);
		});

	});

	this.screen('identify', function() {

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

				this.answers.each(function (_index, _node) {
					_node.style.order = Math.round(10*Math.random());
				});
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
	});

	this.screen('carousel', function() {

		this.on('ready', function(_event) {
			if (!this.is(_event.target)) return;
			
			this.$targets = this.find('.target img');
			this.setTarget();
		});

		this.setTarget = function(_idx) {
			this.idx = _idx || 0;
			this.target = $(this.$targets[this.idx]).id();
			this.amount = $(this.$targets[this.idx]).attr('pl-amount');

			if(this.target) {
				this.select(this.$targets[this.idx]);

				if(this.score) {
					this.score.removeClass('loops whorl arch doubleloops').addClass(this.target);
					this.score.attr('pl-max', this.amount);
					this.score.properties.max = this.amount;
					this.score.reset();
				}
			}
		};

		this.respond('complete', function(_event) {
			if(_event.message === 'score') {
				this.modal.item(this.idx);
				this.setTarget(++this.idx);
			}
		});

		this.start = function (_event) {
			this.proto();
			this.carousel.start();
		};

		this.stop = function () {
			this.carousel.stop();
		}

		this.on('ui-open', function(_event) {
			if (!this.is(_event.target)) return;

			this.carousel.start();
			this.modal.item(8);
			this.incomplete();
		});

		this.state('incomplete','-COMPLETE', {
			willSet: function (_target) {
				this.isComplete = false;
			}
		});

		this.entity('carousel', function () {
			// The event 'behaviorTarget' for this entities 'hit' behavior
			this.provideBehaviorTarget = function () {
				// Choose the item thats in the middle of the 3 visible.
				return this.current().next();
			};

		});

		this.entity('cannon', function() {
			this.behavior('fire', function () {
				if(this.isLaunchComplete) {
					this.launch(this.ball);
					return {
						message: this.screen.target
					};
				}

				return false;
			});
		});

		this.entity('score', function() {

			this.entity('board', function() {
				
				this.on('ready', function(_event) {
					if (!this.is(_event.target)) return;

					this.items = this.find('div');
				});

				this.render = function() {
					this.highlight(this.items[this.value-1]);
					return this;
				};
			});

			this.up = function (_count) {
				this.value+= _count || 1;

				this.board.render();

				console.log('score', this.value, this.properties.max)

				if (this.value == this.properties.max) {
					console.log('score complete');
					this.delay('1s', this.complete);
				}

				return this;
			};

			this.behavior('complete', function() {
				return {
					message: 'score'
				}
			});

			this.reset = function() {
				this.value = 0;
				this.unhighlight(this.board.items);
			};
		});

		this.respond('hit', function (_event) {
			if (_event.message === _event.behaviorTarget.id()) {
				this.score.up();
				this.playSFX('correct');
			} else {
				this.playSFX('incorrect');
			}
		});

		this.respond('next', function () {
			this.cannon.reload();
		});

		this.complete = function () {
			var r = this.proto();
			return r;
		};

		this.playSFX = function (_name) {
			var sfx;

			sfx = pl.util.resolvePath(this, 'audio.sfx.'+_name);

			if (sfx) sfx.play();

			return this;
		};

	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};

		this.on('ui-open', function() {
			if(this.audio && this.audio.sfx) {
				this.delay('11s', this.audio.sfx.play.bind(this.audio.sfx));
			}
		});
	});


});
