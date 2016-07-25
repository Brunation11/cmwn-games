import MatchGame from 'shared/components/match_game/0.1';
import Randomizer from 'shared/components/randomizer/0.1';

function onMatch(message) {
  console.log(message);
}

var MatchScreen = (
  <skoash.Screen
    id="match"
  >
    <MatchGame
      ref="match"
      onMatch={onMatch}
      bin={
        <Randomizer
          bin={[
            <li ref="A" message="0">A</li>,
            <li ref="B" message="0">B</li>,
            <li ref="C" message="1">C</li>,
            <li ref="D" message="1">D</li>,
            <li ref="E" message="2">E</li>,
            <li ref="F" message="2">F</li>,
          ]}
        />
      }
    />
  </skoash.Screen>
);

export default MatchScreen;
