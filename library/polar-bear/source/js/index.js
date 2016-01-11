/**
 * Index script
 * @module
 */
import 'testPlatformIntegration';
import 'js-interactive-library';
import 'config.game';

import 'components/screen-basic/behavior';
import 'components/screen-quit/behavior';
import 'components/title/behavior';
import 'components/snow/behavior';
import 'components/frame/behavior';
import 'components/slides/behavior';
import 'components/carousel/behavior';
import 'components/score/behavior';
import 'components/reveal/behavior';
import 'components/multiple-choice/behavior';
import 'components/selectable/behavior';
import 'components/selectable-reveal/behavior';
import 'components/cannon/behavior';

pl.game('polar-bear', function () {

	this.screen('title', function () {
		
		this.ready = function () {
			this.open();
		};

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
						this.complete();
						this.delay('2s', function () {
							this.screen.next();
						});
					}));

					this.buffer.width = this.grayMap[0].naturalWidth;
					this.buffer.height = this.grayMap[0].naturalHeight;

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
					var offset, cursor, pixel;

					offset = this.grayMap.absolutePosition();
					cursor = _cursor
						.scale(1/this.game.zoom).math('floor')
						.dec(offset);

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

						this.countries.correct.ready(_country);
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
		}

		this.on('ui-select', function (_event) {
			if (_event.targetScope === this.reveal) {
				this.reveal.delay('2s', function () {
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

		this.on('ui-open', function() {
			this.carousel.start();
			this.incomplete();
			this.score.incomplete();
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

		this.complete = function () {
			var r = this.proto();

			if(this.score.isComplete) this.delay('2s', this.next);
			
			return r;
		};

		this.playSFX = function (_name) {
			var sfx;

			sfx = pl.util.resolvePath(this, 'audio.sfx.'+_name);

			if (sfx) sfx.play();

			return this;
		};

	});

	this.defineRule = function (_selector_scope, _selector_def, _definition) {
		var _scope, _selector, source, prop, value;
		// Resolve arguments.
		_selector_scope.$els ? // (A) if we are a scope
			(_scope = _selector_scope, // assign scope arg...
			typeof _selector_def === 'string' ? // ...also, (B) if arg 2 is a string
				_selector = _scope.address() + _selector_def: // assing selector arg with scope address:
				(_selector = _scope.address(), _definition = _selector_def)): // (B) otherwise, assign selector arg to scope address, also assing definition arg
			(_selector = _selector_scope, _definition = _selector_def); // (A) otherwise, assing selector and definition args.

		source = _selector+' {';

		for (prop in _definition) {
			if (!_definition.hasOwnProperty(prop)) continue;
			value = _definition[prop];
			source += prop.replace(/([A-Z]+)/g, '-$1').toLowerCase()+': '+value+';'
		}

		source += '}'

		$('<style type="text/css" class="dynanic-styles">'+source+'</style>')
			.appendTo(document.body);

		return source;
	};

});

document.domain = 'changemyworldnow.com';
