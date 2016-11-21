export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="video"
    >
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'ImageAssets/vid.scrn.png'}
      />
      <skoash.Component>

      </skoash.Component>
    </skoash.Screen>
  );
}
