export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="leaving-house"
    >
      <skoash.Image className="eco" src="media/_images/mr.eco.png" />
      <skoash.Component className="text">
        <div>
          I was leaving my house<br /> when suddenly the Energy Hog<br />
          came in and started turning<br /> all of the lights on!
        </div>
      </skoash.Component>
    </skoash.Screen>
  );
}
