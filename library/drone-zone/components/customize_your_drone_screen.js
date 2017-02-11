import classNames from 'classnames';

export default function (props, ref, key) {
    var onOpen;
    var onPlay;
    var onModelSelect;
    var onColorSelect;

    onOpen = function (message) {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: message
            }
        });
    };

    onPlay = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: null
            }
        });
    };

    onModelSelect = function (message) {
        this.updateGameState({
            path: 'drone',
            data: {
                model: message
            }
        });

        this.updateGameState({
            path: 'reveal',
            data: {
                open: 'color-select'
            }
        });
    };

    onColorSelect = function (message) {
        this.updateGameState({
            path: 'drone',
            data: {
                color: message
            }
        });

        this.updateGameState({
            path: 'reveal',
            data: {
                open: 'complete'
            }
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="customize-your-drone"
        >
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={onPlay}
            >
                <skoash.Audio
                    ref="model-select"
                    type="voiceOver"
                    src={`${MEDIA.VO}PickYourModel.mp3`}
                />
                <skoash.Audio
                    ref="color-select"
                    type="voiceOver"
                    src={`${MEDIA.VO}ChooseYourColor.mp3`}
                />
                <skoash.Audio
                    ref="complete"
                    type="voiceOver"
                    src={`${MEDIA.VO}YouveDoneIt.mp3`}
                />
            </skoash.MediaCollection>

            <skoash.Reveal
                openOnStart="model-select"
                onOpen={onOpen}
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={[
                    <skoash.Component
                        ref="model-select"
                        className="model-select"
                    >
                        <span className="header">
                            PICK YOUR MODEL
                        </span>
                        <skoash.Selectable
                            dataTarget="selectable"
                            selectClass="HIGHLIGHTED"
                            onSelect={onModelSelect}
                            list={[
                                <skoash.Component
                                    data-ref="one"
                                    className="one"
                                    correct={true}
                                />,
                                <skoash.Component
                                    data-ref="two"
                                    className="two"
                                    correct={true}
                                />,
                                <skoash.Component
                                    data-ref="three"
                                    className="three"
                                    correct={true}
                                />,
                                <skoash.Component
                                    data-ref="four"
                                    className="four"
                                    correct={true}
                                />,
                            ]}
                        />
                    </skoash.Component>,
                    <skoash.Component
                        ref="color-select"
                        className="color-select"
                    >
                        <span className="header">
                            CHOOSE YOUR COLOR
                        </span>
                        <skoash.Selectable
                            dataTarget="selectable"
                            selectClass="HIGHLIGHTED"
                            onSelect={onColorSelect}
                            list={[
                                <skoash.Component
                                    data-ref="a"
                                    className="a"
                                    correct={true}
                                />,
                                <skoash.Component
                                    data-ref="b"
                                    className="b"
                                    correct={true}
                                />,
                                <skoash.Component
                                    data-ref="c"
                                    className="c"
                                    correct={true}
                                />,
                                <skoash.Component
                                    data-ref="d"
                                    className="d"
                                    correct={true}
                                />,
                                <skoash.Component
                                    data-ref="e"
                                    className="e"
                                    correct={true}
                                />,
                                <skoash.Component
                                    data-ref="f"
                                    className="f"
                                    correct={true}
                                />,
                                <skoash.Component
                                    data-ref="g"
                                    className="g"
                                    correct={true}
                                />,
                                <skoash.Component
                                    data-ref="h"
                                    className="h"
                                    correct={true}
                                />
                            ]}
                        />
                    </skoash.Component>,
                    <skoash.Component
                        ref="complete"
                        className="complete"
                    >
                        <span className="header">
                            YOU'VE DONE IT!
                            <br />
                            HERE'S YOUR OWN PERSONAL DRONE!
                        </span>
                        <skoash.Component
                            className={classNames(
                                'selected',
                                _.get(props, 'data.drone.model'),
                                _.get(props, 'data.drone.color')
                            )}
                        />
                    </skoash.Component>
                ]}
            />
        </skoash.Screen>
    );
}
