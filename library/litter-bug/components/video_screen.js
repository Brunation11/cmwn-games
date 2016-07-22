var VideoScreen = (
  <skoash.Screen
    id="video"
  >
    <skoash.Component ref="center" className="center">
      <skoash.Component ref="frame" className="frame">
        <skoash.Video ref="video" src="https://res.cloudinary.com/changemyworldnow/video/upload/v1455037034/Litterbug-Final_jjmrg7.mp4" />
      </skoash.Component>
    </skoash.Component>
  </skoash.Screen>
);

export default VideoScreen;
