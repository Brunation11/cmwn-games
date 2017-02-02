import _ from 'lodash';

import SelectableAudio from 'shared/components/selectable_audio/0.1';
import Reveal from 'shared/components/reveal/0.1';

const REVEAL_MSG = 0;

class WhoScreenComponent extends skoash.Screen {
    open(opts) {
        super.open(opts);

        this.checkComplete = null;
        this.incomplete();
        this.refs['selectable-audio'].incompleteRefs();
        this.checkComplete = super.checkComplete;
    }
}

export default function (props, ref, key) {
    var revealOpen = _.get(props, 'data.reveal.open', null) !== null ? 'REVEAL-OPEN' : '';

    return (
        <WhoScreenComponent
            {...props}
            ref={ref}
            key={key}
            id="who"
            className={revealOpen}
            onOpen={() => {
                skoash.trigger('updateState', {
                    path: 'reveal',
                    data: {
                        open: null,
                    }
                });
            }}
        >
            <skoash.Audio ref="title" type="voiceOver" src="media/S_6/vo_FireBreaksOut2.mp3" />
            <skoash.Image className="animated" src="media/S_6/img_6.1.png" />
            <SelectableAudio
                ref="selectable-audio"
                onComplete={() => {
                    skoash.trigger('updateState', {
                        path: 'reveal',
                        data: {
                            open: REVEAL_MSG,
                        }
                    });
                }}
                audioAssets={[
                    <skoash.Audio type="voiceOver" src="media/S_6/vo_Builder.mp3" complete />,
                    <skoash.Audio type="voiceOver" src="media/S_6/vo_Plumber.mp3" complete />,
                    <skoash.Audio type="voiceOver" src="media/S_6/vo_Firefighter.mp3" />,
                    <skoash.Audio type="voiceOver" src="media/S_6/vo_Chef.mp3" complete />,
                    <skoash.Audio data-ref="correct" type="sfx" src="media/S_6/S_6.2.mp3" />,
                    <skoash.Audio data-ref="incorrect" type="sfx" src="media/S_6/S_6.3.mp3" complete />,
                ]}
                selectableList={[
                    <skoash.ListItem className="animated" />,
                    <skoash.ListItem className="animated" />,
                    <skoash.ListItem className="animated" correct />,
                    <skoash.ListItem className="animated" />,
                ]}
            />
            <Reveal
                ref="reveal"
                openReveal={_.get(props, 'data.reveal.open', null)}
                assets={[
                    <skoash.Audio type="voiceOver" src="media/S_6/vo_FirefightingTough.mp3" />
                ]}
                list={[
                    <skoash.Component className="frame">
                    <skoash.Image className="animated" src="media/S_6/img_6.7.png" />
                    <div className="animated">
                        <skoash.Image className="background" src="media/_Frames/FR_2.png" />
                        Firefighting is one of the<br />
                        toughest jobs in the world<br />
                        and demands total teamwork.
                    </div>
                  </skoash.Component>
                ]}
            />
        </WhoScreenComponent>
    );
}
