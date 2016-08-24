import _ from 'lodash';

import CarouselCannon from 'shared/components/carousel_cannon/0.1';
import Randomizer from 'shared/components/randomizer/0.1';
import Score from 'shared/components/score/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="choose-carousel"
    >
      <CarouselCannon
        ref="carousel-cannon"
        completeOnStart={true}
        // checkComplete={false}
        complete={true}
        onSelect={function (target) {
          if (typeof this.refs.reveal.open === 'function') {
            this.open(`${target.props.name}-vo`);
          }
          if (target.props.name === 'polar') {
            var score = _.get(props, 'data.score.correct', 0);
            if (score < 5) score += 1;

            this.updateGameState({
              path: 'score',
              data: {
                correct: score
              }
            });
          }
        }}
        carouselBin={
          <Randomizer
            ref="randomizer"
            completeOnStart={true}
            checkComplete={false}
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
        autoCloseReveal
        revealList={[
          <skoash.Image data-ref="fox" className="animated" src="media/images/reveal-bears/reveal-1.png" complete={true} />,
          <skoash.Image data-ref="seal" className="animated" src="media/images/reveal-bears/reveal-5.png" complete={true} />,
          <skoash.Image data-ref="ermine" className="animated" src="media/images/reveal-bears/reveal-4.png" complete={true} />,
          <skoash.Image data-ref="goat" className="animated" src="media/images/reveal-bears/reveal-6.png" complete={true} />,
          <skoash.Image data-ref="peacock" className="animated" src="media/images/reveal-bears/reveal-7.png" complete={true} />,
          <skoash.Image data-ref="dog" className="animated" src="media/images/reveal-bears/reveal-2.png" complete={true} />,
          <skoash.Image data-ref="cat" className="animated" src="media/images/reveal-bears/reveal-3.png" complete={true} />,
          <skoash.Image data-ref="hare" className="animated" src="media/images/reveal-bears/reveal-9.png" complete={true} />,
          <skoash.Image data-ref="polar" className="animated" src="media/images/reveal-bears/reveal-8.png" />,
        ]}
        revealAssets={[
          <skoash.Audio ref="fox-vo" type="voiceOver" src="media/audio/reveal-bears/VO_1.mp3" complete={true} />,
          <skoash.Audio ref="seal-vo" type="voiceOver" src="media/audio/reveal-bears/VO_2.mp3" complete={true} />,
          <skoash.Audio ref="ermine-vo" type="voiceOver" src="media/audio/reveal-bears/VO_3.mp3" complete={true} />,
          <skoash.Audio ref="goat-vo" type="voiceOver" src="media/audio/reveal-bears/VO_4.mp3" complete={true} />,
          <skoash.Audio ref="peacock-vo" type="voiceOver" src="media/audio/reveal-bears/VO_5.mp3" complete={true} />,
          <skoash.Audio ref="dog-vo" type="voiceOver" src="media/audio/reveal-bears/VO_6.mp3" complete={true} />,
          <skoash.Audio ref="cat-vo" type="voiceOver" src="media/audio/reveal-bears/VO_7.mp3" complete={true} />,
          <skoash.Audio ref="hare-vo" type="voiceOver" src="media/audio/reveal-bears/VO_8.mp3" complete={true} />,
          <skoash.Audio ref="polar-vo" type="voiceOver" src="media/audio/reveal-bears/VO_9.mp3" />
        ]}
      />
      <Score
        ref="score"
        max={5}
        correct={_.get(props, 'data.score.correct', 0)}
        checkComplete={false}
        complete={_.get(props, 'data.score.correct', 0) === 5}
      />
    </skoash.Screen>
  );
}
