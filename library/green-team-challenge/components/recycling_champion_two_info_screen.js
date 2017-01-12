import InfoScreenComponent from './info_screen_component';

export default function (props, ref, key) {
    return InfoScreenComponent(props, ref, key, {
        id: 'recycling-champion-two-info',
        content: (
            <p>
                Your Sorting Skills
            </p>
        ),
    });
}
