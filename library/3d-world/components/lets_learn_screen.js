export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="lets-learn"
    >
      <skoash.Audio
        type="voiceOver"
        src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_lets.mp3'}
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
        <div className="words">
          <div>
            Let’s learn about the
          </div>
          <div>
            3D printing process
          </div>
          <div>
            with this video
          </div>
        </div>
      </skoash.Component>
    </skoash.Screen>
  );
}
