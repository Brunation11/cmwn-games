export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            checkComplete={false}
            completeDelay={3000}
            completeOnStart={true}
            playOnStart="bird-wing-flap"
        >
            <skoash.Audio ref="bird-wing-flap" type="sfx" delay={3000} src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/BirdWingFlap.mp3`} complete checkComplete={false} />
            <skoash.Image className="animated title" src={`${ENVIRONMENT.MEDIA_GAME}ImageAssets/img_1.1.png`} />
            <skoash.Sprite
                className="falcon"
                src={`${ENVIRONMENT.MEDIA_GAME}SpritesAnimations/Falcon_5-01`}
                frame={0}
                frames={9}
                animate={true}
            />
        </skoash.Screen>
    );
}
