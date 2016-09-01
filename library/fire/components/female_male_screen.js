import Selectable from 'shared/components/selectable/0.1';

class FemaleMaleScreenComponent extends skoash.Screen {

  getRefs(currentRef) {
    if (!currentRef.refs) {
      return;
    }
    _.each(currentRef.refs, (ref, key) => {
      this.refs[key] = ref;
      if (key.includes('center') || key.includes('frame')) {
        this.getRefs(ref);
      }
    });
  }

  bootstrap() {
    super.bootstrap();

    var ref = this.refs.center;
    if (ref) {
      this.getRefs(ref);
    }

    if (this.refs && this.refs.selectable) this.refs.selectable.complete();
  }

  renderSelectable() {
    return (
      <skoash.Component className="center">
        <skoash.Component className="frame">
          <Selectable
            ref="selectable"
            checkComplete={false}
            list={[
              <skoash.ListItem id="gender-female" className="animated"
                onClick={this.next.bind(this)} correct />,
              <skoash.ListItem id="gender-male" className="animated"
                onClick={this.next.bind(this)} correct />,
            ]}
          />
        </skoash.Component>
      </skoash.Component>
    );
  }

  renderContent() {
    return (
      <div>
        {this.renderContentList()}
        {this.renderSelectable()}
      </div>
    );
  }
}

export default function (props, ref, key) {
  return (
    <FemaleMaleScreenComponent
      {...props}
      ref={ref}
      key={key}
      id="female-male"
      hideNext
    >
      <skoash.Audio type="voiceOver" src="media/S_11/vo_ChooseYourFirefighter.mp3" />
      <skoash.Image className="animated" src="media/S_11/img_11.1.png" />
    </FemaleMaleScreenComponent>
  );
}

