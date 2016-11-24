export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-match"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_12-1.mp3" />
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <h3>Do you know that some things<br/>in nature go together like...</h3>
                    <skoash.Component>
                        <skoash.Image className="banner animated" src="media/images/img_12.1.png" />
                        <skoash.Image className="animated" src="media/images/img_12.2.png" />
                    </skoash.Component>
                    <skoash.Component>
                        <skoash.Image className="banner animated" src="media/images/img_12.3.png" />
                        <skoash.Image className="animated" src="media/images/img_12.4.png" />
                    </skoash.Component>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
