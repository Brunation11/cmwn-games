export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="title"
      checkComplete={false}
      completeDelay={2000}
      completeOnStart
    >
      {/*<skoash.Component pl-component="smoke" />*/}
      <skoash.Component className="title">
        <skoash.Image className="animated" src="media/S_1/img_1.1.png" />
        <skoash.Image className="animated" src="media/S_1/img_1.2.png" />
        <skoash.Image className="animated" src="media/S_1/img_1.3.png" />
      </skoash.Component>
    </skoash.Screen>
  );
}
