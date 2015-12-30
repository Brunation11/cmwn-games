pl.game.component('match-game', function () {

	this.shouldSelect = function(_$target) {
		return !_$target.hasClass(this.STATE.HIGHLIGHTED) && !_$target.parent().hasClass('show-all');
	};

	this.start = function() {
		var $items, self = this;
		
		$items = this.find('.items').addClass('show-all');

		setTimeout(function() {
			$items.removeClass('show-all');
		}, 5000);

		this.$currentCard = null;

		this.find('li').each(function() {
			self.unhighlight($(this));
		});
	};

	this.showSelect = function(_$target) {
		var stateMethod, undoStateMethod;

		stateMethod = this.properties.selectState || 'select';
		if(stateMethod === 'select') undoStateMethod = 'deselect';
		if(stateMethod === 'highlight') undoStateMethod = 'unhighlight';

		if (_$target) {
			this[stateMethod](_$target);

			if(!this.$currentCard) {
				this.$currentCard = _$target;
			}

			else if(this.$currentCard.id() === _$target.id()) {
				this.$currentCard = null;
				return true;
			}

			else {
				setTimeout(function() {
					this[undoStateMethod](_$target);
					this[undoStateMethod](this.$currentCard);
					this.$currentCard = null;
				}.bind(this), 1000);
			}
		}

		return false;
	};

});