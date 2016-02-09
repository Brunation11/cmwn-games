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
import './components/selectable-reveal/behavior';
import './components/audio-sequence/behavior';

pl.game('printmaster', function () {

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

	this.screen('identify', function() {

		this.on('ready', function() {
			var correct;

			correct = pl.Queue.create();

			correct.on('complete', this.bind(function () {
				this.delay('1.5s',this.audio.sfx.confirmed.play.bind(this.audio.sfx.confirmed));
			}));

			this.items = this
				.find('.header img')
				.map(function (_index, _node) {
					correct.add($(_node).id());
					return _node;
				})
				.toArray();

			this.items.correct = correct;

			this.headers = this.find('.header img');
			this.answers = this.find('.items li');
			this.setItem();
		});

		this.setItem = function(_idx) {
			if(this.item && this.items[this.item]) this.items[this.item].ready();
			this.idx = _idx || 0;
			this.item = $(this.items[this.idx]).id();

			if(this.item) {
				this.select(this.headers.filter('[pl-id='+this.item+']'));
				if(this.selectable) this.selectable.deselectAll();

				this.answers.each(function (_index, _node) {
					_node.style.order = Math.round(10*Math.random());
				});
			}
		};

		this.respond('select', function(_event) {
			if(_event.message === this.item) {
				this.audio.sfx.correct.play();
				this.audio.sfx.granted.play();
				this.select(_event.behaviorTarget);
				this.items.correct.ready(this.item);
				this.delay('1s', this.setItem.bind(this,++this.idx));
			} else {
				this.audio.sfx.incorrect.play();
				this.audio.sfx.denied.play();
				this.highlight(_event.behaviorTarget);
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
