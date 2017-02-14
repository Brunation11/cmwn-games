import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-herbivore',
        vo: 'media/audio/VO_10-1.mp3',
        title: 'media/images/img_10.1.png',
        correct: 'media/audio/drag-correct.mp3',
        revealVO: 'media/audio/VO_10-2.mp3',
        revealContent: <h3>An herbivore is an animal<br/>that eats only plants.</h3>,
        selectables: {
            deer: 'correct',
            possum: 'incorrect',
            tiger: 'incorrect',
            skunk: 'incorrect',
        }
    });
}
