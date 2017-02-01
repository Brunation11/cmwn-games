import InfoScreenComponent from './info_screen_component';

export default function (props, ref, key) {
    return InfoScreenComponent(props, ref, key, {
        id: 'priceless-pourer-three-info',
        content: (
            <p>
                Success is twice as nice
            </p>
        ),
    });
}
