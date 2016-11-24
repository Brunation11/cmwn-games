import Repeater from 'shared/components/repeater/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="water-pollution"
        >
            <skoash.Audio type="voiceOver" src="media/_audio/_S_WaterPollution/HFF_VO_WaterPollution.mp3" />
            <skoash.Component className="center">
                <skoash.Component className="group">
                    <skoash.Component className="frame" pl-bg>
                        <skoash.Image className="words" src="media/_images/_S_WaterPollution/img_3.1.png" />
                        <skoash.Image className="fish" src="media/_images/_S_WaterPollution/img_3.2.png" />
                    </skoash.Component>
                <Repeater className="bubbles" amount={14} />
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}

