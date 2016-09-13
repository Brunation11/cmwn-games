export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="imagine"
    >
      <skoash.Image
        className="question"
        src="media/_Animations/frame2-wand.gif"
      />
      <skoash.Image
        className="answer"
        src="media/_Animations/frame3-wandandprinter.gif"
      />
      <skoash.Image
        className="hidden"
        src="media/_sprites/spritesheet-minion-characters_.png"
      />
      <skoash.Image
        className="hidden"
        src="media/03-05/img-speechballoon.png"
      />
      <div className="right">
        <div className="words">
          <skoash.Image
            className="text imagine"
            src="media/03-05/text-01.png"
          />
          <skoash.Image
            className="text already"
            src="media/03-05/text-01.png"
          />
          {/*
            <div>
              Imagine a magical item
            </div>
            <div>
              that can make anything
            </div>
            <div>
              you can think of!
            </div>
          */}
        </div>
        <div className="minion" />
      </div>
    </skoash.Screen>
  );
}
