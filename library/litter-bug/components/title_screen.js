var TitleScreen = (
  <skoash.Screen
    id="title"
  >
    <skoash.Component ref="center" className="center">
      <skoash.Image ref="symbol" className="symbol animated" src="media/S_1/img_1.1.png" />
      <skoash.Image ref="litterbug" className="litterbug animated" src="media/S_1/img_1.2.png" />
      <skoash.Component ref="title" className="title animated">
        <skoash.Image ref="image-1" src="media/S_1/img_1.3.png" />
        <skoash.Image ref="image-2" src="media/S_1/img_1.4.png" />
      </skoash.Component>
    </skoash.Component>
  </skoash.Screen>
);

export default TitleScreen;
