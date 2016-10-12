import Reveal from 'shared/components/reveal_prompt/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="level-one-screen"
    >
      <skoash.Image className="hidden" src="media/_images/frame.yellow.png" />
      <Reveal
        openOnStart="0"
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
              <div className="arrows">
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
