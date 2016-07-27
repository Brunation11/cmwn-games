import Catch from 'shared/components/catch/0.1';
import Catchable from 'shared/components/catchable/0.1';

// {/* MILLION_MON*/}
                    // {/* TARSI */}
                    // {/* UPDRAFTS */}
                    // {/* FRAS */}
                    // {/* DEVOUR_4_MIN */}
/*
        <div pl-component="modal" pl-transclude="content" pl-bg="media/_Images/_Frames/MON_FR_2.png">
            <div pl-component="reveal">
                <skoash.Audio class="voice-over" src="media/_audio/S_MillionMON/VO_MillionMON.mp3" />
                <skoash.Audio class="voice-over" src="media/_audio/S_Tarsi/VO_Tarsi.mp3" />
                <skoash.Audio class="voice-over" src="media/_audio/S_Updrafts/VO_Updrafts.mp3" />
                <skoash.Audio class="voice-over" src="media/_audio/S_Frass/VO_Frass.mp3" />
                <skoash.Audio class="voice-over" src="media/_audio/S_Devour4Min/VO_Devour4Min.mp3" />
                <ul class="items">
                    <li>
                        In Mexico they roost in trees<br/>
                        in HUGE groups that may have<br/>
                        MILLIONS of butterflies!
                    </li>
                    <li>
                        Monarch smell with their antennae<br/>
                        and taste with their feet!<br/>
                        <br/>
                        The feet have receptors called tarsi<br/>
                        that taste the sweet nectar.
                    </li>
                    <li>
                        Monarch use updrafts<br/>
                        of warm air (called thermals)<br/>
                        to allow them to glide<br/>
                        so they can conserve energy.
                    </li>
                    <li>
                        Caterpillar poop is called frass.<br/>
                        <i>They make a lot of frass!</i>
                    </li>
                    <li>
                        A large Monarch caterpillar<br/>
                        can devour an entire milkweed plant<br/>
                        in less than four minutes.
                    </li>
                </ul>
            </div>
        </div>
*/
    // <skoash.Audio ref="correct" type="sfx" src="media/_audio/S_FloatingWeed/S_6.1.mp3" />

var CatchScreen = (
  <skoash.Screen
    id="catch"
  >
    <Catch
      bucket={
        <div className="bucket" />
      }
      ref="catch"
      catchables={[
        <Catchable></Catchable>,
        <Catchable></Catchable>,
        <Catchable></Catchable>,
        <Catchable></Catchable>,
        <Catchable></Catchable>,
        <Catchable></Catchable>,
        <Catchable></Catchable>,
        <Catchable></Catchable>
      ]}
    />
    {/* <div>
        <div className="selectable">
            <ul className="items" pl-action="select(target())">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div> */}
  </skoash.Screen>
);

export default CatchScreen;
