import InfoScreen from 'shared/components/info_screen/0.1.js';

export default (
  <InfoScreen
    id="title"
    checkComplete={false}
    playOnStart="buzz"
    completeDelay={3000}
    content={[
      <skoash.Image data-ref="background" className="hidden" src="media/_BKG/BKG_1.png" />,
      <skoash.Audio data-ref="buzz" type="sfx" src="media/S_1/S_1.2.mp3" delay={3000} />,
      <skoash.Image data-ref="bulb" className="bulb animated" src="media/S_1/img_1.2.png" />,
      <skoash.Image data-ref="presenets" className="presents animated" src="media/S_1/img_1.1.png" />,
      <skoash.Image data-ref="title" className="title animated" src="media/S_1/img_1.3.png" />,
    ]}
  />
);
