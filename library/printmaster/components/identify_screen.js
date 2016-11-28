import TargetSelectable from 'shared/components/target_selectable/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="identify"
            silentComplete
        >
            <skoash.Audio
                ref="screen-complete"
                complete
                type="sfx"
                src="media/S_9/S_9.5.mp3"
                delay={1000}
            />
            <skoash.Image className="hidden" src="media/S_9/img_9.1.png" />
            <skoash.Image className="hidden" src="media/S_9/img_9.8.png" />
            <skoash.Image className="hidden" src="media/S_9/img_9.6.png" />
            <skoash.Image className="hidden" src="media/S_9/img_9.7.png" />
            <skoash.Image className="hidden" src="media/S_9/img_9.9.png" />
            <TargetSelectable className="group"
                assets={[
                    <skoash.Audio ref="correct" type="sfx" src="media/S_9/S_9.1.mp3" />,
                    <skoash.Audio ref="correct-sound" type="sfx" src="media/S_9/S_9.3.mp3" />,
                    <skoash.Audio ref="incorrect" complete type="sfx" src="media/S_9/S_9.2.mp3" />,
                    <skoash.Audio ref="incorrect-sound" complete type="sfx" src="media/S_9/S_9.4.mp3" />,
                ]}
                targets={[
                    <skoash.Image
                        ref="arch"
                        className="arch animated"
                        src="media/S_9/img_9.2.png"
                    />,
                    <skoash.Image
                        ref="loops"
                        className="loops animated"
                        src="media/S_9/img_9.3.png"
                    />,
                    <skoash.Image
                        ref="whorl"
                        className="whorl animated"
                        src="media/S_9/img_9.4.png"
                    />,
                    <skoash.Image
                        ref="doubleloop"
                        className="doubleloop animated"
                        src="media/S_9/img_9.5.png"
                    />,
                ]}
                selectableList={[
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        data-ref="arch"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        data-ref="loops"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        data-ref="whorl"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        data-ref="doubleloop"
                    />,
                ]}
                selectableSelectClass="HIGHLIGHTED"
                completeListOnClick={false}
            />
        </skoash.Screen>
    );
}
