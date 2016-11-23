export default function (props, ref, key) {
    return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="title"
      checkComplete={false}
      completeDelay={3000}
      completeOnStart
    >
      <skoash.Image className="title animated" src="media/images/title.png" />
      <skoash.Component className="sparkles">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </skoash.Component>
    </skoash.Screen>
  );
}
