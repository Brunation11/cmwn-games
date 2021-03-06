import _ from 'lodash';

import MediaCollection from 'shared/components/media_collection/0.1';
import Selectable from 'shared/components/selectable/0.1';

import collectData from './collect_data.js';
import loadData from './load_data.js';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            collectData={collectData}
            loadData={loadData}
            id="emoji-compassion"
        >
            <skoash.Audio
                ref="vo"
                type="voiceOver"
                src="media/assets/_audio/VOs/VO_Comp.mp3"
            />
            <skoash.Image
                ref="penguins"
                className="penguins animated"
                src="media/assets/_images/S_8/img-s8-main-penguins-01.png"
            />
            <div ref="frame" className="frame animated"></div>
            <div ref="sub-frame" className="sub-frame animated"></div>
            <skoash.Image
                ref="penguins-compassion"
                className="penguins-compassion animated"
                src="media/assets/_images/S_8/img_s8_penguins_compassion.png"
            />

            <MediaCollection
                complete={_.get(props, 'data.game.complete', false)}
                play={_.get(props, 'data.reveal.correct', null)}
                onPlay={function () {
                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            correct: null
                        }
                    });
                }}
            >
                <skoash.Audio ref="correct" type="sfx" src="media/assets/_audio/_Buttons/S_BU_1.mp3" />
            </MediaCollection>

            <MediaCollection
                complete={_.get(props, 'data.game.complete', false)}
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={function () {
                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            open: null
                        }
                    });
                }}
            >
                <skoash.Audio
                    ref="happy"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_Happy.mp3"
                    complete
                    delay={1000}
                />
                <skoash.Audio
                    ref="confused"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_Confused.mp3"
                    complete
                    delay={1000}
                />
                <skoash.Audio
                    ref="thankful"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_Thankful.mp3"
                    complete
                    delay={1000}
                />
            </MediaCollection>

            <Selectable
                ref="selectable"
                selectRespond={function (message) {
                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            correct: 'correct',
                            open: message
                        }
                    });
                }}
                completeListOnClick={true}
                chooseOne
                allowDeselect
                list={[
                    <skoash.ListItem className="happy animated" data-ref="happy" />,
                    <skoash.ListItem className="confused animated" data-ref="confused" />,
                    <skoash.ListItem className="thankful animated" data-ref="thankful" />
                ]}
            />
            <div ref="meter" className="meter animated"></div>
        </skoash.Screen>
    );
}
