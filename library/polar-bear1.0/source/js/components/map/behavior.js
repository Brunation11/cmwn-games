pl.game.component('map', function () {

  var SELECTOR;

  SELECTOR = {
    CORRECT: '[pl-correct]',
    INCORRECT: '[pl-incorrect]'
  };

  this.buffer = null;
  this.bctx = null;
  this.countries = null;

  // images
  this.grayMap = null;
  this.iceland = null;
  this.russia = null;
  this.northPole = null;
  this.greenland = null;
  this.denmark = null;
  this.norway = null;
  this.canada = null;
  this.usa = null;
  this.sweden = null;
  this.finland = null;

  this.init = function () {
    this.buffer = document.createElement('canvas');
    this.bctx = this.buffer.getContext('2d');
  };

  this.ready = function () {
    var correct, $countries;

    correct = pl.Queue.create();

    correct.on('complete', this.bind(function () {
      var sfx = pl.util.resolvePath(this, 'game.audio.sfx.screenComplete');
      if (sfx) sfx.play();
      this.complete();
    }));

    this.buffer.width = 500;
    this.buffer.height = 500;

    $countries = this.find('.country');

    $countries
      .not(SELECTOR.CORRECT)
      .on('animationend', function () {
        $(this).removeClass('flash').addClass('fadeIn');
      });

    this.countries = $countries
      .map(function (_index, _node) {
        var $node, id;

        $node = $(_node);
        id = pl.util.transformId($node.id(), true);

        if ($node.is(SELECTOR.CORRECT)) correct.add(id);

        return id;
      })
      .toArray();

    this.countries.correct = correct;

  };

  this.isImageTarget = function (_image, _point) {
    var pixel;

    this.bctx.clearRect(0, 0, this.buffer.width, this.buffer.height);
    this.bctx.drawImage(_image[0], 0, 0, _image.width(), _image.height());
    pixel = this.bctx.getImageData(_point.x, _point.y, 1, 1);

    this.bctx.fillStyle = 'white';
    this.bctx.fillRect(_point.x, _point.y, 5, 5);

    // opaque pixel
    return pixel.data[3] > 0;
  };

  this.test = function (_cursor) {
    var offset, cursor, gameScale;

    if (!this.screen.allowAction()) return false;

    offset = this.grayMap.absolutePosition();
    gameScale = this.game.transformScale().x;

    // FireFox uses transfom scale which
    // does NOT produce scaled DOM values like `zoom`.
    if (gameScale !== 1) {
      cursor = _cursor
        .dec(offset)
        .scale(1 / this.game.zoom)
        .math('floor');
    } else {
      cursor = _cursor
        .scale(1 / this.game.zoom)
        .math('floor')
        .dec(offset);
    }

    this.countries.every(this.bind(function (_country) {
      if (this.isImageTarget(this[_country], cursor)) {
        this.answer( _country);
        return false;
      }

      return true;
    }));
  };

  this.answer = function (_country) {
    var $country;

    $country = this[_country];

    if ($country.is(SELECTOR.CORRECT)) {

      this.playSFX('correct');
      this.playVO(_country);

      $country.addClass('animated fadeIn');

      if (!this.state('COMPLETE')) this.countries.correct.ready(_country);
    } else {
      this.playSFX('incorrect');
      $country.addClass('animated flash');
    }
  };

  this.playSFX = function (_answer) {
    var sfx;

    sfx = pl.util.resolvePath(this, 'audio.sfx.' + _answer);

    if (sfx) sfx.play();

    return sfx;
  };

  this.playVO = function (_name) {
    var vo;

    vo = pl.util.resolvePath(this, 'audio.voiceOver.' + _name);

    if (vo) vo.play();

    return vo;
  };

  this.on('ui-open', function (_e) {
    if (!this.is(_e.target)) return;

    if (this.isComplete) {
      this.find('.fadeIn').removeClass('fadeIn');
    }
  });
});
