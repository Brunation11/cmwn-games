export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-1"
            className="large-frame right"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-13-1.mp3`} />
            <skoash.Image ref="frame-img" className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <skoash.Component ref="frame" className="frame">
                <skoash.Image
                    ref="illustration"
                    className="illustration animated"
                    src={`${CMWN.MEDIA.SPRITE}img-13-2.gif`}
                />
                <skoash.Component ref="container">
                    <skoash.Image
                        ref="title"
                        className="title animated"
                        src={`${CMWN.MEDIA.IMAGE}img-13-1.png`}
                    />
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
