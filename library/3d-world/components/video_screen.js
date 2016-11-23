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
        <skoash.Video
          src="https://res.cloudinary.com/changemyworldnow/video/upload/v1479831566/3D_Printing_FINAL_FILE_SMALLER_pfzv84.mp4"
        />
      </skoash.Component>
    </skoash.Screen>
  );
}
