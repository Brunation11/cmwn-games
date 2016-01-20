pl.game.component('selectable-canvas', function () {

	var SELECTOR;

	SELECTOR = {
		CORRECT: '[pl-correct]',
		INCORRECT: '[pl-incorrect]'
	};

	this.behavior('select', function (_target) {
		var $target;

		if (this.event) {
			$target = $(this.event.target).closest('li');

			if (this.shouldSelect($target) !== false) {
				return {
					message: $target.index(),
					behaviorTarget: $target
				};
			}	
		}

		else {
			this.proto(_target);
		}

		return false;
	});

	this.shouldSelect = function (_target) {
		return !this.screen.state(this.screen.STATE.VOICE_OVER);
	};

	// function isCorrect (_element) {
	// 	var $el;

	// 	$el = _element.jquery ? _element : $(_element);

	// 	return 
	// }
	
	this.buffer = null;
	this.bctx = null;
	this.items = null;

	this.init = function () {
		this.buffer = document.createElement('canvas');
		this.bctx = this.buffer.getContext('2d');
	};

	this.ready = function () {
		var correct, $items;

		correct = pl.Queue.create();

		correct.on('complete', this.bind(function () {
			this.complete();
		}));

		this.buffer.width = this.$els.width();
		this.buffer.height = this.$els.height();

		$items = this.find('li img');

		this.items = $items
			.map(function (_index, _node) {
				var $node;

				$node = $(_node);

				if ($node.is(SELECTOR.CORRECT)) correct.add(_index);

				return $node;
			})
			.toArray();

		this.items.correct = correct;
	};

	this.isImageTarget = function (_$image, _point) {
		var offset = _$image.offset();
		this.bctx.clearRect(0,0, this.buffer.width, this.buffer.height);
		this.bctx.drawImage(_$image[0], offset.left, offset.top, _$image.width(), _$image.height());
		pixel = this.bctx.getImageData(_point.x, _point.y, 1,1);

		this.bctx.fillStyle = 'white';
		this.bctx.fillRect(_point.x, _point.y, 5,5);

		// opaque pixel
		return pixel.data[3] > 0;
	};

	this.behavior('select', function (_cursor) {
		var offset, cursor, returnValue = false;

		offset = this.$els.absolutePosition();
		cursor = this.event.cursor
			.scale(1/this.game.zoom).math('floor')
			.dec(offset);

		this.items.every(this.bind(function (_$item) {
			if (this.isImageTarget(_$item, cursor)) {
				returnValue = {
					message: _$item.parent().index(),
					behaviorTarget: _$item.parent()
				};
				return false;
			}

			return true;
		}));

		return returnValue;
	});

	this.answer = function (_$item) {

		if (_$item.is(SELECTOR.CORRECT)) {

			this.playSFX('correct');
			this.playVO(_item);

			_$item.addClass('animated fadeIn');

			this.countries.correct.ready(_item);
		}

		else {
			this.playSFX('incorrect');
			_$item.addClass('animated flash');
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
