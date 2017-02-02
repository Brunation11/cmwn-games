export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
            emitOnComplete={{
                name: 'flip',
            }}
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/flip/VO_8.1.mp3" />
            <skoash.Component className="message">
                <skoash.Image className="banner" src="media/flip/img_8.1.png" />
                    <p>You flushed out a brand new</p><br />
                <skoash.Image className="flip" src="media/flip/flip.png" />
            </skoash.Component>
            <skoash.Image className="flip-coin" src="media/flip/TwirlNSwirl_EarnedFlip.gif" />
        </skoash.Screen>
    );
}
