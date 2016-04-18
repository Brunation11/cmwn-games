/**
 * Index script
 * @module
 */
import 'js-interactive-library';
// import '../../../../../js-interactive-library';
import './config.game';

// SCREENS
import multiBubbles from './screens/multi-bubbles';
import trash from './screens/trash';

// COMPONENTS
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/bubbles/behavior';
import './components/score/behavior';
import './components/timer/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-reveal/behavior';
import './components/audio-sequence/behavior';
import './components/modal/behavior';

pl.game('happy-fish-face', function () {

	var garbage = function() {
		this.on('ui-open', function() {
			this.game.addClass('garbage');
		});

		this.on('ui-close ui-leave', function() {
			this.game.removeClass('garbage');
		});
	};

	this.screen('title', function () {

		this.on('ready', function (_event) {
			// Screens are display:none then when READY get display:block.
			// When a screen is OPEN then it transitions a transform,
			// the delay is to prevent the transition failing to play
			// because of collision of these styles.
			// 
			if (this.is(_event.target)) {
				this.delay(0, function() {
					this.open();
					this.close(this.game.loader);
				});
			}
		});

		this.entity('.fish', function() {
			this.on('animationend', function(_event) {
				if(!this.is(_event.target) || !this.screen.allowAction()) return;
				this.complete();
			});
		});
	});

	this.screen('you-feel', function() {
		garbage.call(this);

		this.respond('select', function (_event) {
			var id, stateMethod;

			id = _event.message;
			stateMethod = this.properties.selectState || 'select';

			if(id != null) {
				this.audio.sfx.play(id);
				this[stateMethod](_event.behaviorTarget);
				this.requiredQueue.ready('select');
			}
		});

		this.on('ready', function(_event) {
			if (!this.is(_event.target)) return;
			this.require('select');
		});
	});

	this.screen('water-pollution', garbage);

	this.screen('healthy-water', function() {
		garbage.call(this);

		this.entity('multiple-choice', function() {
			this.validateAnswer = function() {
				var answers;

				if (this.properties.correct) {
					answers = this.properties.correct.split(/\s*,\s*/);

					if (~answers.indexOf(String(this.getSelected().id()))) {
						this.audio.sfx.correct.play();
						this.complete();
					} else {
						this.audio.sfx.incorrect.play();
					}
				}

				return false;
			};
		});
	});

	this.screen('clean-water', garbage);

	this.screen('multi-bubbles', multiBubbles);

	this.screen('trash', trash);

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};
	});


});
