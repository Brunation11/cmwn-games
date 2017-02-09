import classNames from 'classnames';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="better-ways"
        >
            <skoash.MediaSequence>
                <skoash.Audio
                    type="voiceOver"
                    src={CMWN.MEDIA.VO + 'AreThere.mp3'}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={CMWN.MEDIA.EFFECT + 'YesShout.mp3'}
                    playTarget="yes"
                />
            </skoash.MediaSequence>
            <skoash.Component className="frame-1">
                <skoash.Component className="intro-image-3" />
                <p>
                    Are there better ways<br/>
                    YOU can keep waste<br/>
                    out of a landfill?
                </p>
            </skoash.Component>
            <skoash.Image
                className={classNames('yes animated', {
                    bounce: _.get(props, 'data.yes.playing')
                })}
                src={CMWN.MEDIA.IMAGE + 'yes.png'}
            />
        </skoash.Screen>
    );
}
