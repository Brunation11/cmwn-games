/**
 * Index script
 * @module
 */
// import 'js-interactive-library';
import '../../../../../js-interactive-library';
import './config.game';

import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/title/behavior';
import './components/frame/behavior';
import './components/class-switcher/behavior';
import './components/reveal/behavior';
import './components/selectable/behavior';
import './components/match-game/behavior';
import './components/flip-card/behavior';
import './components/drop-responder/behavior';
import './components/dropzone/behavior';
import './components/sparkles/behavior';

pl.game('animal-id', function () {

	var showNext = function() {
		this.STATE.BACK = 'RETURN';

		this.state('return','+RETURN');

		this.on('ui-open', function(_event) {
			if(!this.is(_event.target)) return;
			if(this.state(this.STATE.COMPLETE)) this.return(this);
		});
	};

	this.screen('ios-splash', function () {
		
		this.on('ready', function (_event) {
			var shouldSplash;

			shouldSplash = this.game.hasClass('iOS');

			if(this.is(_event.target)) {
				this.close(this.game.loader);
				
				if(shouldSplash) {
					this.open();
					this.ball.delay(0, this.ball.open);
				} else {
					this.game.title.open();
				}
			}
		});

		this.entity('ball', function () {
			var sequence = 'R S G'.split(' ');

			this.on('transitionend', function (_e) {
				var state, i

				if (!this.ball.is(_e.target)) return;

				state = (state = this.ball.state(), typeof state === 'object' ? state[state.length-1] : state);
				i = sequence.indexOf(state);

				if (sequence[i+1]) this.ball.addClass(sequence[i+1]);
				
				if (sequence[i+1] === 'G') {
					this.delay('1s', function () {
						this.ball.addClass('T');
					});
				}
			}.bind(this));

			this.startGame = function() {
				if(!this.hasClass('G')) return;
				this.delay('2.5s', function() {
					this.game.addClass('STARTED');
					this.next();
				});
			};

		});

	});

	this.screen('title', function () {

		this.on('ui-open', function (_event) {
			if (this.is(_event.target)) this.title.startAudio();

			if(this.state(this.STATE.OPEN)) this.start();
		});

		this.startAudio = function () {
			this.title.audio.background.play()
		};

		this.stopAudio = function () {
			this.title.audio.background.stop();
		};

		this.entity('title', function() {
			this.on('animationend', function(_event) {
				if(!this.image.is(_event.target)) return;
				this.complete();
			});
		});

	});

	this.screen('id-carnivore', showNext);
	this.screen('id-marsupial', showNext);
	this.screen('id-rodent', showNext);
	this.screen('id-arachnid', showNext);
	this.screen('id-mammal', showNext);
	this.screen('id-mollusk', showNext);
	this.screen('id-reptile', showNext);
	this.screen('id-herbivore', showNext);

	this.screen('match-game', function() {
		this.entity('reveal', function() {
			this.handleCloseClick = function() {
				if(!this.screen.state(this.screen.STATE.VOICE_OVER) || this.game.demoMode) {
					this.closeAll();
				}
			};
		});

		this.on('ui-close', function(_event) {
			if(!this.is(_event.target)) return;
			this.reveal.closeAll();
			this.delay('.5s',this.matchGame.randomize.bind(this.matchGame));
		});
	});

	this.screen('dnd-lion', showNext);
	this.screen('dnd-sloth', showNext);
	this.screen('dnd-wolf', showNext);
	this.screen('dnd-elephant', showNext);
	this.screen('dnd-dragon', showNext);
	this.screen('dnd-pig', showNext);
	this.screen('dnd-gorilla', showNext);
	this.screen('dnd-mule', showNext);

	this.screen('flip', function () {

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
