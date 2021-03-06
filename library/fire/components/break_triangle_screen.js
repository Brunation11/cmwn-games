export default function (props, ref, key) {

    function animate(name) {
        var open = _.get(props, 'data.states.open', null) === null ? name : open + ' ' + name;
        skoash.trigger('updateState', {
            path: 'states',
            data: {
                open,
            },
        });
    }

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="break-triangle"
            className={_.get(props, 'data.states.open', null)}
            onOpen={() => {
                skoash.trigger('updateState', {
                    path: 'states',
                    data: {
                        open: null,
                    },
                });
            }}
        >
            <skoash.MediaSequence
                ref="audio-sequence"
            >
                <skoash.Audio
                    type="voiceOver"
                    data-ref="title"
                    src="media/S_9/vo_FirefightersBreakTheTriangle.mp3"
                    onComplete={animate.bind(undefined, 'HEAT')}
                />
                <skoash.Audio type="voiceOver" data-ref="heat" src="media/S_8/vo_Heat.mp3"
                    onComplete={animate.bind(undefined, 'AIR')}/>
                <skoash.Audio type="voiceOver" data-ref="air" src="media/S_8/vo_Air.mp3"
                    onComplete={animate.bind(undefined, 'FUEL')}/>
                <skoash.Audio type="voiceOver" data-ref="fuel" src="media/S_8/vo_Fuel.mp3" />
                <skoash.Audio
                    type="voiceOver"
                    data-ref="theory"
                    src="media/S_9/vo_ThisIsBasicFirefighterTheory.mp3"
                />
            </skoash.MediaSequence>
            <p>
                Firefighters break the triangle by removing<br /> one of more these three sides.
            </p>
            <skoash.Component className="animated images">
                <skoash.Image
                    className="animated fuel"
                    src="media/S_8/img_8.10b.png"
                />
                <skoash.Image
                    className="animated fuel side"
                    data-ref="fuelSide"
                    src="media/S_8/img_8.10g.png"
                />
                <skoash.Image
                    className="animated heat"
                    src="media/S_8/img_8.10c.png"
                />
                <skoash.Image
                    className="animated heat side"
                    data-ref="heatSide"
                    src="media/S_8/img_8.10f.png"
                />
                <skoash.Image
                    className="animated air"
                    src="media/S_8/img_8.10d.png"
                />
                <skoash.Image
                    className="animated air side"
                    data-ref="airSide"
                    src="media/S_8/img_8.10h.png"
                />
                <skoash.Image
                    className="animated triangle"
                    src="media/S_8/img_8.10e.png"
                />
            </skoash.Component>
            <h2>
                This is basic firefighter theory!
            </h2>
        </skoash.Screen>
    );
}

