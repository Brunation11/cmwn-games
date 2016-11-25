export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="ios-splash"
            checkComplete={false}
            completeDelay={6000}
            nextDelay={3000}
            completeOnStart
            hidePrev
        >
            <skoash.Image className="hidden" src="../shared/images/ios_start_ball.png" />
            <skoash.Image className="hidden" src="../shared/images/ios_start_ball_anim.gif" />
        </skoash.Screen>
    );
}
