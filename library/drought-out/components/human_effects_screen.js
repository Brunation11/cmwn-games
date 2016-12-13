export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="human-effects"
            className="bottom-frame"
        >
            <skoash.Audio type="voiceOver" src="media/S_12/VO_12.1.mp3"/>
            <skoash.Selectable
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
                <skoash.Image src="media/S_12/img_12.6.png" />
                <skoash.Reveal
                    ref="reveal"
                    className="scroll-reveal"
                    openReveal={_.get(props, 'data.selectable.target.props.data-message')}
                    list={[
                        <li>Health problems from<br /> dust and bad water</li>,
                        <li>Threats to homes and lives<br /> from forest fires</li>,
                        <li>Anxiety and depression</li>,
                        <li>Loss of income</li>,
                        <li>Unable to play in the water</li>
                    ]}
                    assets={[
                        <skoash.Audio type="voiceOver" src="media/S_12/VO_12.2.mp3" />,
                        <skoash.Audio type="voiceOver" src="media/S_12/VO_12.3.mp3" />,
                        <skoash.Audio type="voiceOver" src="media/S_12/VO_12.4.mp3" />,
                        <skoash.Audio type="voiceOver" src="media/S_12/VO_12.5.mp3" />,
                        <skoash.Audio type="voiceOver" src="media/S_12/VO_12.6.mp3" />
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
