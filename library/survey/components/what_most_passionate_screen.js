import DropzoneReveal from 'shared/components/dropzone_reveal/0.1';

var WhatMostPassionateScreen = (
  <skoash.Screen
    id="what-most-passionate"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_Passionate.mp3" />
    <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_3/img_s3_penguin-01.png" />
    <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_3/text_what_are_you_passionate_about%20copy.png" />
    <div ref="frame" className="frame animated"></div>

    <DropzoneReveal
      ref="dropzone"
      dropzoneMessage="friends"
      dropzoneList={[
        <skoash.ListItem className="draggable-list-item friends animated" data-ref="friends" return correct />,
        <skoash.ListItem className="draggable-list-item world-peace animated" data-ref="world-peace" return correct />,
        <skoash.ListItem className="draggable-list-item sports animated" data-ref="sports" return correct />,
        <skoash.ListItem className="draggable-list-item playing-games animated" data-ref="playing-games" return correct />,
        <skoash.ListItem className="draggable-list-item looking-cool animated" data-ref="looking-cool" return correct />,
        <skoash.ListItem className="draggable-list-item school animated" data-ref="school" return correct />,
        <skoash.ListItem className="draggable-list-item celebrities animated" data-ref="celebrities" return correct />,
        <skoash.ListItem className="draggable-list-item environment animated" data-ref="environment" return correct />
      ]}
      revealAssets={[
        <skoash.Audio ref="drag" type="sfx" src="media/assets/_audio/_Buttons/S_BU_2.mp3" />,
        <skoash.Audio ref="friends" type="voiceOver" src="media/assets/_audio/VOs/VO_Friends.mp3" pl-delay={1000} />,
        <skoash.Audio ref="world-peace" type="voiceOver" src="media/assets/_audio/VOs/VO_WorldP.mp3" pl-delay={1000} />,
        <skoash.Audio ref="sports" type="voiceOver" src="media/assets/_audio/VOs/VO_Sports.mp3" pl-delay={1000} />,
        <skoash.Audio ref="playing-games" type="voiceOver" src="media/assets/_audio/VOs/VO_Playing.mp3" pl-delay={1000} />,
        <skoash.Audio ref="looking-cool" type="voiceOver" src="media/assets/_audio/VOs/VO_Looking.mp3" pl-delay={1000} />,
        <skoash.Audio ref="school" type="voiceOver" src="media/assets/_audio/VOs/VO_School.mp3" pl-delay={1000} />,
        <skoash.Audio ref="celebrities" type="voiceOver" src="media/assets/_audio/VOs/VO_Celebrities.mp3" pl-delay={1000} />,
        <skoash.Audio ref="environment" type="voiceOver" src="media/assets/_audio/VOs/VO_Environment.mp3" pl-delay={1000} />
      ]}
    />

    <div ref="meter" className="meter animated"></div>
  </skoash.Screen>
);

export default WhatMostPassionateScreen;

// (consider dropzone reveal in order to play vo's)
// add drop zones
// add drag/drop sounds
// update the component to play the audio when list item is selected/dropped
// list items need to reset if another item is put in same dropzone
// screen should only complete once all items are in a dropzones
// collect the data from dropzone
// resize icons to better fit frame