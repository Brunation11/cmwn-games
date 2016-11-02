import Repeater from 'shared/components/repeater/0.1';
export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="good-for-you"
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/_assets/_sounds/_vos/ThankYou.mp3" />
      <div className="mr-eco animated" />
      <div className="banner animated" />
      <div className="banner2 animated" />

      <skoash.Component className="sparkles">
        <Repeater className="stars" count={70} ><div></div></Repeater>
      </skoash.Component>
    </skoash.Screen>
  );
}
