export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="scissors-and-paint"
        >
            <skoash.MediaSequence
                 ref="audio-sequence"
                 checkComplete={true}
             >
                <skoash.Audio
                    ref="sfx"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-7.mp3`}
                />
                <skoash.Audio
                    ref="vo"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-scissors-and-paint.mp3`}
                />
            </skoash.MediaSequence>
            <skoash.Image
                ref="image"
                className="animated"
                src={`${CMWN.MEDIA.IMAGE}img-10-1.png`}
            />
            <p>
                Be sure to let<br />
                your parent or guardian<br />
                know that you will<br />
                be using scissors<br />
                and paint or nail polish.
            </p>
        </skoash.Screen>
    );
}

