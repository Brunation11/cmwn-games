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

	this.screen('title', function () {
		
		this.ready = function () {
			console.log('READY!');
			this
				.open()
				.title.start();
		};

	});

});