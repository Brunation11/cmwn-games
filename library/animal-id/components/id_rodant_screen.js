import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-rodant',
        vo: 'media/audio/VO_5-1.mp3',
        title: 'media/images/img_4.1.png',
        correct: 'media/audio/drag-correct.mp3',
        revealVO: 'media/audio/VO_5-2.mp3',
        revealContent: (
            <h3>Rodents gnaw and have long incisor<br/>teeth that never stop growing.</h3>
        ),
        selectables: {
            kangaroo: 'incorrect',
            cow: 'incorrect',
            falcon: 'incorrect',
            chipmunk: 'correct',
        }
    });
}
