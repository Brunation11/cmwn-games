/**
 * Index script
 * @module
 */
import 'js-interactive-library';
import 'config.game';

import 'components/screen-basic/behavior';
import 'components/title/behavior';
import 'components/frame/behavior';
import 'components/slides/behavior';
import 'components/multiple-choice/behavior';

pl.game('polar-bear', function () {

	this.screen('title', function () {
		
		this.ready = function () {
			this.open();
		};

		this.on('ui-open', function (_event) {
			if (this === _event.targetScope) {
				this.title.start();
			}
		});

	});

	this.screen('map', function () {

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
				var correct;

				correct = pl.Queue.create();

				correct.on('complete', this.bind(function () {
					this.complete();
					this.delay('2s', function () {
						this.next();
					});
				}));

				this.buffer.width = this.grayMap[0].naturalWidth;
				this.buffer.height = this.grayMap[0].naturalHeight;

				this.countries = this
					.find('.country')
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