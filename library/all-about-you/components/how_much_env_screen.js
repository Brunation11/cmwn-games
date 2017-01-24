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
            id="how-much-env"
        >
            <skoash.MediaSequence
                ref="vo"
                checkComplete={true}
            >
                <skoash.Audio
                    ref="vo-how-much"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_HowMuch.mp3"
                />
                <skoash.Audio
                    ref="vo-enviro-climate"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_EnviroClimate.mp3"
                />
            </skoash.MediaSequence>

            <skoash.Image
                ref="banner"
                className="banner animated"
                src="media/assets/_images/S_13/Text_13_How+much+do+you+know.png"
            />
            <skoash.Image
                ref="penguin"
                className="penguin animated"
                src="media/assets/_images/S_13/IMG_13_Penguins.png"
            />
            <div ref="frame" className="frame animated"></div>
            <skoash.Image
                ref="text-environment"
                className="text-environment animated"
                src="media/assets/_images/S_13/Text_13_EnvironmentClimateChange.png"
            />
            <div ref="sub-frame" className="sub-frame animated"></div>
            <skoash.Image
                ref="icon"
                className="icon animated"
                src="media/assets/_images/S_13/IMG_13_Plant.png"
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
                <skoash.MediaSequence
                    ref="a-lot"
                    checkComplete={true}
                    silentOnStart={true}
                >
                    <skoash.Audio
                        ref="a-lot-expression"
                        type="voiceOver"
                        src="media/assets/_audio/_Expressions/S_ALot.mp3"
                        complete
                    />
                    <skoash.Audio
                        ref="a-lot-vo"
                        type="voiceOver"
                        src="media/assets/_audio/VOs/VO_ALot.mp3"
                        complete
                    />
                </skoash.MediaSequence>
                <skoash.MediaSequence
                    ref="a-little"
                    checkComplete={true}
                    silentOnStart={true}
                >
                    <skoash.Audio
                        ref="a-little-expression"
                        type="voiceOver"
                        src="media/assets/_audio/_Expressions/S_ALittle.mp3"
                        complete
                    />
                    <skoash.Audio
                        ref="a-little-vo"
                        type="voiceOver"
                        src="media/assets/_audio/VOs/VO_ALittle.mp3"
                        complete
                    />
                </skoash.MediaSequence>
                <skoash.MediaSequence
                    ref="not-at-all"
                    checkComplete={true}
                    silentOnStart={true}
                >
                    <skoash.Audio
                        ref="not-at-all-expression"
                        type="voiceOver"
                        src="media/assets/_audio/_Expressions/S_NotAtAll.mp3"
                        complete
                    />
                    <skoash.Audio
                        ref="not-at-all-vo"
                        type="voiceOver"
                        src="media/assets/_audio/VOs/VO_NotAt.mp3"
                        complete
                    />
                </skoash.MediaSequence>
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
                    <skoash.ListItem className="a-lot animated" data-ref="a-lot" />,
                    <skoash.ListItem className="a-little animated" data-ref="a-little" />,
                    <skoash.ListItem className="not-at-all animated" data-ref="not-at-all" />
                ]}
            />
            <div ref="meter" className="meter animated"></div>
        </skoash.Screen>
    );
}
