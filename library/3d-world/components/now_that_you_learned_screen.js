export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="now-that-you-learned"
        >
            <skoash.Image
                className="hidden"
                src={MEDIA.GAME + 'SpritesAnimations/sprite.nav.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.GAME + 'SpritesAnimations/sprite.minion.png'}
            />
            <skoash.Audio
                type="voiceOver"
                src={MEDIA.GAME + 'SoundAssets/vos/VO_make_a.mp3'}
            />
            <div>
                Now that you’ve learned<br/>
                so much about <span>3D PRINTING</span><br/>
                and what it can do, it’s time to make<br/>
                a list of what YOU would like to print!
            </div>
        </skoash.Screen>
    );
}
