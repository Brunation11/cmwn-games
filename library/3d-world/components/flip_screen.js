import classNames from 'classnames';

export default function (props, ref, key) {
  var onTransitionEnd;

  onTransitionEnd = function () {
    if (!_.get(props, 'data.layer2.complete')) return;
    skoash.trigger('updateState', {
      path: 'flip',
      data: {
        complete: true,
      },
    });
  };

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="flip"
      emitOnComplete={{
        name: 'flip',
      }}
    >
      <skoash.MediaSequence>
        <skoash.Audio
          type="voiceOver"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_Flip.mp3'}
        />
        <skoash.Audio
          type="sfx"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/Printing.mp3'}
          playTarget="layer1"
          sprite={[0, 1900]}
        />
        <skoash.Audio
          type="sfx"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/Printing.mp3'}
          playTarget="layer2"
          completeTarget="layer2"
          sprite={[1900, 1900]}
        />
      </skoash.MediaSequence>
      <skoash.Image
        className="printer"
        src={ENVIRONMENT.MEDIA + 'ImageAssets/img.flip.printer.png'}
      />
      <skoash.Image
        className={classNames('earned-flip', {
          show: _.get(props, 'data.flip.complete'),
        })}
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/3D-World_Earned_Flip.gif'}
      />
      <skoash.Image
        className="hidden"
        src={window.MEDIA_SERVER + 'Flips/3D%20world/3DW-%20Static%20Image%20Flip/3DW.EarnedFlip.png'}
      />
      <skoash.Image
        className="minion"
        src={ENVIRONMENT.MEDIA + 'ImageAssets/img.flip.minion.png'}
      />
      <skoash.Component
        checkComplete={false}
        complete={_.get(props, 'data.flip.complete')}
        className={classNames('static-flip', {
          layer1: _.get(props, 'data.layer1.playing'),
          layer2: _.get(props, 'data.layer2.playing') || _.get(props, 'data.layer2.complete'),
          move: _.get(props, 'data.layer2.complete'),
          hide: _.get(props, 'data.flip.complete'),
        })}
        onTransitionEnd={onTransitionEnd}
      />
      <p className="now">
        Now you’ve learned about <span>3D PRINTING</span><span>…</span>
      </p>
      <p className="lets">
        Let’s print you out<br/>
        a new <span>FLIP</span>
      </p>
    </skoash.Screen>
  );
}
