export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="congratulations"
        >
            <skoash.Image
                className="hidden"
                src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.minion.png'}
            />
            <skoash.Audio
                type="voiceOver"
                src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_Congratulations.mp3'}
            />
            <div>
                CONGRATULATIONS!
            </div>
            <div>
                YOU’VE
            </div>
            <div>
                WON
            </div>
            <div>
                THE
            </div>
            <div>
                GAME
            </div>
        </skoash.Screen>
    );
}
