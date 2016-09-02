import Selectable from 'shared/components/selectable/0.1';

import classNames from 'classnames';

class ChooseScreenComponent extends skoash.Screen {

  getRefs(currentRef) {
    if (!currentRef.refs) {
      return;
    }
    _.each(currentRef.refs, (ref, key) => {
      this.refs[key] = ref;
      if (key.includes('center') || key.includes('group')) {
        this.getRefs(ref);
      }
    });
  }

  bootstrap() {
    super.bootstrap();
    var ref, self = this;

    ['center-1', 'center-2'].forEach(val => {
      ref = self.refs[val];
      if (ref) {
        self.getRefs(ref);
      }
    });
  }

  prev() {
    if (this.state.skinColorSlide) {
      this.setState({skinColorSlide: false});
      return;
    }

    super.prev();
  }

  nextSlide(gender) {
    this.setState({
      skinColorSlide: true,
      gender,
    });
  }

  renderFemaleMale() {
    return (
      <skoash.Component ref="center-1" className="center female-male">
        <skoash.Component className="group">
          <Selectable
            ref="selectable-1"
            list={[
              <skoash.ListItem id="gender-female" className="animated"
                onClick={this.nextSlide.bind(this, 'female')} />,
              <skoash.ListItem id="gender-male" className="animated"
                onClick={this.nextSlide.bind(this, 'male')} />,
            ]}
          />
        </skoash.Component>
      </skoash.Component>
    );
  }

  renderSkinColor() {
    return (
      <skoash.Component ref="center-2" className="center skin-color">
        <skoash.Component className="group">
          <Selectable
            ref="selectable-2"
            list={[
              <skoash.ListItem id="skin-light" className="animated"
                onClick={this.next.bind(this)} />,
              <skoash.ListItem id="skin-medium" className="animated"
                onClick={this.next.bind(this)} />,
              <skoash.ListItem id="skin-dark" className="animated"
                onClick={this.next.bind(this)} />,
            ]}
          />
        </skoash.Component>
      </skoash.Component>
    );
  }

  getClassNames() {
    return classNames({
      GENDER: !this.state.skinColorSlide,
      SKIN: this.state.skinColorSlide,
    }, this.state.gender,
      super.getClassNames());
  }

  renderContent() {
    return (
      <div>
        {this.renderContentList()}
        {this.renderFemaleMale()}
        {this.renderSkinColor()}
      </div>
    );
  }
}

export default function (props, ref, key) {
  return (
    <ChooseScreenComponent
      {...props}
      ref={ref}
      key={key}
      id="choose"
      hideNext
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/S_11/vo_ChooseYourFirefighter.mp3" />
      <skoash.Image className="animated" src="media/S_11/img_11.1.png" />
    </ChooseScreenComponent>
  );
}

