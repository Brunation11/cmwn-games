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
// import './components/frame/behavior';
import './components/score/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-all/behavior';
import './components/selectable-reveal/behavior';

pl.game('be-bright', function () {

	this.screen('title', function () {

	});

	this.screen('video', function() {
		this.on("ui-close", function() {
			this.video.pause();
			if(this.game.bgSound) this.game.bgSound.play();
		});
	});

});
