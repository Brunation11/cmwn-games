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
            <skoash.MediaSequence>
                <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-13-1.mp3`} />
                <skoash.Audio playTarget="flip" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-13-2.mp3`} />
            </skoash.MediaSequence>
            <div className="frame">
                <skoash.Image className="background" src={`${CMWN.MEDIA.FRAME}fr-11.png`} />
                <p>
                    Thank you for<br/>
                    looking out for others<br/>
                    and making the world<br/>
                    a better place.
                </p>
                <skoash.Image
                    className={'flip animated ' +
                        (_.get(props, 'data.flip.playing', null) ? 'in' : '')}
                    src={`${CMWN.MEDIA.IMAGE}img-13-1.png`}
                />
            </div>
        </skoash.Screen>
    );
}
