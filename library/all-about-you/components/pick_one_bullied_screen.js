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
            id="pick-one-bullied"
        >
            <skoash.Audio
                ref="vo"
                type="voiceOver"
                src="media/assets/_audio/VOs/VO_EverWorried.mp3"
            />
            <skoash.Image
                ref="banner"
                className="banner animated"
                src="media/assets/_images/S_11/Text_11_HaveYouEver.png"
            />
            <skoash.Image
                ref="penguin"
                className="penguin animated"
                src="media/assets/_images/S_11/IMG_11_Penguins.png"
            />
            <div ref="frame" className="frame animated"></div>

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
                    ref="yes"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_Yes.mp3"
                    complete
                    delay={1000}
                />
                <skoash.Audio
                    ref="no"
                    type="voiceOver"
                    src="media/assets/_audio/VOs/VO_No.mp3"
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
                  <skoash.ListItem className="yes animated" data-ref="yes" />,
                  <skoash.ListItem className="no animated" data-ref="no" />
              ]}
            />

            <div ref="meter" className="meter animated"></div>
        </skoash.Screen>
    );
}
