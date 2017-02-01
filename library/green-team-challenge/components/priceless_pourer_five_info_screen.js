import InfoScreenComponent from './info_screen_component';

export default function (props, ref, key) {
    return InfoScreenComponent(props, ref, key, {
        id: 'priceless-pourer-five-info',
        content: (
            <p>
                Let's take this to the next level
            </p>
        ),
    });
}
