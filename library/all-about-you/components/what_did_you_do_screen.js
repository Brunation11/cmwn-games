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
            id="what-did-you-do"
        >
            <skoash.Audio
                ref="vo"
                type="voiceOver"
                src="media/assets/_audio/VOs/VO_WhatDid.mp3"
            />
            <skoash.Image
                ref="banner"
                className="banner animated"
                src="media/assets/_images/S_12/Text_12_WhatDidYouDo_.png"
            />
            <skoash.Image
                ref="penguin"
                className="penguin animated"
                src="media/assets/_images/S_12/IMG_12_Penguins.png"
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
                    ref="never-bullied"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_IveNeverBeenBullied.mp3"
                    complete
                    delay={1000}
                />
                <skoash.Audio
                    ref="didnt-bother"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_DidntBotherMe.mp3"
                    complete
                    delay={1000}
                />
                <skoash.Audio
                    ref="something-mean"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_SaidSomething.mp3"
                    complete
                    delay={1000}
                />
                <skoash.Audio
                    ref="asked-a-friend"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_AskedFriend.mp3"
                    complete
                    delay={1000}
                />
                <skoash.Audio
                    ref="reported-it"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_Reported.mp3"
                    complete
                    delay={1000}
                />
            </MediaCollection>

            <Selectable
                ref="selectable"
                selectClass="HIGHLIGHTED"
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
                    <skoash.ListItem className="never-bullied animated" data-ref="never-bullied" />,
                    <skoash.ListItem className="didnt-bother animated" data-ref="didnt-bother" />,
                    <skoash.ListItem className="something-mean animated" data-ref="something-mean" />,
                    <skoash.ListItem className="asked-a-friend animated" data-ref="asked-a-friend" />,
                    <skoash.ListItem className="reported-it animated" data-ref="reported-it" />
                ]}
            />
            <div ref="meter" className="meter animated"></div>
        </skoash.Screen>
    );
}
