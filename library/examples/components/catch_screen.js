import Catch from 'shared/components/catch/0.1';
import Catchable from 'shared/components/catchable/0.1';

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
  </skoash.Screen>
);

export default CatchScreen;
