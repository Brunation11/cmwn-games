import Selectable from 'shared/components/selectable/0.1';
import Reveal from 'shared/components/reveal/0.1';
import MediaCollection from 'shared/components/media_collection/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="help-the-world"
    >
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.minion.png'}
      />
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.realworldgallery.png'}
      />
      <skoash.Audio
        type="voiceOver"
        src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_and_many.mp3'}
      />
      <MediaCollection
        play={_.get(props, 'data.reveal.open')}
      >
        <skoash.Audio
          type="voiceOver"
          ref="designer"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_Product_Designers.mp3'}
        />
        <skoash.Audio
          type="voiceOver"
          ref="architect"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_Architects.mp3'}
        />
        <skoash.Audio
          type="voiceOver"
          ref="surgeon"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_Surgeons.mp3'}
        />
        <skoash.Audio
          type="voiceOver"
          ref="engineer"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_Engineers.mp3'}
        />
        <skoash.Audio
          type="voiceOver"
          ref="dentist"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_Dentists.mp3'}
        />
        <skoash.Audio
          type="voiceOver"
          ref="artist"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_Artists.mp3'}
        />
      </MediaCollection>
      <div>
        …and many ways to help the world<br/>
        with the wonderful things you create!<br/>
        Click on the image to expand.
      </div>
      <Selectable
        dataTarget="selectable"
        selectClass="HIGHLIGHTED"
        list={[
          <skoash.Component
            type="li"
            data-ref="designer"
          />,
          <skoash.Component
            type="li"
            data-ref="architect"
          />,
          <skoash.Component
            type="li"
            data-ref="surgeon"
          />,
          <skoash.Component
            type="li"
            data-ref="engineer"
          />,
          <skoash.Component
            type="li"
            data-ref="dentist"
          />,
          <skoash.Component
            type="li"
            data-ref="artist"
          />,
        ]}
      />
      <Reveal
        openTarget="reveal"
        openReveal={_.get(props, 'data.selectable.target.props.data-ref')}
        list={[
          <skoash.Component
            type="li"
            data-ref="designer"
          >
            <h3>
              Product designers
            </h3>
            <div>
              design and print useful objects for others!
            </div>
          </skoash.Component>,
          <skoash.Component
            type="li"
            data-ref="architect"
          >
            <h3>
              Architects
            </h3>
            <div>
              create plans for housing that will be 3D printed!
            </div>
          </skoash.Component>,
          <skoash.Component
            type="li"
            data-ref="surgeon"
          >
            <h3>
              Surgeon
            </h3>
            <div>
              turn x-rays into 3D models and repair injured body parts!
            </div>
          </skoash.Component>,
          <skoash.Component
            type="li"
            data-ref="engineer"
          >
            <h3>
              Engineers
            </h3>
            <div>
              make 3D models of you creations,<br/>
              and then print the real thing!
            </div>
          </skoash.Component>,
          <skoash.Component
            type="li"
            data-ref="dentist"
          >
            <h3>
              Dentists
            </h3>
            <div>
              print replacement teeth for your patients!
            </div>
          </skoash.Component>,
          <skoash.Component
            type="li"
            data-ref="artist"
          >
            <h3>
              Artists
            </h3>
            <div>
              express themselves through the magic of 3D printing!
            </div>
          </skoash.Component>,
        ]}
      />
    </skoash.Screen>
  );
}
