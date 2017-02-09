export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="ding-dong"
            onComplete={function () {
                this.next();
            }}
        >
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}frame.quit.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprites.h1.png`}
            />

            <skoash.MediaSequence>
                <skoash.Audio
                    ref="ding-dong"
                    type="sfx"
                    src={`${MEDIA.EFFECT}DoorbellLong.mp3`}
                />
            </skoash.MediaSequence>
            <skoash.Image
                className="animated infinite"
                src={`${MEDIA.IMAGE}ding.dong.png`}
            />
        </skoash.Screen>
    );
}
