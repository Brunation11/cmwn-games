import Timer from 'shared/components/timer/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="timer"
        >
            <Timer
                ref="timer"
                countDown={true}
                timeout={3000}
            />
        </skoash.Screen>
    );
}
