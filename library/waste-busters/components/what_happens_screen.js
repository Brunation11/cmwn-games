export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="what-happens"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'ButWhat.mp3'}
            />
            <skoash.Component className="intro-image-1" />
            <skoash.Component className="intro-image-2" />
            <skoash.Component className="frame-2">
                <p>
                    But what happens to the items<br/>
                    we don't need anymore?
                </p>
                <h3>
                    Where do they all go?
                </h3>
            </skoash.Component>
        </skoash.Screen>
    );
}
