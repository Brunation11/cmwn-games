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

	this.screen('balloons', function() {
		this.respond('select', function(_event) {
			var vo, sfx;

			if(_event.behaviorTarget.attr('pl-incorrect') != null) {
				vo = this.audio.sfx.incorrect;
			} else {
				this.highlight(_event.behaviorTarget);
				vo = this.selectable.audio.voiceOver[_event.message];
			}

			switch(_event.message) {
				case "bathing":
				case "drinking":
				case "canoeing":
				case "factories":
				case "lawns":
				case "flowers":
				case "animalFeed":
					sfx = this.audio.sfx.yellow;
					break;
				case "washingDishes":
				case "swimming":
				case "brushingTeeth":
				case "electricity":
					sfx = this.audio.sfx.green;
					break;
				case "cooking":
				case "rafting":
				case "waterSlides":
				case "growingFood":
					sfx = this.audio.sfx.red;
					break;
			}

			if(vo) vo.play();
			if(sfx) sfx.play();
		});
	});

	this.screen('what-can-we-do', selectScreen);

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

	this.screen('conserve', function() {
		var item = 0;

		this.behavior('openDoor', function() {
			if(!this.state(this.STATE.VOICE_OVER)) {
				this.select(this);
				this.reveal.item(item++);
				this.audio.sfx.open.play();
			}
		});

		this.behavior('ended', function() {
			this.audio.sfx.close.play();
			this.deselect(this);
		});

		this.on('ready', function(_event) {
			if (!this.is(_event.target)) return;

			if(this.reveal && this.reveal.audio && this.reveal.audio.voiceOver) {
				this.reveal.audio.voiceOver.forEach(function(audio) {
					audio.onended = this.ended.bind(this);
				}.bind(this));
			}
		});
	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};

		this.on('ui-open', function() {
			if(this.audio && this.audio.sfx) {
				this.delay('11s', this.audio.sfx.play.bind(this.audio.sfx));
			}
		});
	});


});
