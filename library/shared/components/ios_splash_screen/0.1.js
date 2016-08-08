var createIOSSplashScreen = function (props, ref, key) {
  var iOSSplashScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="ios-splash"
      checkComplete={false}
      completeDelay={6000}
      showPrev={false}
    >
      <skoash.Image className="hidden" src="../shared/images/ios_start_ball.png" />
      <skoash.Image className="hidden" src="../shared/images/ios_start_ball_anim.gif" />
    </skoash.Screen>
  );
  return iOSSplashScreen;
};

export default createIOSSplashScreen;
