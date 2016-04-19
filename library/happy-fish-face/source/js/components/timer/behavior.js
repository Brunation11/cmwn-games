pl.game.component('timer', function () {

	function testTime () {
		var time;

		time = Date.now();

		if (time >= this.stamp) {
			this.stamp = time+1000;
			this.time += 1;
			
			this.render();

			if (this.time*1000 >= this.timeout) {
				this.timerComplete();
			}
		}
	}

	this.timeout = 0;
	this.time = 0;
	this.stamp = 0;

	this.timerComplete = function() {
		this
			.stop()
			.complete();
	};

	this.init = function () {
		this.timeout = pl.util.toMillisec(this.properties.set);
		return this;
	};

	this.ready = function () {
		this.screen.on('ui-open', this.bind(function () {
			this.start();
		}));
		return this;
	};

	this.start = function () {
		this.eachFrame(testTime);
		return this;
	};

	this.restart = function() {
		this.time = 0;
		this.stamp = 0;
		this.start();
		return this;
	};

	this.stop = function () {
		this.eachFrame(testTime, false);
		return this;
	};

	this.pause = this.stop;

	this.resume = this.start;

	this.render = function () {
		this.stopWatch.text(this.time);
		return this;
	};

});
