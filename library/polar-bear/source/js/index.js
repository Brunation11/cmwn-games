/**
 * Index script
 * @module
 */
import 'js-interactive-library';
import 'config.game';

import 'components/screen-basic/behavior';

pl.game('polar-bear', function () {

	this.screen('index', function () {
		
		this.ready = function () {
			console.log('READY!');
			this.open();
		};

	});

});