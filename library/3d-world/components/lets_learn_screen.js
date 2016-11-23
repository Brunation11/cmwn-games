import classNames from 'classnames';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="lets-learn"
      onStart={function () {
        this.updateGameState({
          path: 'start',
          data: true,
        });
      }}
    >
      <skoash.Audio
        type="voiceOver"
        src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_lets.mp3'}
      />
      <skoash.Audio
        type="sfx"
        ref="start"
        src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/text_type.mp3'}
      />
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.closeupminion.png'}
      />
      <skoash.Image
        className="balloon"
        src={ENVIRONMENT.MEDIA + 'ImageAssets/speech.balloon.1.png'}
      />
      <skoash.Component>
        <div
          className={classNames('words', {
            start: _.get(props, 'data.start'),
          })}
        >
          <div>
            <p>
              Let’s learn about the
            </p>
          </div>
          <div>
            <p>
              3D printing process
            </p>
          </div>
          <div>
            <p>
              with this video
            </p>
          </div>
        </div>
      </skoash.Component>
    </skoash.Screen>
  );
}
