export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="learn-and-create"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'AndEvery.mp3'}
            />
            <skoash.Component className="frame-1">
                <skoash.Component className="intro-image-2" />
                <p>
                    And everyday, we<br/>
                    use things to help<br/>
                    us learn and create...
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
