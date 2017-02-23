import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-mammal',
        vo: 'media/audio/VO_7-1.mp3',
        title: 'media/images/img_7.1.png',
        correct: 'media/audio/S_7.4.mp3',
        revealVO: 'media/audio/VO_7-2.mp3',
        revealContent: (
            <h3>
                A mammal feeds milk to its young<br/>
                and is a warm blooded<br/>
                vertebrate (with a spine).
            </h3>
        ),
        selectables: {
            snake: 'incorrect',
            pelican: 'incorrect',
            dragon: 'incorrect',
            dolphin: 'correct',
        }
    });
}
