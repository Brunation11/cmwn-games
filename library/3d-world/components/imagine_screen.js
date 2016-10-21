import classNames from 'classnames';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="imagine"
    >
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
        className={classNames('question', {
          'show': !_.get(props, 'data.imagine.complete')
        })}
        src="media/_Animations/frame2-wand.gif"
      />
      <skoash.Image
        className={classNames('answer', {
          'show': _.get(props, 'data.imagine.complete')
        })}
        src="media/_Animations/frame3-wandandprinter.gif"
      />
      <skoash.Image
        className="hidden"
        src="media/_sprites/spritesheet-minion-characters_.png"
      />
      <skoash.Image
        className="hidden"
        src="media/03-05/img-speechballoon.png"
      />
      <div className="right">
        {/*
          <skoash.Image
            className="text imagine"
            src="media/03-05/text-01.png"
          />
          <skoash.Image
            className="text already"
            src="media/03-05/text-01.png"
          />
        */}
        <div
          className={classNames('words', 'imagine', {
            'show': !_.get(props, 'data.imagine.complete')
          })}
        >
          <div>
            Imagine a magical item
          </div>
          <div>
            that can make anything
          </div>
          <div>
            you can think of!_
          </div>
        </div>
        <div
          className={classNames('words', 'exists', {
            'show': _.get(props, 'data.imagine.complete')
          })}
        >
          <div>
            It already exists today.
          </div>
          <div>
            It's called 3D printing!_
          </div>
        </div>
        <div className="minion" />
      </div>
    </skoash.Screen>
  );
}
