import InfoComponent from './info_component';

export default function (props, ref, key) {
    return InfoComponent(props, ref, key, {
        id: 'info-lets-see',
        label: 'LetsSee',
        copy: (
            <span>
                You should not open the door<br />of your house to just anybody.
            </span>
        )
    });
}
