export default function (props, ref, key) {
  var BalloonsScreen = (
    <skoash.Screen
      id="balloons"
      {...props}
      ref={ref}
      key={key}
    >
    </skoash.Screen>
  );

  return BalloonsScreen;
}
