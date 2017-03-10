import SelectableAudio from 'shared/components/selectable_audio/0.1';
import CustomCursorScreen from 'shared/components/custom_cursor_screen/0.1';

class TrashScreenComponent extends CustomCursorScreen {
    open() {
        super.open();

        this.checkComplete = null;
        this.refs['selectable-audio'].incompleteRefs();
        this.incomplete();
        this.checkComplete = super.checkComplete;
    }
}

export default function (props, ref, key) {
    return (
        <TrashScreenComponent
            {...props}
            ref={ref}
            key={key}
            id="trash"
            cursor={<skoash.Image src={`${CMWN.MEDIA.SPRITE}sprite-6-1.png`} />}
        >
            <skoash.Component className="turtle" />
            <SelectableAudio
                ref="selectable-audio"
                className="center"
                selectClass="HIGHLIGHTED"
                selectableList={[
                    <skoash.ListItem className="bag" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="milk" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="milk2" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="shrimp">
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="shrimp2">
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="seaweed">
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="bottle" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="paper" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="paper2" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="jar" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="lobster">
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="glassbottle" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="soda" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="soda2" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="shell">
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="spike">
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="box" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="box2" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="shell2">
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="can" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                    <skoash.ListItem className="canholder" correct>
                        <div />
                        <div className="hover" />
                    </skoash.ListItem>,
                ]}
                audioAssets={[
                    <skoash.Audio
                        data-ref="correct"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}answer-correct.mp3`}
                    />,
                    <skoash.Audio
                        data-ref="incorrect"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}answer-incorrect.mp3`}
                        complete
                    />,
                ]}
            />
        </TrashScreenComponent>
    );
}
