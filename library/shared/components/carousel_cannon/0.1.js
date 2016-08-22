import classNames from 'classnames';

import Carousel from 'shared/components/carousel/0.1';
import Cannon from 'shared/components/cannon/0.1';

class CarouselCannon extends skoash.Component {
  constructor() {
    super();

    this.onReload = this.onReload.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onReload() {
    this.refs.carousel.select();
  }

  onSelect(target) {
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect.call(this, target);
    }
  }

  renderCarousel() {
    return (
      <Carousel
        ref="carousel"
        bin={this.props.carouselBin}
        onSelect={this.onSelect}
      />
    );
  }

  renderCannon() {
    return (
      <Cannon
        ref="cannon"
        ball={this.props.cannonBall}
        onReload={this.onReload}
      />
    );
  }

  getClassNames() {
    return classNames('carousel-cannon', super.getClassNames());
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        {this.renderCarousel()}
        {this.renderCannon()}
      </div>
    );
  }
}

export default CarouselCannon;
