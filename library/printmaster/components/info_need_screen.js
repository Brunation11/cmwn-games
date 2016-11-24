export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-need"
            className="large-frame"
        >
            <skoash.MediaSequence ref="media">
                <skoash.Audio ref="vo" type="voiceOver" src="media/S_12/VO_12.1.mp3" pl-delay="1s" />
                <skoash.Audio ref="lotion" type="voiceOver" gameClass="LOTION" src="media/S_12/VO_12.2.mp3" />
                <skoash.Audio ref="tape" type="voiceOver" gameClass="TAPE" src="media/S_12/VO_12.3.mp3" />
                <skoash.Audio ref="powder" type="voiceOver" gameClass="POWDER" src="media/S_12/VO_12.4.mp3" />
                <skoash.Audio ref="brush" type="voiceOver" gameClass="BRUSH" src="media/S_12/VO_12.5.mp3" />
                <skoash.Audio ref="paper" type="voiceOver" gameClass="PAPER" src="media/S_12/VO_12.6.mp3" />
                <skoash.Audio ref="glass" type="voiceOver" gameClass="GLASS" src="media/S_12/VO_12.7.mp3" />
            </skoash.MediaSequence>
            <skoash.Image ref="frame-img" className="hidden" src="media/_Frame/Fr_1.png" />
            <skoash.Component ref="frame" className="frame">
                <skoash.Image ref="title" className="title animated" src="media/S_12/img_12.1.png" />
                <skoash.Image ref="images" className="hidden animated" src="media/S_12/img_12.2.png" />
                <div className="illustration">
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                </div>
                <ul>
                    <li>Hand lotion</li>
                    <li>Clear tape</li>
                    <li>Powder</li>
                    <li>Small brush <span>(like a paintbrush or makeup brush)</span></li>
                    <li>Black construction paper</li>
                    <li>Magnifying glass</li>
                </ul>
            </skoash.Component>
        </skoash.Screen>
    );
}
