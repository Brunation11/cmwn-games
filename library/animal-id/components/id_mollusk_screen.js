import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-mollusk',
        vo: 'media/audio/VO_8-1.mp3',
        title: 'media/images/img_8.1.png',
        correct: 'media/audio/drag-correct.mp3',
        revealVO: 'media/audio/VO_8-2.mp3',
        revealContent: (
            <h3>
                A mollusk is an invertebrate<br/>
                animal (no spine) that lives in water<br/>
                or damp areas and usually has<br/>
                an external shell.
            </h3>
        ),
        selectables: {
            octopus: 'incorrect',
            clam: 'correct',
            stingray: 'incorrect',
            scorpian: 'incorrect',
        }
    });
}
