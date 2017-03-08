import ClassNames from 'classnames';

export default function (props, ref, key) {
    function getClassNames(ref2) {
        var animated = _.get(props, `data[${ref2}].playing`) ||
            props.gameState.currentScreenIndex === 12;
        return ClassNames(ref2, {animated});
    }

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            className={ClassNames({
                STAY: props.gameState.currentScreenIndex === 12
            })}
            id="what-need"
        >
            <skoash.MediaSequence
                ref="vo"
                checkComplete={true}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-what-need.mp3`}
                />
                <skoash.Audio
                    playTarget="lids"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-lids.mp3`}
                />
                <skoash.Audio
                    playTarget="scissors"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-scissors.mp3`}
                />
                <skoash.Audio
                    playTarget="markers"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-markers.mp3`}
                />
                <skoash.Audio
                    playTarget="polish"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-polish.mp3`}
                />
            </skoash.MediaSequence>
            <div className="left animated" />
            <div className="right">
                <div className="animated" />
            </div>
            <ul>
                <li className={getClassNames('lids')}>
                    <span>The plastic lids</span>
                </li>
                <li className={getClassNames('scissors')}>
                    <span>Utility scissors</span>
                </li>
                <li className={getClassNames('markers')}>
                    <span>Markers</span>
                </li>
                <li className={getClassNames('polish')}>
                    <span>Colored nail polish<br />&nbsp; (or) acrylic paint</span>
                </li>
            </ul>
        </skoash.Screen>
    );
}

