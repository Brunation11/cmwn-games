export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="many-materials"
    >
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.closeupminion.png'}
      />
      <skoash.Image
        className="balloon"
        src={ENVIRONMENT.MEDIA + 'ImageAssets/speech.balloon.frame7.png'}
      />
      <skoash.Component>
        <div className="words">
          <div>
            Wow, there are many materials you can use
          </div>
          <div>
            to make things with a 3D printer!
          </div>
          <div>
            The most common are plastic and metal,
          </div>
          <div>
            but other materials can be used.
          </div>
        </div>
      </skoash.Component>
    </skoash.Screen>
  );
}
