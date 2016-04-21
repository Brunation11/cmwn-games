/**
 * Defines the game scope and imports used component behaviors.
 */
import './config.game';

// SCREENS
import infoQuestion from './screens/info-question';
import flushIt from './screens/flush-it';

// INCLUDE USED COMPONENT BEHAVIORS HERE
import '../../../shared/js/screen-ios-splash';
import './components/screen-basic/behavior';
import './components/screen-title/behavior';
import './components/screen-quit/behavior';
import './components/dropzone/behavior';
import './components/reveal/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

/**
 * Define the game behavior.
 * Here we define all the screen behaviors.
 */
pl.game('twirl-n-swirl', function () {
	/**
	 * Interface for changing the game background image.
	 */
	this.setWallpaper = function (_paper) {
		// I would have defined a state method for this but for some reason
		// I didnt make Game objects inherit from Entities.
		if (_paper) this.removeClass('DEFAULT TITLE PLANT').addClass(_paper.toUpperCase());
	};

	// Define Screen Behaviors
	this.screen('info-question', infoQuestion);
	this.screen('flush-it', flushIt);
	/**
	 * Adds Flip screen behavior to send game completion to GA.
	 */
	this.screen('flip', function () {
		/**
		 * @override
		 */
		this.complete = function (_event) {
			var eventCategory = (['game', this.game.id(), this.id()+'('+(this.index()+1)+')']).join(' ');

			ga('send', 'event', eventCategory, 'complete');

			return this.proto();
		};

		this.next = function () {
			this.game.quit.okay();
		};
	});

	/**
	 * When the game exits submit a GA (Google Analytics) event.
	 * @override
	 */
	this.exit = function () {
		var screen, eventCategory;

		screen = this.findOwn(pl.game.config('screenSelector')+'.OPEN:not(#quit)').scope();
		eventCategory = (['game', this.id(), screen.id()+'('+(screen.index()+1)+')']).join(' ');

		ga('send', 'event', eventCategory, 'quit');

		return this.proto();
	};
});
