pl.game.component('selectable-remove', function () {
	
	this.behavior('select', function (_target) {
		var $target;

		if (this.event && !_target) {
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

	this.respond('select', function (_event) {
		var index, stateMethod;

		index = _event.message;
		stateMethod = this.properties.select_state || 'select';

		if (~index) {
			this[stateMethod](_event.behaviorTarget);
			this.items.correct.remove(_event.behaviorTarget);
		}
	});

	this.shouldSelect = function (_target) {
		return true;
	};


	this.ready = function () {
		var correct;

		correct = pl.Queue.create();

		correct.on('complete', this.bind(function () {
			this.complete();
		}));

		this.items = this
			.find('.items li')
			.map(function (_index, _node) {
				correct.add(_index);
				return _index;
			})
			.toArray();

		this.items.correct = correct;
	};

});