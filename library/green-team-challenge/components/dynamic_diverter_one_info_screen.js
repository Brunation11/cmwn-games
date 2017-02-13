import InfoScreenComponent from './info_screen_component';

export default function (props, ref, key) {
    return InfoScreenComponent(props, ref, key, {
        id: 'dynamic-diverter-one-info',
        className: 'exhaust',
        content: (
            <p>
                Just because it's in the bin-<br/>
                doesn't mean it should be.<br/>
                <br/>
                Drag items to the vent<br/>
                that should not be in<br/>
                the bin to be resorted.
            </p>
        ),
        vo: 'DragToBin',
        image: `${CMWN.MEDIA.IMAGE}exhaust.png`,
    });
}
