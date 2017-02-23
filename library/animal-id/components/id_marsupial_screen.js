import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-marsupial',
        vo: 'media/audio/VO_4-1.mp3',
        title: 'media/images/img_5.1.png',
        correct: 'media/audio/drag-correct.mp3',
        revealVO: 'media/audio/VO_4-2.mp3',
        revealContent: (
            <h3>
                Marsupials are mammals.<br/>
                When they are born, they are not<br/>
                completely developed.<br/>
                They continue to grow<br/>
                in their mother’s pouch.
            </h3>
        ),
        selectables: {
            koala: 'correct',
            beaver: 'incorrect',
            sloth: 'incorrect',
            ostrich: 'incorrect',
        }
    });
}
