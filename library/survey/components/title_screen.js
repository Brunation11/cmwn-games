var TitleScreen = (
  <skoash.Screen
    id="title"
    checkComplete={false}
    playOnStart="buzz"
    completeDelay={3000}
  >
    <skoash.Image ref="background" className="hidden" src="media/assets/_images/_BKG/BKG_1-01.png" />

    <skoash.Image ref="ice-cube" className="ice-cube animated" src="media/assets/_images/_BKG/BKG_02-title-01.png" />
    <skoash.Image ref="magnifying-glass" className="magnifying-glass animated" src="media/assets/_images/_title_page/magnifying%20glass.png" />
    <skoash.Image ref="penguine-1" className="penguine-1 animated" src="media/assets/_images/_title_page/img-penguin-bottom-01.png" />
    <skoash.Image ref="penguine-2" className="penguine-2 animated" src="media/assets/_images/_title_page/img-penguin-upperright.png" />
    <skoash.Image ref="title" className="title animated" src="media/assets/_images/_title_page/text-all-about-you.png" />
  </skoash.Screen>
);

export default TitleScreen;


// ask about play on start
// what is ref buzz controlling
// add play button audio
// get confirmation on animate.css
// add "tada" animation
// animate play button