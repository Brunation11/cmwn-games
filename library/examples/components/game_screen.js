import GameEmbedder from 'shared/components/game_embedder/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="game-screen"
    >
      <GameEmbedder
        src="http://localhost:8888/"
      />
    </skoash.Screen>
  );
}
