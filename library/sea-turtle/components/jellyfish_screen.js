import SelectableAll from 'shared/components/selectable_all/0.1';
import Randomizer from 'shared/components/randomizer/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="jellyfish"
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
          ]}
        />}
        doCount={true}
      />
    </skoash.Screen>
  );
}
