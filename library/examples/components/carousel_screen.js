import Carousel from 'shared/components/carousel/0.1';
import Cannon from 'shared/components/cannon/0.1';
import Randomizer from 'shared/components/randomizer/0.1';

var CarouselScreen = (
  <skoash.Screen
    id="carousel"
  >
    <Carousel
      ref="carousel"
      bin={
        <Randomizer
          ref="randomizer"
          bin={[
            <skoash.Image src="media/carousel-bears/carousel-slide-1.png" />,
            <skoash.Image src="media/carousel-bears/carousel-slide-2.png" />,
            <skoash.Image src="media/carousel-bears/carousel-slide-3.png" />,
            <skoash.Image src="media/carousel-bears/carousel-slide-4.png" />,
            <skoash.Image src="media/carousel-bears/carousel-slide-5.png" />,
            <skoash.Image src="media/carousel-bears/carousel-slide-6.png" />,
            <skoash.Image src="media/carousel-bears/carousel-slide-7.png" />,
            <skoash.Image src="media/carousel-bears/carousel-slide-8.png" />,
            <skoash.Image src="media/carousel-bears/carousel-slide-9.png" />,
          ]}
        />
      }
    />
    <Cannon
      ref="cannon"
      ball={
        <skoash.Image src="media/cannon-bears/ball.png" />
      }
    />
  </skoash.Screen>
);

export default CarouselScreen;
