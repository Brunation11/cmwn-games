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
import './components/score/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-reveal/behavior';

pl.game('be-bright', function () {

	this.screen('title', function () {

		this.ready = function () {
			this.open();
			this.close($('#loader'));
			this.delay(3000, function() {
				this.complete();
				if(this.title.audio.sfx) this.title.audio.sfx.play();
			});
		};

	});

	this.screen('video', function() {
		this.on('ui-open', function() {
			if(this.game.bgSound) this.game.bgSound.pause();
			this.video.start();
		});
		this.on("ui-close", function() {
			this.video.pause();
			if(this.game.bgSound) this.game.bgSound.play();
		});
	});

	this.screen('video-2', function() {
		this.on('ui-open', function() {
			if(this.game.bgSound) this.game.bgSound.pause();
			this.video.start();
		});
		this.on("ui-close", function() {
			this.video.pause();
			if(this.game.bgSound) this.game.bgSound.play();
		});
	});

	this.screen('flip', function () {
		this.on('audio-ended', function (_event) {
			if (this.audio.voiceOver !== _event.target) return;
			this.stampImg.addClass('START');
			this.audio.sfx.stamp.play();
		});

		this.next = function () {
			this.game.quit.okay();
		};
	});

});
