export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="congradulations"
    >
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.minion.png'}
      />
      <div>
        CONGRATULATIONS!
      </div>
      <div>
        YOU’VE
      </div>
      <div>
        WON
      </div>
      <div>
        THE
      </div>
      <div>
        GAME
      </div>
    </skoash.Screen>
  );
}
