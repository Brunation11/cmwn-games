class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocityY = -2;
    this.velocityX = (this.random(1, 10)-5)/10;
    this.size = this.random(3, 5)/10;
    this.alpha = 1;
  }

  random(min, max) {
    return Math.random()*(max-min)*min;
  }

  update(context, image) {
    this.y += this.velocityY;
    this.x += this.velocityX;
    this.velocityY *= 0.99;
    if(this.alpha < 0)
      this.alpha = 0;
    context.globalAlpha = this.alpha;
    context.save();
    context.translate(this.x, this.y);
    context.scale(this.size, this.size);
    context.drawImage(image, -image.width/2, -image.height/2);
    context.restore();
    this.alpha *= 0.96;
    this.size += 0.02;
  }
}

class SmokeComponent extends skoash.Component {
  constructor() {
    super();

    this.state = {
      cursorX: 0,
      cursorY: 0,
      particles: [],
      updateSmoke: null,
    }
  }

  bootstrap() {
    super.bootstrap();
    var context, image, updateSmoke;

    if (this.refs.canvas && this.refs.particle) {
      context = this.refs.canvas.getContext('2d');
      image = ReactDOM.findDOMNode(this.refs.particle);
      updateSmoke = window.setInterval(this.draw.bind(this, context, image), 1000/60);
  
      this.setState({
        updateSmoke,
      });
    }

    window.addEventListener('mousemove', this.moveCursor.bind(this));
  }

  componentWillUnmount() {
    window.clearInterval(this.state.updateSmoke);

    window.removeEventListener('mousemove', this.moveCursor);
  }

  moveCursor(e) {
    var scale = skoash.trigger('getState').scale;
    this.setState({
      cursorX: e.clientX / scale,
      cursorY: e.clientY / scale,
    });
  }

  draw(context, image) {
    var particle, particles, gameWidth, gameHeight, scale;

    particle = new Particle(this.state.cursorX, this.state.cursorY);
    particles = this.state.particles;
    particles.push(particle);

    scale = skoash.trigger('getState').scale;
    gameWidth = window.innerWidth / scale;
    gameHeight = window.innerHeight / scale;

    while(particles.length > 500) particles.shift();

    context.globalAlpha = 1;
    context.clearRect(0, 0, gameWidth, gameHeight);

    for(var i = 0; i < particles.length; i++) {
      particles[i].update(context, image);
    }
    this.setState({ particles });
  }

  render() {
    return (
      <div classNames={'smoke ' + this.getClassNames()}>
        <skoash.Image ref="particle" id="particle" src="media/_Smoke/particle.jpg" hidden />
        <canvas ref="canvas" id="canvas" width="960" height="540" />
      </div>
    )
  }
}

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="title"
      checkComplete={false}
      completeDelay={2000}
      completeOnStart
    >
      <SmokeComponent ref="smoke" />
      <skoash.Component className="title">
        <skoash.Image className="animated" src="media/S_1/img_1.1.png" />
        <skoash.Image className="animated" src="media/S_1/img_1.2.png" />
        <skoash.Image className="animated" src="media/S_1/img_1.3.png" />
      </skoash.Component>
    </skoash.Screen>
  );
}
