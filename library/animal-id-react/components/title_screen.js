 var TitleScreen = (
  <skoash.Screen
    id="title"
    checkComplete={false}
    completeDelay={3000}
  >
    <skoash.Image className="title animated" src="media/images/title.png" />
    <skoash.Component classname="sparkles" />
  </skoash.Screen>
);

export default TitleScreen;
