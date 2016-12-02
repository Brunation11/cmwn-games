import CarouselCannon from 'shared/components/carousel_cannon/0.1';
import Randomizer from 'shared/components/randomizer/0.1';

function onSelect(target) {
    console.log(target.props.name); // eslint-disable-line no-console
}

export default (
    <skoash.Screen
        id="carousel"
    >
        <CarouselCannon
            ref="carousel-cannon"
            carouselBin={
                <Randomizer
                    ref="randomizer"
                    bin={[
                        <skoash.Image name="fox" src="media/carousel-bears/carousel-slide-1.png" />,
                        <skoash.Image name="dog" src="media/carousel-bears/carousel-slide-2.png" />,
                        <skoash.Image name="polar" src="media/carousel-bears/carousel-slide-7.png" />,
                        <skoash.Image name="cat" src="media/carousel-bears/carousel-slide-3.png" />,
                        <skoash.Image name="ermine" src="media/carousel-bears/carousel-slide-4.png" />,
                        <skoash.Image name="goat" src="media/carousel-bears/carousel-slide-5.png" />,
                        <skoash.Image name="peacock" src="media/carousel-bears/carousel-slide-6.png" />,
                        <skoash.Image name="polar" src="media/carousel-bears/carousel-slide-7.png" />,
                        <skoash.Image name="seal" src="media/carousel-bears/carousel-slide-8.png" />,
                        <skoash.Image name="hare" src="media/carousel-bears/carousel-slide-9.png" />,
                        <skoash.Image name="polar" src="media/carousel-bears/carousel-slide-7.png" />,
                    ]}
                />
            }
            cannonBall={
                <skoash.Image src="media/cannon-bears/ball.png" />
            }
            onSelect={onSelect}
        />
    </skoash.Screen>
);
