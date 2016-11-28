export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="reminder"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/S_Reminder/VO_Reminder.mp3" />
            <skoash.Image className="animated" src="media/_images/S_Reminder/img_5.1.png" />
            <p>
                You're going to make reminder<br />
                tags to help you and your<br />
                family remember to save<br />
                the planet by not wasting water!
            </p>
        </skoash.Screen>
    );
}

