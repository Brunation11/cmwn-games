import Draggable from 'shared/components/draggable/0.1';
import DropzoneReveal from 'shared/components/dropzone_reveal/0.1';

class TriangleScreenComponent extends skoash.Screen {

    getRefs(currentRef) {
        if (!currentRef.refs) {
            return;
        }
        _.each(currentRef.refs, (ref, key) => {
            this.refs[key] = ref;
            if (key.includes('children')) {
                this.getRefs(ref);
            }
        });
    }

    bootstrap() {
        var ref;
        var self = this;

        super.bootstrap();

        ref = self.refs['children-0'];
        if (ref) {
            self.getRefs(ref);
        }
    }

    open() {
        super.open();

        this.checkComplete = null;
        this.refs['dropzone-reveal'].incompleteRefs();
        this.incomplete();
        this.checkComplete = super.checkComplete;
    }
}


export default function (props, ref, key) {
    return (
        <TriangleScreenComponent
            {...props}
            ref={ref}
            key={key}
            id="triangle"
        >
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Image className="title" ref="title" src="media/S_8/img_8.1.png" />
                    <div className="directions">
                        <h3>Choose the words and drag to form a triangle</h3>
                    </div>
                    <skoash.MediaSequence>
                        <skoash.Audio type="voiceOver" src="media/S_8/vo_ThreeThingsMakeFireBurn.mp3" />
                        <skoash.Audio type="voiceOver" src="media/S_8/vo_ChooseTheWords.mp3" />
                    </skoash.MediaSequence>
                    <DropzoneReveal
                        ref="dropzone-reveal"
                        assets={[
                            <skoash.Audio type="sfx" data-ref="complete" src="media/S_8/S_8.3.mp3" />,
                        ]}
                        dropzones={[
                            <skoash.Component answers={['fuel', 'heat', 'air']}>
                            <skoash.Image className="grey-triangle" src="media/S_8/img_8.10a.png" />
                            <skoash.Image className="color-triangle" src="media/S_8/img_8.10e.png" />
                          </skoash.Component>
                        ]}
                        dropzoneDraggables={[
                            <Draggable message="air" />,
                            <Draggable message="clouds" return/>,
                            <Draggable message="co2" return/>,
                            <Draggable message="heat" />,
                            <Draggable message="smoke" return/>,
                            <Draggable message="fuel" />,
                            <Draggable message="water" return/>,
                        ]}
                        dropzoneAssets={[
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
                        revealList={[
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
                        revealAssets={[
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="air"
                                src="media/S_8/vo_Air.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="clouds"
                                src="media/S_8/vo_Clouds.mp3"
                                complete
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="co2"
                                src="media/S_8/vo_CarbonDioxide.mp3"
                                complete
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="heat"
                                src="media/S_8/vo_Heat.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="smoke"
                                src="media/S_8/vo_Smoke.mp3"
                                complete
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="fuel"
                                src="media/S_8/vo_Fuel.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="water"
                                src="media/S_8/vo_Water.mp3"
                                complete
                            />,
                        ]}
                    />
                </skoash.Component>
            </skoash.Component>
        </TriangleScreenComponent>
    );
}

