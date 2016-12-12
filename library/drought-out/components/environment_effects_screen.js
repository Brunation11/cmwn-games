import Selectable from 'shared/components/selectable/0.1';
import Reveal from 'shared/components/reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="environment-effects"
            className="bottom-frame"
        >
            <skoash.Audio type="voiceOver" src="media/S_10/VO_10.1.mp3"/>
            <Selectable
                ref="selectable"
                list={[
                    <skoash.Component type="li" />,
                    <skoash.Component type="li" />,
                    <skoash.Component type="li" />,
                    <skoash.Component type="li" />,
                    <skoash.Component type="li" />
                ]}
                selectClass="HIGHLIGHTED"
                className="scroll-selectable"
                dataTarget="selectable"
            />
            <skoash.Component ref="frame" className="frame animated">
                <skoash.Image src="media/S_10/img_10.6.png" />
                <Reveal
                    ref="reveal"
                    className="scroll-reveal"
                    openReveal={_.get(props, 'data.selectable.target.props.data-message')}
                    list={[
                        <li>Less food and water</li>,
                        <li>Loss of habitat<br /> for fish and wildlife</li>,
                        <li>More forest fires occur</li>,
                        <li>Endangered species<br /> can face extinction</li>,
                        <li>Erosion of soil</li>,
                    ]}
                    assets={[
                        <skoash.Audio type="voiceOver" src="media/S_10/VO_10.2.mp3" />,
                        <skoash.Audio type="voiceOver" src="media/S_10/VO_10.3.mp3" />,
                        <skoash.Audio type="voiceOver" src="media/S_10/VO_10.4.mp3" />,
                        <skoash.Audio type="voiceOver" src="media/S_10/VO_10.5.mp3" />,
                        <skoash.Audio type="voiceOver" src="media/S_10/VO_10.6.mp3" />
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
