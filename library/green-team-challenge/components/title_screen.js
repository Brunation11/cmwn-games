import 'shared/effects/index';

const FIREWORKS = 'fireworks';

const onStart = function () {
    window.CMWN.makeEffect('fireworks', ReactDOM.findDOMNode(this), {
        backgroundImage: ReactDOM.findDOMNode(this.refs.image),
    });
};

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
        >
            <h3 content="Green Team Challenge" />
            <skoash.Image
                className="trash"
                src={`${CMWN.MEDIA.IMAGE}titletrashcan.png`}
            />
            <skoash.Image
                className="character"
                src={`${CMWN.MEDIA.IMAGE}greenteamcharac.png`}
            />
            <skoash.Image
                className="tray"
                src={`${CMWN.MEDIA.IMAGE}titletray.png`}
            />
            <skoash.Component
                className={FIREWORKS}
                ref={FIREWORKS}
                onStart={onStart}
            >
                <skoash.Image
                    ref="image"
                    src={`${CMWN.MEDIA.IMAGE}titlescrnbg.jpg`}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
