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

pl.game('litterbug', function () {

	this.screen('title', function () {
		
		this.ready = function () {
			this.open();
			this.close($('#loader'));
		};

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
		});

	});

	this.screen('video', function() {
		this.on("ui-close", function() {
			this.video.pause();
			if(this.game.bgSound) this.game.bgSound.play();
		});
	});

	this.screen('lets-clean-up', function () {
		this.on('ui-open', function() {
			this.game.addClass('lets-clean-up');
		});

		this.on('ui-close', function() {
			this.game.removeClass('lets-clean-up');
		});
	});

	this.screen('clean-up', function () {
		this.on('ui-open', function() {
			this.game.addClass('select');
		});

		this.on('ui-close', function() {
			this.game.removeClass('select');
		});
	});

	this.screen('commit', function () {
		this.on('ui-open', function() {
			this.game.addClass('commit');
		});

		this.on('ui-close', function() {
			this.game.removeClass('commit');
		});
	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};
	});


});
