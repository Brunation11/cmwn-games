import SelectableAll from 'shared/components/selectable_all/0.1';
import Randomizer from 'shared/components/randomizer/0.1';

var onSelect = function (target) {
    console.log('jellyfish ' + target.ref + ' was selected'); // eslint-disable-line no-console
};

var SelectableAllScreen = (
    <skoash.Screen
        id="selectable-all"
    >
        <SelectableAll
            ref="selectable-all"
            bin={<Randomizer
                ref="randomizer"
                bin={[
                    <li ref="a" className="a">
                        <div />
                        <div />
                    </li>,
                    <li ref="b" className="b">
                        <div />
                        <div />
                    </li>,
                    <li ref="c" className="c">
                        <div />
                        <div />
                    </li>,
                    <li ref="d" className="d">
                        <div />
                        <div />
                    </li>,
                    <li ref="e" className="e">
                        <div />
                        <div />
                    </li>,
                    <li ref="f" className="f">
                        <div />
                        <div />
                    </li>
                ]}
            />}
            onSelect = {onSelect}
            doCount={true}
        />
    </skoash.Screen>
);

export default SelectableAllScreen;
