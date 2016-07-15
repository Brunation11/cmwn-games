var TitleScreen = (
  <skoash.Screen
    id="title"
    showPrev={false}
    showNext={false}
  >
    <skoash.Image
      ref="title"
      className="title animated"
      src="media/_Title/SKribble_title.png"
      onClick={() => {
        skoash.trigger('goto', {index: 'menu'});
      }}
    />
  </skoash.Screen>
);

export default TitleScreen;
