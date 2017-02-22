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
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-10-1.mp3`} />
            <skoash.Audio ref="start" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-10-2.mp3`} delay={4000} />
            <skoash.Image className="flip" src={`${CMWN.MEDIA.SPRITE}be-bright-earned.gif`} />
            <skoash.Component className="text">
                <div>
                    <h1>GOOD JOB!</h1>
                    Be a Super Light Saver Hero<br />
                    and
                    <skoash.Image
                        ref="flip-img"
                        className="inline animated"
                        src={`${CMWN.MEDIA.IMAGE}flip.png`}
                    /><br />
                    that switch!
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
