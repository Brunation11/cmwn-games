import Flyer from 'shared/components/flyer/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flyer"
        >
            <Flyer
                ref="flyer"
            />
        </skoash.Screen>
      );
}
