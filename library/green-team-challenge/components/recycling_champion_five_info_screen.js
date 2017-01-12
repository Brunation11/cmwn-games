import InfoScreenComponent from './info_screen_component';

export default function (props, ref, key) {
    return InfoScreenComponent(props, ref, key, {
        id: 'recycling-champion-five-info',
        content: (
            <p>
                Master this level
            </p>
        ),
    });
}
