import Draggable from 'shared/components/draggable/0.4';
import Dropzone from 'shared/components/dropzone/0.4';

class TriangleScreenComponent extends skoash.Screen {

    open() {
        super.open();

        this.checkComplete = null;
        var reveal = _.get(this.refs, 'children-0.refs.children-1.refs.reveal', null);
        if (reveal) reveal.incompleteRefs();
        this.incomplete();
        this.checkComplete = super.checkComplete;
    }
}


export default function (props, ref, key) {
    var openReveal = function (dropped, dropzoneRef) {
        this.updateScreenData({
            key: 'dropzone',
            data: {
                message: dropped.props.message
            }
        });
    }

    var revealComplete = function () {
        this.updateScreenData({
            key: 'reveal',
            data: {
                complete: true
            }
        });
    };

    return (
        <TriangleScreenComponent
            {...props}
            ref={ref}
            key={key}
            id="triangle"
        >
            <skoash.Component className="center">
                <skoash.Component className="title">
                    <skoash.Image src="media/S_8/img_8.1.png" />
                    <h3>Choose the words and drag to form a triangle</h3>
                </skoash.Component>
                <skoash.Component className="frame">
                    <skoash.MediaSequence>
                        <skoash.Audio type="voiceOver" src="media/S_8/vo_ThreeThingsMakeFireBurn.mp3" />
                        <skoash.Audio type="voiceOver" src="media/S_8/vo_ChooseTheWords.mp3" />
                    </skoash.MediaSequence>
                    <skoash.MediaCollection
                        play={
                            (_.get(props, 'data.reveal.complete', null)) ? 'complete' :
                            _.get(props, 'data.draggable.dropped.props.message', null)
                        }
                    >
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="air"
                            src="media/S_8/vo_Air.mp3"
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="clouds"
                            src="media/S_8/vo_Clouds.mp3"
                            complete
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="co2"
                            src="media/S_8/vo_CarbonDioxide.mp3"
                            complete
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="heat"
                            src="media/S_8/vo_Heat.mp3"
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="smoke"
                            src="media/S_8/vo_Smoke.mp3"
                            complete
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="fuel"
                            src="media/S_8/vo_Fuel.mp3"
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="water"
                            src="media/S_8/vo_Water.mp3"
                            complete
                        />

                        <skoash.Audio
                            type="sfx"
                            data-ref="complete"
                            src="media/S_8/S_8.3.mp3"
                        />,
                    </skoash.MediaCollection>
                    <skoash.Repeater
                        className="draggables"
                        amount={7}
                        item={<Draggable
                          returnOnIncorrect
                        />}
                        props={[
                          {message: 'air'},
                          {message: 'clouds', return: true},
                          {message: 'co2', return: true},
                          {message: 'heat'},
                          {message: 'smoke', return: true},
                          {message: 'fuel'},
                          {message: 'water', return: true},
                        ]}
                    />
                    <skoash.Reveal
                        ref="reveal"
                        openMultiple
                        openReveal={_.get(props, 'data.dropzone.message', null)}
                        onComplete={revealComplete}
                        list={[
                            <skoash.ListItem ref="fuel" correct>
                                <skoash.Image data-ref="fuel" src="media/S_8/img_8.10b.png" />
                                <skoash.Image
                                    className="side"
                                    data-ref="heatSide"
                                    src="media/S_8/img_8.10g.png"
                                />
                            </skoash.ListItem>,
                            <skoash.ListItem ref="heat" correct>
                                <skoash.Image data-ref="heat" src="media/S_8/img_8.10c.png" />
                                <skoash.Image
                                    className="side"
                                    data-ref="fuelSide"
                                    src="media/S_8/img_8.10f.png"
                                />
                            </skoash.ListItem>,
                            <skoash.ListItem ref="air" correct>
                                <skoash.Image data-ref="air" src="media/S_8/img_8.10d.png" />
                                <skoash.Image
                                    className="side"
                                    data-ref="airSide"
                                    src="media/S_8/img_8.10h.png"
                                />
                            </skoash.ListItem>,
                        ]}
                    />
                    <Dropzone
                        ref="dropzone"
                        dropped={_.get(props, 'data.draggable.dropped')}
                        dragging={_.get(props, 'data.draggable.dragging')}
                        onCorrect={openReveal}
                        dropzones={[
                            <skoash.Component answers={['fuel', 'heat', 'air']}>
                                <skoash.Image
                                    className="grey-triangle"
                                    src="media/S_8/img_8.10a.png"
                                />
                                <skoash.Image
                                    className="color-triangle"
                                    src="media/S_8/img_8.10e.png"
                                />
                            </skoash.Component>
                        ]}
                        assets={[
                            <skoash.Audio
                                type="sfx"
                                data-ref="incorrect"
                                src="media/S_8/S_8.1.mp3"
                                complete
                            />,
                            <skoash.Audio
                                type="sfx"
                                data-ref="correct"
                                src="media/S_8/S_8.2.mp3"
                            />,
                            <skoash.Audio
                                type="sfx"
                                data-ref="drag"
                                src="media/S_8/S_8.4.mp3"
                            />,
                        ]}
                    />
                </skoash.Component>
            </skoash.Component>
        </TriangleScreenComponent>
    );
}

