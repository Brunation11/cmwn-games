export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-1"
            className="large-frame right"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/S_13/VO_13.1.mp3" />
            <skoash.Image ref="frame-img" className="hidden" src="media/_Frame/Fr_1.png" />
            <skoash.Component ref="frame" className="frame">
                <skoash.Image
                    ref="illustration"
                    className="illustration animated"
                    src="media/S_13/img_13.2.gif"
                />
                <skoash.Component ref="container">
                    <skoash.Image ref="title" className="title animated" src="media/S_13/img_13.1.png" />
                    <p>
                        Put a dab of hand lotion<br/>
                        in your palm and rub it<br/>
                        into your hands.<br/>
                        This will make<br/>
                        your fingerprints<br/>
                        show up more easily.
                    </p>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
