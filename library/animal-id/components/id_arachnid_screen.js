import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-arachnid',
        vo: 'media/audio/VO_6-1.mp3',
        title: 'media/images/img_6.1.png',
        correct: 'media/audio/drag-correct.mp3',
        revealVO: 'media/audio/VO_6-2.mp3',
        revealContent: (
            <h3>
                An arachnid has 4 pairs<br/>
                of segmented legs and a body<br/>
                that is divided into two parts.
            </h3>
        ),
        selectables: {
            grasshoper: 'incorrect',
            spider: 'correct',
            ladybug: 'incorrect',
            roach: 'incorrect',
        }
    });
}
