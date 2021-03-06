import classNames from 'classnames';

const flipEarned = MEDIA.BASE +
    'Flips/Wastepro%20Flip/WP%20-%20Animated%20Earned%20Flip/WP.AnimatedEarnedFlip.gif';

const flipStatic = MEDIA.BASE +
    'Flips/Wastepro%20Flip/WP%20-%20Static%20Image%20Flip/WP.StaticAnimatedFlip.gif';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
        >
            <skoash.Audio
                type="voiceOver"
                src={MEDIA.VO + 'filp.mp3'}
                playTarget="vo"
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.IMAGE + 'frame.square.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.SPRITE + 'flip.trees.png'}
            />
            <skoash.Component className="frame square">
                <skoash.Component className="content">
                    <skoash.Image
                        className={classNames('flip', {
                            show: _.get(props, 'data.vo.playing')
                        })}
                        src={flipEarned}
                    />
                    <skoash.Image
                        className={classNames('flip', {
                            show: !_.get(props, 'data.vo.playing')
                        })}
                        src={flipStatic}
                    />
                    <skoash.Image
                        className="title"
                        src={MEDIA.IMAGE + 'flip.text.png'}
                    />
                    <p>
                        Thanks for taking<br/>
                        the time to learn<br/>
                        about how you<br/>
                        can help the<br/>
                        environment!
                    </p>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
