pl.game.component('frame', function () {
	
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
		if (this === _event.targetScope) {
			if (!(this.hasOwnProperty('isComplete') && this.isComplete) && !(this.hasOwnProperty('requiredQueue') && (this.requiredQueue && this.requiredQueue.length))) {
				this.complete();
			}
		}
	});

});
