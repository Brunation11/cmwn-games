/**
 * Index script
 * @module
 */
import './testPlatformIntegration';
import 'js-interactive-library';
import './config.game';

// SCREENS
import flyAcross from './screens/fly-across';

import './components/screen-title/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/frame/behavior';
import './components/score/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-reveal/behavior';
import './components/audio-sequence/behavior';
import './components/modal/behavior';

pl.game('monarch', function () {

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};
	});


});
