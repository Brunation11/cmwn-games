export default function (props, ref, key, opts = {}) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={opts.id}
        >
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}frame.quit.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprites.h1.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}goodjob.png`}
            />

            <skoash.Audio
                ref="vo"
                type="voiceOver"
                src={`${MEDIA.VO}${opts.label}.mp3`}
            />
            <skoash.Component className="frame">
                {opts.copy}
            </skoash.Component>
            <skoash.Image src={`${MEDIA.IMAGE}dog.quit.png`} />
        </skoash.Screen>
    );
}
