export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="reminder"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-reminder.mp3`} />
            <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-5-1.png`} />
            <p>
                You're going to make reminder<br />
                tags to help you and your<br />
                family remember to save<br />
                the planet by not wasting water!
            </p>
        </skoash.Screen>
    );
}

