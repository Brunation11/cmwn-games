var RecyclingArtsScreen = (
  <skoash.Screen
    id="recycling-arts"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/S_RecyclingArts/VO_RecyclingArt.mp3" />
    <skoash.Audio ref="sfx" type="sfx" src="media/_audio/S_RecyclingArts/TI_Recycling.mp3" delay={800} />
    <div className="pallet animated">
        <p>
            This is a<br />
            <span className="recycle inline animated"></span><br />
            project!
        </p>
    </div>
  </skoash.Screen>
);

export default RecyclingArtsScreen;
