import Canvas from 'shared/components/canvas/0.1';
import Selectable from '../../shared/components/selectable/0.1.js';

const classNameText = {
  skribbleBox: 'skribble-box',
  box: 'box',
  leftMenu: 'menu left-menu',
  rightMenu: 'menu right-menu',
};

const refs = {
  box: 'box',
  canvas: 'canvas'
};

class PreviewScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      load: true,
      opts: {},
    };

    this.leftMenuList = [
      <li className="edit" onClick={this.goto.bind(this, 'canvas')}>
        <span />
      </li>,
    ];

    this.rightMenuList = [
      <li className="send" onClick={this.goto.bind(this, 'send')}>
        <span />
      </li>
    ];
  }

  open(opts) {
    var rules = skoash.trigger('getRules');
    this.refs[refs.box].refs[refs.canvas].setItems(rules);

    skoash.Screen.prototype.open.call(this, opts);
  }

  renderContent() {
    return (
      <div>
        <skoash.Component ref={refs.box} className={classNameText.skribbleBox}>
          <Canvas ref={refs.canvas} preview />
          <div className={classNameText.box} />
        </skoash.Component>
        <Selectable className={classNameText.leftMenu} list={this.leftMenuList} />
        <Selectable className={classNameText.rightMenu} list={this.rightMenuList} />
      </div>
    );
  }
}

export default (
  <PreviewScreen
    id="preview"
    hideNext
    hidePrev
  />
);
