import SpriteAnimation from 'shared/components/sprite_animation/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="sprite-screen"
            onStart={function () {
                if (this.interval) return;
                this.interval = setInterval(() => {
                    this.updateGameState({
                        path: 'animate',
                        data: !_.get(this.props, 'data.animate', false)
                    });
                }, 3000);
            }}
            onStop={function () {
                clearInterval(this.interval);
            }}
        >
            <SpriteAnimation
                className="sprite-1"
                src="media/sprite/img_sp_17.1.png"
                frames={8}
            />
            <SpriteAnimation
                className="sprite-2"
                src="media/sprite/img_sp_17.1.png"
                frames={8}
                animateOnStart={false}
                animate={_.get(props, 'data.animate', false)}
            />
        </skoash.Screen>
    );
}
