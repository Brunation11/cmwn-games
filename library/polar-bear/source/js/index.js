/**
 * Index script
 * @module
 */
import './config.game';

import '../../../shared/js/screen-ios-splash';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/title/behavior';
import './components/frame/behavior';
import './components/slides/behavior';
import './components/carousel/behavior';
import './components/score/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-reveal/behavior';
import './components/cannon/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

pl.game('polar-bear', function () {

	var resetMultipleChoice = function() {
		this.on('ui-open', function(_e) {
			if(!this.is(_e.target)) return;

			if(this.isComplete) this.deselect(this.find('.'+this.STATE.SELECTED));
		});
	};

	this.screen('title', function () {
		this.on('ready', function(_event) {
			if(!this.is(_event.target)) return;

			if(this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
		});

		this.startAudio = function () {
			this.title.audio.background.play();
			this.title.audio.voiceOver.play();
		};

		this.stopAudio = function () {
			this.title.audio.voiceOver.stop('@ALL');
		};
	});

	this.screen('what-color', function() {
		this.entity('slides', function() {
			this.entity('mc', resetMultipleChoice);
		});
	});

	this.screen('map', function () {

		this.entity('slides', function () {
			
			this.entity('.map-entity', function () {

				var SELECTOR;

				function isCorrect (_element) {
					var $el;

					$el = _element.jquery ? _element : $(_element);

					return 
				}

				SELECTOR = {
					CORRECT: '[pl-correct]',
					INCORRECT: '[pl-incorrect]'
				};
				
				this.buffer = null;
				this.bctx = null;
				this.countries = null;

				// images
				this.grayMap = null;
				this.iceland = null;
				this.russia = null;
				this.northPole = null;
				this.greenland = null;
				this.denmark = null;
				this.norway = null;
				this.canada = null;
				this.usa = null;
				this.sweden = null;
				this.finland = null;

				this.init = function () {
					this.buffer = document.createElement('canvas');
					this.bctx = this.buffer.getContext('2d');
				};

				this.ready = function () {
					var correct, $countries;

					correct = pl.Queue.create();

					correct.on('complete', this.bind(function () {
						var sfx = pl.util.resolvePath(this, 'game.audio.sfx.screenComplete');
						if (sfx) sfx.play();
						this.complete();
					}));

					this.buffer.width = 500;
					this.buffer.height = 500;

					$countries = this.find('.country');

					$countries
						.not(SELECTOR.CORRECT)
						.on('animationend', function () {
							$(this).removeClass('flash').addClass('fadeIn');
						});

					this.countries = $countries
						.map(function (_index, _node) {
							var $node, id;

							$node = $(_node);
							id = pl.util.transformId($node.id(), true);

							if ($node.is(SELECTOR.CORRECT)) correct.add(id);

							return id;
						})
						.toArray();

					this.countries.correct = correct;

				};

				this.isImageTarget = function (_image, _point) {
					this.bctx.clearRect(0,0, this.buffer.width, this.buffer.height);
					this.bctx.drawImage(_image[0], 0,0, _image.width(), _image.height());
					pixel = this.bctx.getImageData(_point.x, _point.y, 1,1);

					this.bctx.fillStyle = 'white';
					this.bctx.fillRect(_point.x, _point.y, 5,5);

					// opaque pixel
					return pixel.data[3] > 0;
				};

				this.test = function (_cursor) {
					var offset, cursor, pixel, gameScale;

					if(!this.screen.allowAction()) return false;

					offset = this.grayMap.absolutePosition();
					gameScale = this.game.transformScale().x;
					
					// FireFox uses transfom scale which
					// does NOT produce scaled DOM values like `zoom`.
					if (gameScale !== 1) {
						cursor = _cursor
							.dec(offset)
							.scale(1/this.game.zoom)
							.math('floor');
					} else {
						cursor = _cursor
							.scale(1/this.game.zoom)
							.math('floor')
							.dec(offset);
					}

					this.countries.every(this.bind(function (_country) {
						if (this.isImageTarget(this[_country], cursor)) {
							this.answer( _country);
							return false;
						}

						return true;
					}));
				};

				this.answer = function (_country) {
					var $country, index;

					$country = this[_country];

					if ($country.is(SELECTOR.CORRECT)) {

						this.playSFX('correct');
						this.playVO(_country);

						$country.addClass('animated fadeIn');

						if(!this.state('COMPLETE')) this.countries.correct.ready(_country);
					}

					else {
						this.playSFX('incorrect');
						$country.addClass('animated flash');
					}
				};

				this.playSFX = function (_answer) {
					var sfx;

					sfx = pl.util.resolvePath(this, 'audio.sfx.'+_answer);

					if (sfx) sfx.play();

					return sfx;
				};

				this.playVO = function (_name) {
					var vo;

					vo = pl.util.resolvePath(this, 'audio.voiceOver.'+_name);

					if (vo) vo.play();

					return vo;
				};

				this.on('ui-open', function(_e) {
					if(!this.is(_e.target)) return;

					if(this.isComplete) {
						this.find('.fadeIn').removeClass('fadeIn');
					}
				});
			});

		});

	});

	this.screen('bears', function () {

		this.start = function (_event) {
			this.proto();
			this.carousel.start();
		};

		this.stop = function () {
			this.carousel.stop();
		};

		this.on('ui-select', function (_event) {
			if (_event.targetScope === this.reveal) {
				this.reveal.delay('1s', function () {
					var $selected;

					$selected = this.getSelected();

					this.close();
					$selected
						.addClass('animated slideOutUp')
						.on('animationend', function () {
							$selected.removeClass('slideOutUp');
							$selected.off();
						});
				});
				
			}
		});

		this.on('ui-open', function(_event) {
			if(!this.is(_event.target)) return;
			this.carousel.start();

			if(this.isComplete) this.score.reset();
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

		this.respond('hit', function (_event) {
			if (_event.message === _event.behaviorTarget.id()) {
				this.score.up();
				this.playSFX('correct');
			}

			else {
				this.playSFX('incorrect');
			}

			this.reveal.item(_event.behaviorTarget.id());
		});

		this.respond('next', function () {
			this.cannon.ball.reload();
		});

		this.playSFX = function (_name) {
			var sfx;

			sfx = pl.util.resolvePath(this, 'audio.sfx.'+_name);

			if (sfx) sfx.play();

			return this;
		};

	});

	this.screen('experiment-hands', resetMultipleChoice);
	this.screen('experiment-why-warmer', resetMultipleChoice);
	this.screen('experiment-how-warmer', resetMultipleChoice);

	this.screen('experiment-discover', function() {
		this.on('ui-open', function(_e) {
			if(!this.is(_e.target)) return;

			this.unhighlight(this.find('.'+this.STATE.HIGHLIGHTED));
		});

		this.respond('select', function (_event) {
			var id = _event.message;

			if (id) {
				this.highlight(_event.behaviorTarget);
				this.audio.voiceOver[id].play();
			}
		});

		this.entity('selectable', function() {
			this.behavior('select', function (_target) {
				var $target;

				if (this.event) {
					$target = $(this.event.target).closest('li');

					if (this.shouldSelect($target) !== false) {
						return {
							message: $target.id(),
							behaviorTarget: $target
						};
					}	
				}

				else {
					this.proto(_target);
				}

				return false;
			});
		});
	});

	this.screen('flip', function () {

		this.complete = function (_event) {
			var eventCategory = (['game', this.game.id(), this.id()+'('+(this.index()+1)+')']).join(' ');

			ga('send', 'event', eventCategory, 'complete');

			return this.proto();
		};

	});

	this.exit = function () {
		var screen, eventCategory;

		screen = this.findOwn(pl.game.config('screenSelector')+'.OPEN:not(#quit)').scope();
		eventCategory = (['game', this.id(), screen.id()+'('+(screen.index()+1)+')']).join(' ');

		ga('send', 'event', eventCategory, 'quit');

		return this.proto();
	};

});
