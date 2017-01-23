export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-drain"
        >
            <skoash.MediaSequence>
                <skoash.Audio
                    ref="info"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WeNowUse.mp3`}
                    completeTarget="vo"
                />
                <skoash.Audio ref="drain" type="sfx" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/Spin.mp3`} />
            </skoash.MediaSequence>
            <skoash.Image src={`${ENVIRONMENT.MEDIA_GAME}ImageAssets/img_12.1.png`}/>
            <p className={'animated ' + (_.get(props, 'data.vo.complete') ? 'draining' : '')}>
                Today we use<br />
                127% more water<br />
                than we did in 1950!<br /><br />
                Most of that water<br />
                swirls down
                the drain.
            </p>
        </skoash.Screen>
    );
}
