var TitleScreen = (
  <skoash.Screen
    id="title"
  >
    <skoash.MediaSequence
        ref="sound-effects"
        silentOnStart={true}
    >
        <skoash.Audio ref="button" type="sfx" src="media/_audio/_Buttons/TI_BU_1.mp3" />
    </skoash.MediaSequence>
    
    <div className="group">
        <div className="drop" />   
        <div className="title animated" />
        <div className="left" />
        <div className="right" />  
    </div>
  </skoash.Screen>
);

export default TitleScreen;
