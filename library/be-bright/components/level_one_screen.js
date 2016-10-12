import Score from 'shared/components/score/0.1';
import Reveal from 'shared/components/reveal_prompt/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="labyrinth-level-one-screen"
    >
      <skoash.Image className="hidden" src="media/_images/frame.yellow.png" />
      <skoash.Image className="hidden" src="media/_images/sprites.meter.png" />
      <skoash.Component className="left">
        <skoash.Image className="avatar" src="media/_images/mr.eco.avatar.png" />
        <Score
          increment={10}
        />
      </skoash.Component>
      <Reveal
        // openOnStart="0"
        list={[
          <skoash.Component className="labyrinth-frame">
            <skoash.Image className="eco" src="media/_images/mr.eco.png" />
            <div className="copy">
              <p>
                Move Mr. Eco<br/>
                by using the arrow keys<br/>
                and help him<br/>
                turn off the lights!
              </p>
              <div className="reveal-arrows">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </skoash.Component>
        ]}
      />
    </skoash.Screen>
  );
}
