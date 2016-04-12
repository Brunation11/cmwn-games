/**
 * Defines the game scope and imports used component behaviors.
 */
// import 'js-interactive-library';
import '../../../../../js-interactive-library';

import './config.game';

// INCLUDE USED COMPONENT BEHAVIORS HERE
import '../../../shared/js/screen-ios-splash';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/title/behavior';
import './components/video/behavior';
import './components/frame/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable-all/behavior';
import './components/selectable-remove/behavior';
import './components/dropzone/behavior';

// Sea Turtle game scope.
// This selects the element `#sea-turtle`.
// 
pl.game('sea-turtle', function () {

	/**
	 * Make the title screen auto display when its ready.
	 * @override
	 */
	this.screen('title', function () {
		
		this.on('ready', function(_event) {
			if(!this.is(_event.target)) return;

			if(this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
		});

		this.startAudio = function () {
			this.title.audio.background.play();
			this.title.audio.voiceOver.play();
		};

		this.stopAudio = function () {
			this.title.audio.voiceOver.stop('@ALL');
		};

	});

	this.screen('video', function () {
		
		this.on('ui-open', function() {
			this.video.start();
		});

		this.on('ui-close', function() {
			this.video.pause();
		});

	});

	this.screen('globe', function () {
		
		var restAnimation, onClose;

		restAnimation = 'bounce';

		this.entity('characters', function () {
			/**
			 * Responds to the "mousedown" event on the capture phase
			 * to prevent propagation of the event.
			 *
			 * This will prevent the draggables inside to not be
			 * draggable when the draggable or the container (this)
			 * has the DISABLED UIState.
			 */
			function preventDrag (_event) {
				var $target, isDisabled;

				$target = $(_event.target);
				isDisabled = [
					this.state(this.STATE.DISABLED),
					$target.state(this.STATE.DISABLED)
				];

				if (~isDisabled.indexOf(true)) {
					_event.stopPropagation();
				}
			}

			this.$active = null;
			
			this.on('drag-start', function (_event) {
				(this.$active = _event.state.$draggable.closest('li'))
					.addClass('ACTIVE');
			});

			this.on('initialize', function () {
				var eventName = typeof this.$els[0].ontouchstart !== 'undefined' ? 'touchstart' : 'mousedown';
				// Add a vanilajs event listener attached to the capture event propagation phase.
				this.listen(eventName, true, preventDrag.bind(this));
			});

			this.respond('answer', function (_event) {
				if (_event.message === 'correct') {
					this.disable(this.$active.removeClass('ACTIVE'));
				}
			});

		});
		
		/**
		 * The reveal component holds the correct/incorrect splash
		 * images. So its responsible for handling the multiple
		 * choice "answer" behavior by displaying the
		 * "correct" or "incorrect" image.
		 */
		this.entity('reveal', function () {
			
			this.respond('answer', function (_event) {
				var message, playing;

				message = this[_event.message];
				playing = this.audio.playing();

				if (message && !this.isComplete) {
					this.select(message);
					this.delay('2s', function() {
						this.deselect(message);
					});
					
					if (playing) playing.stop();

					this.delay('2.5s', function () {
						if(this.wellDone.state(this.STATE.SELECTED)) return;
						this.reveal.item('instruction');
						this.characters.enable();
					});
				}
			});

		});

		this.STATE.COMPLETE = "COMPLETE";

		/**
		 * When the screen has initialized, start watching the
		 * background images we collected.
		 */
		this.on('initialize', function (_event) {
			if (!this.is(_event.targetScope)) return;
			this.area = this.find('.area');
		});

		/**
		 * When the character is droped, reveal the question.
		 */
		this.respond('drop', function (_event) {
			var $character, sfx;

			$character = _event.behaviorTarget.parent();
			sfx = pl.util.resolvePath(this, 'dropzone.audio.sfx.drop');

			this.area.find('div:eq('+$character.index()+')').addClass('show active');
			this.reveal.item($character.index()+1);

			this.characters.disable();
			this.deselect(this.reveal.find('img.response'));

			if (sfx) sfx.play();
		});

		this.respond('missed', function (_event) {
			_event.behaviorTarget.parent().removeClass('ACTIVE');
		});

		this.respond('answer', function (_event) {
			var sfx;

			sfx = pl.util.resolvePath(this, 'audio.sfx.'+_event.message);

			if (sfx) sfx.play();

			if(_event.targetScope.state(this.STATE.COMPLETE)) {
				this.area.find('div.active').removeClass('active');
			}
		});

		this.respond('complete', function (_event) {
			if (this.reveal.is(_event.targetScope)) {
				this.reveal.item('wellDone');
				this.audio.sfx.complete.play();
			}
		});

		onClose = function(_event) {
			if(!this.is(_event.target)) return;
			this.area.find('.active').removeClass('show active');
			if(this.characters.$active) this.characters.$active.removeClass('ACTIVE');
			this.characters.enable();
		};

		this.on('ui-close', onClose);

		this.on('ui-leave', onClose);

		this.start = function () {
			// take advantage of the screen's start()
			this.proto();
			this.reveal.item(0);
		};

	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};

		this.complete = function (_event) {
			var eventCategory = (['game', this.game.id(), this.id()+'('+(this.index()+1)+')']).join(' ');

			ga('send', 'event', eventCategory, 'complete');

			return this.proto();
		};
	});

	this.exit = function () {
		var screen, eventCategory;

		screen = this.findOwn(pl.game.config('screenSelector')+'.OPEN:not(#quit)').scope();
		eventCategory = (['game', this.id(), screen.id()+'('+(screen.index()+1)+')']).join(' ');

		ga('send', 'event', eventCategory, 'quit');

		return this.proto();
	};

	/**
	 * Creates a style noded with the given style definition and selector.
	 * @arg {string} _selector - The CSS selector for the rule.
	 * @arg {object} _def - Literal with the rule props.
	 * @returns {string} The generated CSS.
	 *
	 * @todo Move to JS-Lib. Make sure new rules get added the same node.
	 */
	this.defineRule = function (_selector_scope, _selector_def, _definition) {
		var _scope, _selector, source, prop, value;
		// Resolve arguments.
		_selector_scope.$els ? // (A) if we are a scope
			(_scope = _selector_scope, // assign scope arg...
			typeof _selector_def === 'string' ? // ...also, (B) if arg 2 is a string
				_selector = _scope.address() + _selector_def: // assing selector arg with scope address:
				(_selector = _scope.address(), _definition = _selector_def)): // (B) otherwise, assign selector arg to scope address, also assing definition arg
			(_selector = _selector_scope, _definition = _selector_def); // (A) otherwise, assing selector and definition args.

		source = _selector+' {';

		for (prop in _definition) {
			if (!_definition.hasOwnProperty(prop)) continue;
			value = _definition[prop];
			source += prop.replace(/([A-Z]+)/g, '-$1').toLowerCase()+': '+value+';'
		}

		source += '}'

		$('<style type="text/css" class="dynanic-styles">'+source+'</style>')
			.appendTo(document.body);

		return source;
	};

});
