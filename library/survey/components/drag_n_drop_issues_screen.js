import Dropzone from 'shared/components/dropzone/0.1';

var WhatWorldIssuesScreen = (
  <skoash.Screen
    id="what-world-issues"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_WorldIssues.mp3" />
    <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_4/img_s4_penguin-01.png" />
    <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_4/text-worldissues-01.png" />
    <div ref="frame" className="frame animated"></div>

    <Dropzone
      ref="dropzone"
      message="friends"
      list={[
        <skoash.ListItem className="draggable-list-item cyberbullying animated" data-ref="cyberbullying" return correct />,
        <skoash.ListItem className="draggable-list-item endangered-animals animated" data-ref="endangered-animals" return correct />,
        <skoash.ListItem className="draggable-list-item literacy animated" data-ref="literacy" return correct />,
        <skoash.ListItem className="draggable-list-item climate-change animated" data-ref="climate-change" return correct />,
        <skoash.ListItem className="draggable-list-item poverty animated" data-ref="poverty" return correct />,
        <skoash.ListItem className="draggable-list-item health-problems animated" data-ref="health-problems" return correct />,
        <skoash.ListItem className="draggable-list-item homelessness animated" data-ref="homelessness" return correct />,
        <skoash.ListItem className="draggable-list-item war-on-terrorism animated" data-ref="war-on-terrorism" return correct />
      ]}
      assets={[
        <skoash.Audio ref="cyberbullying" type="voiceOver" src="media/assets/_audio/VOs/VO_Cyberbullying.mp3" pl-delay={1000} />,
        <skoash.Audio ref="endangered-animals" type="voiceOver" src="media/assets/_audio/VOs/VO_Endangered.mp3" pl-delay={1000} />,
        <skoash.Audio ref="literacy" type="voiceOver" src="media/assets/_audio/VOs/VO_Literacy.mp3" pl-delay={1000} />,
        <skoash.Audio ref="climate-change" type="voiceOver" src="media/assets/_audio/VOs/VO_Climate.mp3" pl-delay={1000} />,
        <skoash.Audio ref="poverty" type="voiceOver" src="media/assets/_audio/VOs/VO_Poverty.mp3" pl-delay={1000} />,
        <skoash.Audio ref="health-problems" type="voiceOver" src="media/assets/_audio/VOs/VO_Health.mp3" pl-delay={1000} />,
        <skoash.Audio ref="homelessness" type="voiceOver" src="media/assets/_audio/VOs/VO_Homelessness.mp3" pl-delay={1000} />,
        <skoash.Audio ref="war-on-terrorism" type="voiceOver" src="media/assets/_audio/VOs/VO_War.mp3" pl-delay={1000} />
      ]}
    />

    <div ref="meter" className="meter animated"></div>
  </skoash.Screen>
);

export default WhatWorldIssuesScreen;

// (consider dropzone reveal in order to play vo's)
// add drop zones
// add drag/drop sounds
// update the component to play the audio when list item is selected/dropped
// list items need to reset if another item is put in same dropzone
// screen should only complete once all items are in a dropzones
// collect the data from dropzone
// resize icons to better fit frame