import classNames from 'classnames';

const flipEarned = CMWN.MEDIA.BASE +
    'Flips/PLT%20Wastebuster%20Flip/PLT%20-%20Animated%20Earned%20Flip/PLT.AnimatedearnedFlip.gif';

const flipStatic = CMWN.MEDIA.BASE +
    'Flips/PLT%20Wastebuster%20Flip/PLT-%20Static%20Image%20Flip/PLT.StaticFlip.png';

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
                src={CMWN.MEDIA.VO + 'filp.mp3'}
                playTarget="vo"
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'frame.square.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'flip.trees.png'}
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
                        src={CMWN.MEDIA.IMAGE + 'flip.text.png'}
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
