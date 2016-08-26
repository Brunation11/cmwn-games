import Timer from 'shared/components/timer/0.1';

var TimerScreen = (
  <skoash.Screen
    id="timer"
  >
    <Timer
      ref="timer"
      countDown={true}
      timeout={3000}
    />
  </skoash.Screen>
);

export default TimerScreen;
