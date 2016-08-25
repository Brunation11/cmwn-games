import MatchableReveal from 'shared/components/match_reveal/0.1';

var MatchGameScreen = (
  <skoash.Screen
    id="match-game"
  >
    <MatchableReveal
      ref="matchable-reveal"
      matchableCheckComplete
      revealCheckComplete
      randomizeMatchableList
      assets={[
        <skoash.Audio ref="correct" type="sfx" src="media/audio/S_15.1.mp3" />,
      ]}
      matchableList={[
        <skoash.ListItem data-ref="frog" message="0" className="frog animated" />,
        <skoash.ListItem data-ref="frog2" message="0" className="lily-pad animated" />,
        <skoash.ListItem data-ref="cow" message="4" className="cow animated" />,
        <skoash.ListItem data-ref="cow2" message="4" className="grass animated" />,
        <skoash.ListItem data-ref="robin" message="1" className="robin animated" />,
        <skoash.ListItem data-ref="robin2" message="1" className="worm animated" />,
        <skoash.ListItem data-ref="fox" message="2" className="fox animated" />,
        <skoash.ListItem data-ref="fox2" message="2" className="mouse animated" />,
        <skoash.ListItem data-ref="dove" message="3" className="dove animated" />,
        <skoash.ListItem data-ref="dove2" message="3" className="cactus animated" />,
        <skoash.ListItem data-ref="hummingbird" message="5" className="humming-bird animated" />,
        <skoash.ListItem data-ref="hummingbird2" message="5" className="honeysuckle animated" />,
        <skoash.ListItem data-ref="rhino" message="6" className="rhino animated" />,
        <skoash.ListItem data-ref="rhino2" message="6" className="oxpecker animated" />
      ]}
      revealList={[
        <skoash.ListItem data-ref="frog" className="frog">
          <skoash.Image data-ref="frog-thumb" className="thumb" src="media/images/match/img_13.2.png" />
          <skoash.Image data-ref="frog-banner" className="banner" src="media/images/match/img_13.3.png" />
          <p>The frog is cold blooded so it sits<br/>on lily pads in the sun to raise<br/>its core temperature.</p>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="robin" className="robin">
        <skoash.Image data-ref="robin-thumb" className="thumb" src="media/images/match/img_13.4.png" />
          <skoash.Image data-ref="robin-banner" className="banner" src="media/images/match/img_13.5.png" />
          <p>Earthworms are part of a<br/> robin’s diet along with blueberries,<br/> caterpillars and poison ivy!</p>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="fox" className="fox">
          <skoash.Image data-ref="fox-thumb" className="thumb" src="media/images/match/img_13.6.png" />
          <skoash.Image data-ref="fox-banner" className="banner" src="media/images/match/img_13.7.png" />
          <p>The fox has a seasonal diet. In the summer he<br/> enjoys grasshoppers, beetles, berries and nuts.<br/> But come winter mice need to watch out!<br/> They go to the top of the menu.</p>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="dove" className="dove">
          <skoash.Image data-ref="dove-thumb" className="thumb" src="media/images/match/img_13.8.png" />
          <skoash.Image data-ref="dove-banner" className="banner" src="media/images/match/img_13.9.png" />
          <p>The dove pollinates the cactus by<br/> drinking its nectar and eating and<br/> spreading its seeds. These two<br/> depend on each other.</p>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="cow" className="cow">
          <skoash.Image data-ref="cow-thumb" className="thumb" src="media/images/match/img_13.10.png" />
          <skoash.Image data-ref="cow-banner" className="banner" src="media/images/match/img_13.11.png" />
          <p>The cow eats the grass. It digests it<br/> in a huge stomach with 4 pouches.<br/> The largest is the size of<br/> a 55 gallon can!</p>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="humming-bird" className="humming-bird">
          <skoash.Image data-ref="hummingbird-thumb" className="thumb" src="media/images/match/img_13.12.png" />
          <skoash.Image data-ref="hummingbird-banner" className="banner" src="media/images/match/img_13.13.png" />
          <p>The hummingbird hovers next to the<br/> flower to eat the nectar, which is so<br/> sweet it’s like liquid candy!</p>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="rhino" className="rhino">
          <skoash.Image data-ref="rhino-thumb" className="thumb" src="media/images/match/img_13.14.png" />
          <skoash.Image data-ref="rhino-banner" className="banner" src="media/images/match/img_13.15.png" />
          <p>The oxpecker perches on the<br/> rhino’s back. It helps the rhino by eating<br/> its parasites and warning it of predators.</p>
        </skoash.ListItem>
      ]}
      revealAssets={[
        <skoash.Audio type="voiceOver" src="media/audio/VO_13-5.mp3" />,
        <skoash.Audio type="voiceOver" src="media/audio/VO_13-6.mp3" />,
        <skoash.Audio type="voiceOver" src="media/audio/VO_13-7.mp3" />,
        <skoash.Audio type="voiceOver" src="media/audio/VO_13-8.mp3" />,
        <skoash.Audio type="voiceOver" src="media/audio/VO_13-9.mp3" />,
        <skoash.Audio type="voiceOver" src="media/audio/VO_13-10.mp3" />,
        <skoash.Audio type="voiceOver" src="media/audio/VO_13-11.mp3" />
      ]}
    />
  </skoash.Screen>
);

export default MatchGameScreen;

