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
import './components/background/behavior';

pl.game('drought-out', function () {

	var selectScreen = function() {
		this.respond('select', function(_event) {
			var vo;

			if(_event.behaviorTarget.attr('pl-correct') == null) {
				vo = this.audio.sfx.incorrect;
			} else {
				this.highlight(_event.behaviorTarget);
				vo = this.selectable.audio.voiceOver[_event.message];
			}

			if(vo) vo.play();
		});
	};

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

	this.screen('think', selectScreen);

	this.screen('info-no-water', function() {
		this.on('ready', function(_event) {
			if (!this.is(_event.target)) return;

			if(this.audio && this.audio.voiceOver) {
				this.audio.voiceOver.onended = function() {
					if(this.audio.sfx) this.audio.sfx.play();
				}.bind(this);
			}
		});
	});

	this.screen('balloons', function() {
		this.respond('pick', function(_event) {
			var vo;

			if(_event.behaviorTarget.attr('pl-incorrect') != null) {
				vo = this.audio.sfx.incorrect;
			} else {
				this.highlight(_event.behaviorTarget);
				vo = this.selectableAll.audio.voiceOver[_event.message];
			}

			if(vo) vo.play();
		});
	});

	this.screen('info-environment', function() {
		this.on('ready', function(_event) {
			if (!this.is(_event.target)) return;

			if(this.audio && this.audio.voiceOver && this.audio.voiceOver.greatJob) {
				this.audio.voiceOver.greatJob.onended = function() {
					if(this.audio.voiceOver.letsLook) this.audio.voiceOver.letsLook.play();
				}.bind(this);
			}
		});
	});

	this.screen('what-can-we-do', selectScreen);

	this.screen('info-drain', function() {
		this.on('ready', function(_event) {
			if (!this.is(_event.target)) return;

			if(this.audio && this.audio.voiceOver && this.audio.voiceOver.info) {
				this.audio.voiceOver.info.onended = function() {
					if(this.audio.sfx.drain) this.audio.sfx.drain.play();
				}.bind(this);
			}
		});
	});

	this.screen('shower', function() {
		this.respond('select', function(_event) {
			var vo;

			if(_event.behaviorTarget.attr('pl-correct') == null) {
				vo = this.audio.sfx.incorrect;
			} else {
				this.highlight(_event.behaviorTarget);
				vo = this.selectable.audio.voiceOver[_event.message];
			}

			if(vo) vo.play();
		});

		this.entity('selectable', function () {
			
			this.shouldSelect = function (_$target) {
				if (_$target.prev().hasClass(this.STATE.HIGHLIGHTED) || _$target.index() === 0) {
					return !this.screen.state(this.STATE.VOICE_OVER);
				}

				return false; 
			};

		});
	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};
	});


});
