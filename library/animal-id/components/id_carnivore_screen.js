import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-carnivore',
        vo: 'media/audio/VO_3-1.mp3',
        title: 'media/images/img_3.1.png',
        correct: 'media/audio/S_3.2.mp3',
        revealVO: 'media/audio/VO_3-2.mp3',
        revealContent: <h3>A carnivore is an animal <br /> that eats only meat.</h3>,
        selectables: {
            beaver: 'incorrect',
            gorilla: 'incorrect',
            lion: 'correct',
            giraffe: 'incorrect',
        }
    });
}
