import CarouselCannon from 'shared/components/carousel_cannon/0.1';
import Randomizer from 'shared/components/randomizer/0.1';
import Score from 'shared/components/score/0.1';

function onSelect(target) {
  if (typeof this.refs.reveal.open === 'function') {
    this.open(target.props.name);
  }
}

function updateScore() {
  console.log('in update score');
  console.log(this);
}

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="choose-carousel"
      score={updateScore()}
    >
      <CarouselCannon
        ref="carousel-cannon"
        carouselBin={
          <Randomizer
            ref="randomizer"
            bin={[
              <skoash.Image name="fox" src="media/images/carousel-bears/carousel-slide-1.png" />,
              <skoash.Image name="dog" src="media/images/carousel-bears/carousel-slide-2.png" />,
              <skoash.Image name="polar" src="media/images/carousel-bears/carousel-slide-7.png" />,
              <skoash.Image name="cat" src="media/images/carousel-bears/carousel-slide-3.png" />,
              <skoash.Image name="ermine" src="media/images/carousel-bears/carousel-slide-4.png" />,
              <skoash.Image name="goat" src="media/images/carousel-bears/carousel-slide-5.png" />,
              <skoash.Image name="peacock" src="media/images/carousel-bears/carousel-slide-6.png" />,
              <skoash.Image name="polar" src="media/images/carousel-bears/carousel-slide-7.png" />,
              <skoash.Image name="seal" src="media/images/carousel-bears/carousel-slide-8.png" />,
              <skoash.Image name="hare" src="media/images/carousel-bears/carousel-slide-9.png" />,
              <skoash.Image name="polar" src="media/images/carousel-bears/carousel-slide-7.png" />,
            ]}
          />
        }
        cannonBall={
          <skoash.Image src="media/images/cannon-bears/ball.png" />
        }
        revealAssets={[
          <skoash.Audio ref="fox" type="voiceOver" src="media/audio/reveal-bears/VO_1.mp3" />,
          <skoash.Audio ref="seal" type="voiceOver" src="media/audio/reveal-bears/VO_2.mp3" />,
          <skoash.Audio ref="ermine" type="voiceOver" src="media/audio/reveal-bears/VO_3.mp3" />,
          <skoash.Audio ref="goat" type="voiceOver" src="media/audio/reveal-bears/VO_4.mp3" />,
          <skoash.Audio ref="peacock" type="voiceOver" src="media/audio/reveal-bears/VO_5.mp3" />,
          <skoash.Audio ref="dog" type="voiceOver" src="media/audio/reveal-bears/VO_6.mp3" />,
          <skoash.Audio ref="cat" type="voiceOver" src="media/audio/reveal-bears/VO_7.mp3" />,
          <skoash.Audio ref="hare" type="voiceOver" src="media/audio/reveal-bears/VO_8.mp3" />,
          <skoash.Audio ref="polar" type="voiceOver" src="media/audio/reveal-bears/VO_9.mp3" />
        ]}
        onSelect={onSelect}
      />
      <Score

      />
    </skoash.Screen>
  );
}
