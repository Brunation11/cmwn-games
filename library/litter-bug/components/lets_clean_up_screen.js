export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="lets-clean-up"
        >
            <skoash.MediaSequence ref="media-sequence">
                <skoash.Audio
                    ref="vo-1"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}litter-is-trash.mp3`}
                />
                <skoash.Audio
                    ref="vo-2"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}paper-cans-bottles.mp3`}
                />
                <skoash.Audio
                    ref="vo-3"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}lets-clean-up.mp3`}
                />
            </skoash.MediaSequence>
            <div className="copy animated">
                Litter is trash<br/>
                Paper, cans, and bottles on the ground<br/>
                make a mess and can hurt wildlife<br/>
                and the environment.
            </div>
            <skoash.Image
                ref="image"
                className="banner animated"
                src={`${CMWN.MEDIA.IMAGE}lets-clean-up.png`}
            />
        </skoash.Screen>
    );
}
