/**
 * the following is the mouse smoke js
 */
pl.game.component('smoke', function () {
  var w, h, c, position, particles, img, shouldDraw;

  function Particle(x, y){
    this.x = x;
    this.y = y;
    this.velY = -2;
    this.velX = (random(1, 10) - 5) / 10;
    this.size = random(3, 5) / 10;
    this.alpha = 1;
    this.update = function (){
      this.y += this.velY;
      this.x += this.velX;
      this.velY *= 0.99;
      if (this.alpha < 0) this.alpha = 0;
      c.globalAlpha = this.alpha;
      c.save();
      c.translate(this.x, this.y);
      c.scale(this.size, this.size);
      c.drawImage(img, -img.width / 2, -img.height / 2);
      c.restore();
      this.alpha *= 0.96;
      this.size += 0.02;
    };
  }

  function random(min, max){
    return Math.random() * (max - min) * min;
  }

  function draw() {
    var p = new Particle(position.x, position.y);
    particles.push(p);

    while (particles.length > 500) particles.shift();

    c.globalAlpha = 1;
    c.fillStyle = '#000';
    c.fillRect(0, 0, w, h);

    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
    }

    if (shouldDraw) requestAnimationFrame(draw);
  }

  function handleCursor(e) {
    position.x = e.clientX / this.zoom;
    position.y = e.clientY / this.zoom;
  }

  this.canvas = null;
  this.particle = null;

  this.on('ready', function (_event) {
    if (!this.is(_event.target)) return;

    w = this.canvas[0].width = this.game.width(),
    h = this.canvas[0].height = this.game.height();
    c = this.canvas.exec('getContext', ['2d'])[0];
    img = this.particle[0];
    position = {x: w / 2, y: h / 2};

    this.start();
  });

  this.start = function () {
    particles = []; shouldDraw = true;
    requestAnimationFrame(draw);
    this.game.on(pl.EVENT.ACTION_MOVE, handleCursor);
  };

  this.stop = function () {
    shouldDraw = false;
    this.game.off(pl.EVENT.ACTION_MOVE, handleCursor);
  };

});
