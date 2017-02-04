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
                src={`${ENVIRONMENT.MEDIA}ImageAssets/frame.quit.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${ENVIRONMENT.MEDIA}SpritesAnimations/sprites.h1.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${ENVIRONMENT.MEDIA}ImageAssets/goodjob.png`}
            />

            <skoash.Audio
                ref="vo"
                type="voiceOver"
                src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/${opts.label}.mp3`}
            />
            <skoash.Component className="frame">
                {opts.copy}
            </skoash.Component>
            <skoash.Image src={`${ENVIRONMENT.MEDIA}ImageAssets/dog.quit.png`} />
        </skoash.Screen>
    );
}
