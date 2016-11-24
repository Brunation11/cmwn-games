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
            <skoash.Audio ref="vo" type="voiceOver" src="media/S_10/VO_10.1.mp3" />
            <skoash.Audio ref="start" type="sfx" src="media/S_10/S_10.2.mp3" delay={4000} />
            <skoash.Image className="flip" src="media/_animation/BeBrightEarned.gif" />
            <skoash.Component className="text">
                <div>
                    <h1>GOOD JOB!</h1>
                    Be a Super Light Saver Hero<br />
                    and
                    <skoash.Image
                        ref="flip-img"
                        className="inline animated"
                        src="media/S_10/flip.png"
                    /><br />
                    that switch!
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
