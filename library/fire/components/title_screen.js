import CursorCanvas from 'shared/components/cursor_canvas/0.1';

export default function (props, ref, key) {

    function random(min, max) {
        return Math.random() * (max - min) * min;
    }

    function particleGenerator() {
        var particle = {
            amount: 500,
            velocityY: -2,
            velocityX: (random(1, 10) - 5) / 10,
            size: random(3, 5) / 10,
            alpha: 1,
            delta: {
                vy: 0.99,
                vx: 1,
                alpha: 0.97,
                size: 0.02,
            },
        };

        return particle;
    }

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            checkComplete={false}
            completeDelay={2000}
            completeOnStart
        >
            <CursorCanvas src={`${CMWN.MEDIA.IMAGE}particle.jpg`} particle={particleGenerator} />
            <skoash.Component className="title">
                <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-1-1.png`} />
                <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-1-2.png`} />
                <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-1-3.png`} />
            </skoash.Component>
        </skoash.Screen>
    );
}
