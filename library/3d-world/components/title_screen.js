export default function (props, ref, key) {
    return (
      <skoash.Screen
          {...props}
          ref={ref}
          key={key}
          id="title"
      >
          <skoash.Image src={ENVIRONMENT.MEDIA + 'SpritesAnimations/title.gif'} />
      </skoash.Screen>
    );
}
