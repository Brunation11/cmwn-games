export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="title"
      completeDelay={5000}
    >
      <skoash.Audio ref="button" type="sfx" src="media/_audio/_Buttons/TI_BU_1.mp3" complete />
  
      <div className="group">
          <div className="drop" />
          <div className="title animated" />
          <div className="left" />
          <div className="right" />
      </div>
    </skoash.Screen>
  );
}

