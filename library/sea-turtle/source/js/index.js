/**
 * Defines the game scope and imports used component behaviors.
 */
import 'js-interactive-library';

import './testPlatformIntegration';
import './config.game';

// INCLUDE USED COMPONENT BEHAVIORS HERE
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
		
		this.on('ready', function (_event) {
			// Screens are display:none then when READY get display:block.
			// When a screen is OPEN then it transitions a transform,
			// the delay is to prevent the transition failing to play
			// because of collision of these styles.
			// 
			if (this.is(_event.target)) this.delay(0, this.open);
		});

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
		
		var characters;

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
				(this.$active = _event.state.$draggable.closest('li')).addClass('ACTIVE');
			});

			this.on('initialize', function () {
				// Add a vanilajs event listener attached to the capture event propagation phase.
				this.listen('mousedown', true, this.bind(preventDrag));
			});

			this.respond('answer', function (_event) {
				if (_event.message === 'correct') {
					this.disable(
						this.$active.removeClass('ACTIVE')
					);
					this.enable();
				}
			});

		});

		this.handleProperty({
			bg: function (_node, _name, _value) {
				var img = new Image();

				img.src = _value;
				characters.push(img);
				$(_node).css('background-image', 'url('+_value+')');
			}
		});

		this.on('initialize', function (_event) {
			if (!this.is(_event.targetScope)) return;
			this.watchAssets(characters);
		});

		this.respond('drop', function (_event) {
			var $character;

			$character = _event.behaviorTarget;

			this.log('reveal', $character.index());
			this.reveal.item($character.index()+1);
		});

	});

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
