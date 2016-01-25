/**
 * Index script
 * @module
 */
import './testPlatformIntegration';
import 'js-interactive-library';
import './config.game';

import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/title/behavior';
import './components/frame/behavior';
import './components/score/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-all/behavior';
import './components/selectable-reveal/behavior';
import './components/slides/behavior';

pl.game('fire', function () {

	this.screen('title', function () {
		
		this.on('ui-open', function (_event) {
			if (this === _event.targetScope) {
				this.title.start();
			}
		});

		this.on('ready', function (_event) {
			// Screens are display:none then when READY get display:block.
			// When a screen is OPEN then it transitions a transform,
			// the delay is to prevent the transition failing to play
			// because of collision of these styles.
			// 
			if (this.is(_event.target)) this.delay(0, this.open);
			this.close(this.game.loader);
		});

	});

	this.screen('who', function() {
		
		this.entity('slides', function () {
			
			this.entity('mc-frame', function () {
				
				this.respond('answer', function(_event) {
					if(this.audio.voiceOver[_event.message]) this.audio.voiceOver[_event.message].play();

					if(_event.message === this.properties.answer) {
						this.delay('1s', function() {
							this.screen.next();
						});
					}
				});
			});
		});
	});

	this.screen('triangle', function() {
		var characters = [];
		/**
		 * Nodes, including the node of this screen, with a
		 * attribute of pl-bg will get a background-image style
		 * and the resource preloaded and collected for watching.
		 */
		this.handleProperty({
			bg: function (_node, _name, _value) {
				var img = new Image();

				img.src = _value;
				characters.push(img);
				$(_node).css('background-image', 'url('+_value+')');
			}
		});

		this.entity('dropzone', function () {
		
			this.entity('.area', function () {

				this.cache = null;

				this.respond('grab', function () {
					this.audio.sfx.drag.play();
					this.cache = {
						position: this.absolutePosition(),
						size: this.size()
					};
				});
				
				this.respond('release', function (_event) {
					if (_event.state.progress.point && this.isPointInBounds(_event.state.progress.point)) {

						if(this.audio.voiceOver[_event.state.$draggable.id()]) this.audio.voiceOver[_event.state.$draggable.id()].play();

						if (this.takes(_event.state.$draggable.id())) {
							_event.state.$draggable.removeClass('PLUCKED').addClass('COMPLETE').attr('pl-draggable',null);
							_event.state.$helper.addClass('DROPED');
							
							this.drop(_event.state.$draggable);
							if(this[_event.state.$draggable.id()]) this[_event.state.$draggable.id()].addClass('show');
							if(this[_event.state.$draggable.id()+'Side']) this[_event.state.$draggable.id()+'Side'].addClass('show');
							if(this.isComplete) {
								this.audio.sfx.complete.play();
							} else {
								this.audio.sfx.correct.play();
							}
							
							return;
						}

						else {
							this.audio.sfx.incorrect.play()
						}

					}

					_event.state.$helper.addClass('RETURN').css('transform', 'translateX(0px) translateY(0px)');
				});
			});

			this.on('ready', function() {
				if(this.audio && this.audio.voiceOver && this.audio.voiceOver.title) {
					this.audio.voiceOver.title.onended = function() {
						if(this.audio.voiceOver.directions) this.audio.voiceOver.directions.play();
					}.bind(this);
				}
			});
		});
	});

	this.screen('dress', function() {

		var characters = [];
		/**
		 * Nodes, including the node of this screen, with a
		 * attribute of pl-bg will get a background-image style
		 * and the resource preloaded and collected for watching.
		 */
		this.handleProperty({
			bg: function (_node, _name, _value) {
				var img = new Image();

				img.src = _value;
				characters.push(img);
				$(_node).css('background-image', 'url('+_value+')');
			}
		});

		this.respond('select', function(_event) {
			// this removes any screen class that starts with the same thing as the event message
			// and then adds the event message as a class to the screen
			var regexp = new RegExp("(^|\\s)"+_event.message.split("-")[0]+"-\\S+");
			this.screen.removeClass(function(index, className) {
				return (className.match(regexp) || []).join(' ');
			}).addClass(_event.message);
			this.screen.next();
		});

		this.entity('slides', function() {

			this.entity('need', function() {
				
				this.entity('dropzone', function () {
				
					this.entity('.area', function () {

						this.cache = null;

						this.respond('grab', function () {
							this.audio.sfx.drag.play();
							this.cache = {
								position: this.absolutePosition(),
								size: this.size()
							};
						});
						
						this.respond('release', function (_event) {
							if (_event.state.progress.point && this.isPointInBounds(_event.state.progress.point)) {

								if(this.audio.voiceOver[_event.state.$draggable.id()]) this.audio.voiceOver[_event.state.$draggable.id()].play();

								if (this.takes(_event.state.$draggable.id())) {
									_event.state.$draggable.removeClass('PLUCKED').addClass('COMPLETE').attr('pl-draggable',null);
									_event.state.$helper.addClass('DROPED');
									
									this.drop(_event.state.$draggable);
									this.find('.'+_event.state.$draggable.id()).addClass('show');
									this.audio.sfx.correct.play();
									
									return;
								}

								else {
									this.audio.sfx.incorrect.play()
								}

							}

							_event.state.$helper.addClass('RETURN').css('transform', 'translateX(0px) translateY(0px)');
						});
					});
				});

				this.respond('drop', function(_event) {
					this.reveal.item(_event.message);
				});
			});
		});
	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};
	});


});
