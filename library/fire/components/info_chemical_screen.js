import _ from 'lodash';

import MediaCollection from 'shared/components/media_collection/0.1';

const STATES = [
    {
        name: 'VO',
        audio: 'children-0',
        interval: 2000,
    },
    {
        name: 'FLAME',
        audio: 'children-1',
        interval: 1000
    },
    {
        name: 'EQUAL',
        audio: 'children-2',
        interval: 700
    },
    {
        name: 'TEXT',
        audio: 'children-3',
    },
];

export default function (props, ref, key) {

    function play(open, i) {
        var state = STATES[i];

        open += ' ' + state.name;
        skoash.trigger('updateState', {
            path: 'states',
            data: {
                open,
                play: state.audio,
            }
        });

        if (state.interval) {
            setTimeout(() => {
                play(open, ++i);
            }, state.interval);
        }
    }

    function init() {
        setTimeout(() => {
            play('', 0);
        }, 100);
    }

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-chemical"
            onOpen={init}
            className={_.get(props, 'data.states.open', null)}
        >
            <MediaCollection ref="media-collection" play={_.get(props, 'data.states.play', null)}>
                <skoash.Audio type="voiceOver" src="media/S_2/vo_ChemicalReaction.mp3" />
                <skoash.Audio type="sfx" src="media/S_2/S_2.2.mp3" />
                <skoash.Audio type="sfx" src="media/S_2/S_2.3.mp3" />
                <skoash.Audio type="sfx" src="media/S_2/S_2.4.mp3" />
            </MediaCollection>
            <skoash.Image className="animated" src="media/S_2/img_2.1.png" />
            <skoash.Image className="animated flame" src="media/S_2/img_2.2.png" />
            <skoash.Image className="animated equal" src="media/S_2/img_2.3.png" />
            <h2 className="animated text">
                Chemical<br />Reaction
            </h2>
        </skoash.Screen>
    );
}

