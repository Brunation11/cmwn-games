/**
 * Defines the game scope and imports used component behaviors.
 */
import '/Users/mrolon/Development/js-interactive-library/build/play.js';

import './testPlatformIntegration';
import './config.game';

// SCREENS


// INCLUDE USED COMPONENT BEHAVIORS HERE
import './components/screen-basic/behavior';
import './components/screen-title/behavior';
import './components/screen-quit/behavior';
import './components/dropzone/behavior';
import './components/reveal/behavior';

/**
 * Define the game behavior.
 * Here we define all the screen behaviors.
 */
pl.game('twirl-n-swirl', function () {
	
	this.current = {
		playingBG: null
	};

	this.setWallpaper = function (_paper) {
		if (_paper) this.removeClass('DEFAULT TITLE PLANT').addClass(_paper.toUpperCase());
	};

	this.exit = function () {
		var screen, eventCategory;

		screen = this.findOwn(pl.game.config('screenSelector')+'.OPEN:not(#quit)').scope();
		eventCategory = (['game', this.id(), screen.id()+'('+(screen.index()+1)+')']).join(' ');

		ga('send', 'event', eventCategory, 'quit');

		return this.proto();
	};

	// Define Screen Behaviors
	this.screen('info-question', function () {
		this.next = function () {
			var nextScreen, so;

			if (!this.completed()) return;

			nextScreen = this.sup();
			so = pl.util.resolvePath(this, 'game.audio.sfx.flush');

			if (so) so.play();

			this.delay('2s', function () {
				this.leave();
				nextScreen.open();
			});

			return nextScreen;
		};
	});

	this.screen('flush-it', function () {

		this.entity('.draggables', function () {
			this.listen('mousedown', true, function (_event) {
				var $target = $(_event.target);

				if (this.state(this.STATE.DISABLED) || $target.is('[pl-draggable]') && $target.state(this.STATE.DISABLED)) {
					_event.stopPropagation();
				}
			});
		});

		this.entity('modal-reveal', function () {

			this.item = function (_id) {
				this
					.removeClass('LAYER')
					.open()
					.reveal.item(_id);
			};

			this.close = function () {
				var so = pl.util.resolvePath(this, 'game.audio.sfx.button');

				if (this.screen.state(this.STATE.VOICE_OVER) && !this.screen.completed()) return;
				if (so) so.play();

				this.screen.enable('.draggables');
				
				return this.sup();
			};

			this.on('transitionend', function (_event) {
				if (!this.is(_event.target)) return;
				if (!this.state(this.STATE.OPEN)) {
					this.addClass('LAYER');
				}
			});

		});
		
		this.respond('drop', function (_event) {
			var id = _event.behaviorTarget.id();

			this.toilet.reveal.item(id);
			this.disable('.draggables');
		});

		this.start = function () {
			this.delay('1.5s', function () {
				this.modalReveal.item(0);
			});
		};

		this.flush = function () {
			var current = this.reveal.currentItem();
			var sfx = pl.util.resolvePath(this, 'game.audio.sfx.flush');
			
			if (sfx) sfx.play();
			
			if (!current) return;

			current.addClass('FLUSH');
			this.disable($('.draggables [pl-id='+current.id()+']'));

			this.delay('2s', function () {
				this.modalReveal.item(current.id());
			});
		};

	});

	this.screen('flip', function () {
		this.complete = function (_event) {
			var eventCategory = (['game', this.game.id(), this.id()+'('+(this.index()+1)+')']).join(' ');

			ga('send', 'event', eventCategory, 'complete');

			return this.proto();
		};
	});
});
