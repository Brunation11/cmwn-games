import MatchGame from 'shared/components/match_game/0.1';
import Randomizer from 'shared/components/randomizer/0.1';

function onMatch(message) {
    console.log(message); // eslint-disable-line no-console
}

export default (
    <skoash.Screen
        id="match"
    >
        <MatchGame
            ref="match"
            onMatch={onMatch}
            bin={
                <Randomizer
                    bin={[
                        <li className="flip-card tb" ref="A" message="0">
                            <div className="side a">
                                a
                            </div>
                            <div className="side b">
                                A
                            </div>
                        </li>,
                        <li className="flip-card tb" ref="B" message="0">
                            <div className="side a">
                                b
                            </div>
                            <div className="side b">
                                B
                            </div>
                        </li>,
                        <li className="flip-card tb" ref="C" message="1">
                            <div className="side a">
                                c
                            </div>
                            <div className="side b">
                                C
                            </div>
                        </li>,
                        <li className="flip-card tb" ref="D" message="1">
                            <div className="side a">
                                d
                            </div>
                            <div className="side b">
                                D
                            </div>
                        </li>,
                        <li className="flip-card tb" ref="E" message="2">
                            <div className="side a">
                                e
                            </div>
                            <div className="side b">
                                E
                            </div>
                        </li>,
                        <li className="flip-card tb" ref="F" message="2">
                            <div className="side a">
                                f
                            </div>
                            <div className="side b">
                                F
                            </div>
                        </li>,
                    ]}
                />
            }
        />
    </skoash.Screen>
);
