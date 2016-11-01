// TODO get VO 11/1/16 AIM
export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="defeat-hog"
    >
      <skoash.Image className="eco" src="media/_images/mr.eco.png" />
      <skoash.Component className="text">
        <div>
          Can you help me turn off<br /> all the lights and<br /> defeat the Energy Hog?
         </div>
      </skoash.Component>
    </skoash.Screen>
  );
}
