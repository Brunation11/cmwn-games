import InfoComponent from './info_component';

export default function (props, ref, key) {
    return InfoComponent(props, ref, key, {
        id: 'info-good-job',
        label: 'GoodJob',
        copy: (
            <span>
                Your choices keep you safe!
            </span>
        )
    });
}
