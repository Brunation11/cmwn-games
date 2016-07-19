var TitleScreen = (
  <skoash.Screen
    id="title"
    hidePrev
    nextDelay={1000}
    nextIndex="menu"
  >
    <skoash.Image
      ref="title"
      className="title animated"
      src="media/_Title/SKribble_title.png"
    />
    <skoash.Image
      ref="play"
      className="hidden"
      src="media/_Buttons/skribble-play-01.png"
    />
    <skoash.Image
      ref="play"
      className="hidden"
      src="media/_Buttons/skribble-hover.png"
    />
  </skoash.Screen>
);

export default TitleScreen;
