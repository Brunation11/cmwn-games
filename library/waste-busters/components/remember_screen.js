export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="remember"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'Remember.mp3'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'game1.intro.trees.png'}
            />
            <div className="frame square">
                <skoash.Image
                    className="banner"
                    src={CMWN.MEDIA.IMAGE + 'banner.png'}
                />
                <skoash.Image
                    className="remember"
                    src={CMWN.MEDIA.IMAGE + 'remember.1.png'}
                />
                <div className="content">
                    <p>
                        Always check with<br/>
                        an adult before picking<br/>
                        litter up outside!
                    </p>
                </div>
            </div>
            <div className="tree-1" />
            <div className="tree-2" />
            <div className="newspaper" />
        </skoash.Screen>
    );
}
