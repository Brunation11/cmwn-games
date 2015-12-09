/**
 * Index script
 * @module
 */
import 'js-interactive-library';
import 'config.game';

import 'components/screen-basic/behavior';
import 'components/title/behavior';
import 'components/frame/behavior';
import 'components/slides/behavior';

pl.game('polar-bear', function () {

	this.init = function () {
		var scale, height;
		
		scale = window.innerWidth / this.width();
		height = 539 * scale;

		if (height > window.innerHeight) {
			scale = window.innerHeight / 539;
		}

		this.css('zoom', scale);
	};

	this.screen('title', function () {
		
		this.ready = function () {
			this.open();
		};

		this.on('ui-open', function (_event) {
			if (this === _event.targetScope) {
				this.title.start();
			}
		});

	});

});