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
            id="pick-one-powerful"
        >
            <skoash.Audio
                ref="vo"
                type="voiceOver"
                src="media/assets/_audio/VOs/VO_Powerful.mp3"
            />
            <skoash.Image
                ref="banner"
                className="banner animated"
                src="media/assets/_images/S_5/img-05-text-top-01.png"
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
                    ref="very-powerful"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_Very.mp3"
                    complete
                    delay={1000}
                />
                <skoash.Audio
                    ref="not-powerful"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_DontFeel.mp3"
                    complete
                    delay={1000}
                />
                <skoash.Audio
                    ref="unsure"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_Unsure.mp3"
                    complete
                    delay={1000}
                />
                <skoash.Audio
                    ref="dont-care"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_DontCare.mp3"
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
                    <skoash.ListItem className="very-powerful animated" data-ref="very-powerful" />,
                    <skoash.ListItem className="not-powerful animated" data-ref="not-powerful" />,
                    <skoash.ListItem className="unsure animated" data-ref="unsure" />,
                    <skoash.ListItem className="dont-care animated" data-ref="dont-care" />
                ]}
            />
            <div ref="meter" className="meter animated"></div>
        </skoash.Screen>
    );
}
