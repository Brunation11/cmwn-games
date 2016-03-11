pl.game.component('selectable-all', function () {

	var Column;

	function populateViewport () {
		var width, item, i, columns;

		// width of the first item
		width = this.$bin.outerWidth(true);
		columns = Math.floor(this.$viewport.width() / width);

		for (i=0; i < columns; i+=1) {
			this.columns.push(Column.create().init(this.$bin, this.$viewport));
		}
	}

	Column = pl.Basic.extend(function () {

		this.$el = null;
		this.$collection = null;
		this.$viewport = null;
		this.shouldRecycle = true;

		this.init = function (_$collection, _$viewport) {
			this.$collection = _$collection;
			this.$viewport = _$viewport;
			this.$el = $(pl.util.random(_$collection)).clone();

			this.$viewport.append(this.$el);

			return this;
		};
		
		this.recycle = function () {
			var $clone;

			if (!this.shouldRecycle) return;

			$clone = $(pl.util.random(this.$collection)).clone();

			this.$el.replaceWith($clone);
			this.$el = $clone;

			setTimeout(this.bind(function () {
				this.launch();
			}), 0);

			return $clone;
		};

		this.launch = function () {
			this.$el.on('transitionend', this.bind(function (_event) {
				if(!this.$el.is(_event.target)) return;

				if (!this.recycle()) {
					this.$el.off();
				}
			}));

			this.$el.addClass('LAUNCHED');
		};

		this.bind = function (_fun) {
			var self = this;
			return function () {
				return _fun.apply(self, arguments);
			};
		}

	});

	this.$viewport = null;
	this.$bin = null;
	this.columns = null;
	this.count = 0;
	
	this.init = function () {
		this.$viewport = this.find('.viewport');
		this.$bin = this.find('.bin li');
		this.columns = [];

		populateViewport.call(this);

		$(window).on('resize', this.restart.bind(this));

		return this;
	};

	this.start = function () {
		this.columns.forEach(function (_item) {
			_item.launch();
		});

		this.screen.requiredQueue.ready();
	};

	this.restart = function() {
		this.columns.forEach(function (_item) {
			_item.recycle();
		});
	};

	this.stop = function () {
		this.columns.forEach(function (_item) {
			_item.shouldRecycle = false;
			_item.$el.removeClass('LAUNCHED').css('transition', 'none');
		});
	};

	this.behavior('pick', function (_$target) {
		var message = this.count;

		if (_$target.attr('pl-correct') == null || this.screen.isComplete || this.screen.state(this.STATE.VOICE_OVER)) return;

		this.screen.requiredQueue.ready(this.count);
		this.screen.reveal.item(this.count);

		this.audio.sfx.play();

		this.count++;

		this.highlight(_$target);

		return {
			message: message,
			behaviorTarget: _$target
		};
	});

});
