pl.game.component('selectable', function () {

	this.behavior('select', function (_target) {
		var $target, message;

		if (this.event) {
			$target = $(this.event.target).closest('li');
			message = $target.id() || $target.index();

			if (this.shouldSelect($target) !== false) {
				return {
					message,
					behaviorTarget: $target
				};
			}	
		}

		else {
			this.proto(_target);
		}

		return false;
	});

	this.shouldSelect = function (_$target) {
		return this.screen.allowAction() && _$target.is('li');
	};

	this.deselectAll = function() {
		var items = this.find('li');
		this.deselect(items);
		this.unhighlight(items);
	};

});
