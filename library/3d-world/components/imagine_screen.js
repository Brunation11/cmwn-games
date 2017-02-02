import classNames from 'classnames';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="imagine"
        >
            <skoash.Audio
                type="sfx"
                ref="start"
                src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/animation_appear.mp3'}
            />
            <skoash.MediaSequence>
                <skoash.Audio
                    type="sfx"
                    src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/text_type.mp3'}
                />
                <skoash.Audio
                    type="sfx"
                    src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/text_type.mp3'}
                    sprite={[0, 2000]}
                />
            </skoash.MediaSequence>
            <skoash.MediaSequence>
                <skoash.Audio
                    type="voiceOver"
                    src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_imagine.mp3'}
                    completeTarget="imagine"
                />
                <skoash.Audio
                    type="voiceOver"
                    src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_it_already.mp3'}
                />
            </skoash.MediaSequence>
            <skoash.Image
                className="printer show"
                src={ENVIRONMENT.MEDIA + 'ImageAssets/img.printer01.png'}
            />
            <skoash.Image
                className={classNames('question', {
                    show: !_.get(props, 'data.imagine.complete')
                })}
                src={ENVIRONMENT.MEDIA + 'SpritesAnimations/wand.gif'}
            />
            <skoash.Image
                className={classNames('answer', {
                    show: _.get(props, 'data.imagine.complete')
                })}
                src={ENVIRONMENT.MEDIA + 'SpritesAnimations/wand.and.printer_.gif'}
            />
            <skoash.Image
                className="hidden"
                src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.minion.png'}
            />
            <skoash.Image
                className="hidden"
                src={ENVIRONMENT.MEDIA + 'ImageAssets/intro.speech.balloon.png'}
            />
            <div className="right">
                <div
                    className={classNames('words', 'imagine', {
                        start: !_.get(props, 'data.imagine.complete')
                    })}
                >
                    <div>
                        <p>
                            Imagine a magical item
                        </p>
                    </div>
                    <div>
                        <p>
                            that can make anything
                        </p>
                    </div>
                    <div>
                        <p>
                            you can think of!
                        </p>
                    </div>
                </div>
                <div
                    className={classNames('words', 'exists', {
                        start: _.get(props, 'data.imagine.complete')
                    })}
                >
                    <div>
                        <p>
                            It already exists today.
                        </p>
                    </div>
                    <div>
                        <p>
                            It's called 3D printing!
                        </p>
                    </div>
                </div>
                <div className="minion" />
            </div>
        </skoash.Screen>
    );
}
