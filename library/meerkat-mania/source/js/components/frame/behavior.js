pl.game.component('frame', function () {

	this.on('ready', function (_event) {
		if (this.audio) {
			this.audio.rule('.voiceOver', 'shouldPlay', function (_event) {
				_event.response(!_event.target.config("dontautoplay"));
			});
		}
	});
	
	this.start = function () {
		return this.screen.start.call(this);
	};

	this.stop = function () {
		return this.screen.stop.call(this);
	};

	this.handleProperty({
		title: function (_node, _name, _value) {
			if (this.is(_node)) {
				this.find('.frame').addClass('title');
				this.game.defineRule('.experiment:nth-of-type('+(this.screen.index()+1)+') .frame-component .frame.title::before', {
					backgroundImage: 'url('+ _value +')'
				});
			}
		}
	});

	this.on('ui-open', function (_event) {
		if (this.isReady) {
			this.start();
		}

		if (this === _event.targetScope) {
			if (!(this.hasOwnProperty('isComplete') && this.isComplete) && !(this.hasOwnProperty('requiredQueue') && (this.requiredQueue && this.requiredQueue.length))) {
				this.complete();
			}
		}
	});

});
