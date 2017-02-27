import Draggable from 'shared/components/draggable/0.4';
import Dropzone from 'shared/components/dropzone/0.4';

class TriangleScreenComponent extends skoash.Screen {
    open() {
        var reveal;

        super.open();

        this.checkComplete = null;
        reveal = _.get(this.refs, 'children-0.refs.children-1.refs.reveal', null);
        if (reveal) reveal.incompleteRefs();
        this.incomplete();
        this.checkComplete = super.checkComplete;
    }
}


export default function (props, ref, key) {
    var openReveal = function (dropped) {
        this.updateScreenData({
            key: 'dropzone',
            data: {
                message: dropped.props.message
            }
        });
    };

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
                    <skoash.Image src={`${CMWN.MEDIA.IMAGE}img-8-1.png`} />
                    <h3>Choose the words and drag to form a triangle</h3>
                </skoash.Component>
                <skoash.Component className="frame">
                    <skoash.MediaSequence>
                        <skoash.Audio
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}vo-three-things-make-fire-burn.mp3`}
                        />
                        <skoash.Audio
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}vo-choose-the-words.mp3`}
                        />
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
                            src={`${CMWN.MEDIA.VO}vo-air.mp3`}
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="clouds"
                            src={`${CMWN.MEDIA.VO}vo-clouds.mp3`}
                            complete
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="co2"
                            src={`${CMWN.MEDIA.VO}vo-carbon-dioxide.mp3`}
                            complete
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="heat"
                            src={`${CMWN.MEDIA.VO}vo-heat.mp3`}
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="smoke"
                            src={`${CMWN.MEDIA.VO}vo-smoke.mp3`}
                            complete
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="fuel"
                            src={`${CMWN.MEDIA.VO}vo-fuel.mp3`}
                        />
                        <skoash.Audio
                            type="voiceOver"
                            data-ref="water"
                            src={`${CMWN.MEDIA.VO}vo-water.mp3`}
                            complete
                        />

                        <skoash.Audio
                            type="sfx"
                            data-ref="complete"
                            src={`${CMWN.MEDIA.EFFECT}s-8-3.mp3`}
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
                                <skoash.Image data-ref="fuel" src={`${CMWN.MEDIA.IMAGE}img-8-10b.png`} />
                                <skoash.Image
                                    className="side"
                                    data-ref="heatSide"
                                    src={`${CMWN.MEDIA.IMAGE}img-8-10g.png`}
                                />
                            </skoash.ListItem>,
                            <skoash.ListItem ref="heat" correct>
                                <skoash.Image data-ref="heat" src={`${CMWN.MEDIA.IMAGE}img-8-10c.png`} />
                                <skoash.Image
                                    className="side"
                                    data-ref="fuelSide"
                                    src={`${CMWN.MEDIA.IMAGE}img-8-10f.png`}
                                />
                            </skoash.ListItem>,
                            <skoash.ListItem ref="air" correct>
                                <skoash.Image data-ref="air" src={`${CMWN.MEDIA.IMAGE}img-8-10d.png`} />
                                <skoash.Image
                                    className="side"
                                    data-ref="airSide"
                                    src={`${CMWN.MEDIA.IMAGE}img-8-10h.png`}
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
                                    src={`${CMWN.MEDIA.IMAGE}img-8-10a.png`}
                                />
                                <skoash.Image
                                    className="color-triangle"
                                    src={`${CMWN.MEDIA.IMAGE}img-8-10e.png`}
                                />
                            </skoash.Component>
                        ]}
                        assets={[
                            <skoash.Audio
                                type="sfx"
                                data-ref="incorrect"
                                src={`${CMWN.MEDIA.EFFECT}s-8-1.mp3`}
                                complete
                            />,
                            <skoash.Audio
                                type="sfx"
                                data-ref="correct"
                                src={`${CMWN.MEDIA.EFFECT}s-8-2.mp3`}
                            />,
                            <skoash.Audio
                                type="sfx"
                                data-ref="drag"
                                src={`${CMWN.MEDIA.EFFECT}s-8-4.mp3`}
                            />,
                        ]}
                    />
                </skoash.Component>
            </skoash.Component>
        </TriangleScreenComponent>
    );
}

