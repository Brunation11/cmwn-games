export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="info-lets-see"
    >
      <skoash.Audio ref="ding-dong" type="sfx" src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/DoorbellLong.mp3`} />
      <skoash.Image src={`${ENVIRONMENT.MEDIA}ImageAssets/ding.dong.png`} />
    </skoash.Screen>
  );
}
