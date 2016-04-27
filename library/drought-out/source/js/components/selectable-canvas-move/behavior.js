pl.game.component('selectable-canvas-move', function () {
	var canvas, Item, gameLoop, scale, self = this;

	gameLoop = {
		// main game loop
		frame: function (_scope) {
			// transition items one px on each frame
			_scope.items.forEach((function (_item) {
				var y, height;
				_item.position.y -= _item.speed;

				y = _item.position.y + _item.margin;
				height = _item.size.height;

				if (y + height < 0) _item.position.y = _scope.height() * 1.1;
			}));
		},
	};

	Item = pl.Basic.extend(function () {
		this.position = null;
		this.size = null;
		this.margin = 0;
		this.image = null;
		this.$image = null;
		this.left = 0;
		this.selected = false;

		this.init = function (_image) {
			this.$image = $(_image);
			this.image = _image;

			this.position = pl.Point.create();
			this.backgroundSize = [200, 200].to('size');
			this.size = [360, 460].to('size');
 
			return this;
		};

		this.render = function () {
			return {
				drawImage: [this.image, this.left, this.image.getAttribute('top') * this.image.naturalHeight / 15, this.size.width, this.size.height, this.position.x, this.position.y, this.backgroundSize.width, this.backgroundSize.height]
			};
		};

		this.hover = function() {
			if(!this.selected) this.left = this.image.naturalWidth / 3;
		};

		this.unhover = function() {
			if(!this.selected) this.left = 0;
		};

		this.select = function() {
			this.selected = true;
			this.left = this.image.naturalWidth * 2 / 3;
		};

		this.deselect = function() {
			this.selected = false;
			this.left = 0;
		};

		this.is = function (_type) {
			return $(this.image).is(_type);
		};

		this.id = function () {
			return this.$image.id();
		}
	});

	canvas = {
		
		ctx: null,
		node: null,
		content: null,
		scale: 1,

		init: function (_canvas, _size, _scale) {
			var size;

			size = _scale ? _size.scale(_scale) : _size;

			this.node = _canvas;
			this.ctx = _canvas.getContext('2d');
			this.scale = _scale || 1;

			if (!~size.indexOf(void 0)) {
				_canvas.width = size.width;
				_canvas.height = size.height;
			}

			this.ctx.scale(_scale, _scale);

			this.node.onmousemove = function(_e) {
				var offset, cursor, scale;

				scale = self.game.transformScale().x;
				offset = self.$els.absolutePosition().scale(1/scale);
				cursor = pl.Point.create().set(_e.x,_e.y)
					.scale(scale/self.game.zoom)
					.dec(offset)
					.math('floor');

				self.items.every(function (_item) {
					if (!_item.selected && self.isImageTarget(_item, cursor)) {
						_item.hover();
						return false;
					}

					_item.unhover();
					return true;
				});
			};
		},

		resize: function (_size, _scale) {
			var size;

			size = _scale ? _size.scale(_scale) : _size;

			this.node.width = size.width;
			this.node.height = size.height;
			this.scale = _scale || 1;

			this.ctx.scale(_scale, _scale);
		},

		clear: function () {
			this.ctx.clearRect(0,0, this.node.width/this.scale, this.node.height/this.scale);
		},

		draw: function (_obj) {
			var commands, cmd;

			commands = _obj.render();

			for (cmd in commands) {
				if (typeof this.ctx[cmd] !== 'function') continue;
				this.ctx[cmd].apply(this.ctx, commands[cmd]);
			}
		}
	};

	this.items = null;
	this.player = null;
	this.canvas = null;
	this.buffer = null;
	this.bctx = null;
	this.isRunning = false;

	this.init = function () {
		this.buffer = document.createElement('canvas');
		this.bctx = this.buffer.getContext('2d');
	};

	// Handle when the component scope is ready.
	this.on('ready', function (_event) {
		var canvasSize, width, height;

		// Do not handle child scopes becoming ready.
		if (!this.is(_event.target)) return;

		this.buffer.width = width = this.width();
		this.buffer.height = height = this.height();

		this.items = this.bin.find('img')
			.map(function (_i, _node) {
				var item = Item.create().init(_node);

				item.position.x = 40 + (120 * _i % (width - 280));
				item.position.y = height + (250 * _i % (2 * height));
				item.speed = ((_i * 5) % 3 + 2) / 2;

				return item;
			})
			.toArray();

		canvasSize = pl.Size
			.create()
			.set(width, height);

		canvas.init(this.canvas[0], canvasSize, this.game.zoom);

		this.game.viewport.onResize(this.game.bind(function () {
			canvas.resize(canvasSize, this.zoom);
		}));
	});

	this.start = function () {
		this.isRunning = true;
		this.eachFrame(this.onEachFrame);

		this.items.every(function (_item) {
			_item.deselect();
		});
	};

	this.stop = function () {
		this.eachFrame(this.onEachFrame, false);
	};

	this.onEachFrame = function () {
		if (!this.isRunning) return;

		canvas.clear();

		gameLoop.frame(this);

		this.items.forEach(function (_item) {
			canvas.draw(_item);
		});
	};

	this.isImageTarget = function (_item, _point) {
		this.bctx.clearRect(0, 0, this.buffer.width, this.buffer.height);
		this.bctx.drawImage(_item.image, 0, _item.image.getAttribute('top') * _item.image.naturalHeight / 15, _item.size.width, _item.size.height, _item.position.x, _item.position.y, _item.backgroundSize.width, _item.backgroundSize.height);
		pixel = this.bctx.getImageData(_point.x, _point.y, 1,1);

		this.bctx.fillStyle = 'white';
		this.bctx.fillRect(_point.x, _point.y, 5,5);

		// opaque pixel
		return pixel.data[3] > 0;
	};

	this.behavior('select', function (_cursor) {
		var offset, cursor, scale, returnValue = false;

		scale = this.game.transformScale().x;
		offset = this.$els.absolutePosition().scale(1/scale);
		cursor = this.event.cursor
			.scale(scale/this.game.zoom)
			.dec(offset)
			.math('floor');

		this.items.every(function (_item) {
			if(!_item.selected && self.isImageTarget(_item, cursor)) {
				_item.select();
				returnValue = {
					message: _item.$image.id(),
					behaviorTarget: _item.$image
				};
				return false;
			}

			return true;
		});

		return returnValue;
	});

});
