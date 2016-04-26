/**
 * Index script
 * @module
 */
import './config.game';

import '../../../shared/js/screen-ios-splash';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/background/behavior';
import './components/title/behavior';
import './components/selectable/behavior';
import './components/selectable-reveal/behavior';
import './components/reveal/behavior';
import './components/audio-sequence/behavior';

// import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

pl.game('drought-out', function () {

	var selectScreen = function() {
		this.respond('select', function(_event) {
			var vo;

			if(!_event.behaviorTarget.is('li')) return;

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
		this.on('ready', function(_event) {
			if(!this.is(_event.target)) return;

			if(this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
		});

		this.entity('cacti', function() {
			this.on('animationend', function(_e) {
				if(!this.is(_e.target)) return;

				this.complete();
			});
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

		this.openDoor = function() {
			if(this.shouldProceed()) {
				this.select(this);
				this.reveal.item(item++);
				this.audio.sfx.open.play();
			}
		};

		this.on('ready', function(_event) {
			if (!(this.is(_event.target) && this.reveal.audio)) return;

			this.reveal.audio.voiceOver.on('ended', function(audio) {
				this.audio.sfx.close.play();
				this.deselect();
			}.bind(this));
		});
	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};

		this.on('ui-open', function() {
			if(this.audio && this.audio.sfx) {
				this.delay('9.5s', this.audio.sfx.play.bind(this.audio.sfx));
			}
		});
	});

});
