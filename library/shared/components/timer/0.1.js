// As of skoash 1.1.0 this component can be found at skoash.Timer
/* eslint-disable no-console */
console.warn('As of skoash 1.1.0 this component can be found at skoash.Timer');
/* eslint-enable no-console */

import classNames from 'classnames';

class Timer extends skoash.Component {
    constructor() {
        super();

        this.state = {
            time: 0,
            stamp: 0
        };

        this.checkComplete = this.checkComplete.bind(this);
    }

    checkComplete() {
        var time = Date.now();

        if (!this.props.checkComplete) return;

        if (!this.state.started || this.state.paused) return;

        if (time >= this.state.stamp) {
            this.setState({
                stamp: time + 1000,
                time: this.state.time + 1000
            }, () => {
                if (this.state.time >= this.props.timeout) {
                    this.complete();
                    this.stop();
                } else {
                    if (typeof this.props.onCheckComplete === 'function') {
                        this.props.onCheckComplete.call(this);
                    }
                    window.requestAnimationFrame(this.checkComplete);
                }
            });
        } else {
            window.requestAnimationFrame(this.checkComplete);
        }
    }

    incompleteRefs() {
        this.restart();
    }

    restart() {
        if (!this.state.ready) return;
        if (this.state.complete) this.incomplete();

        this.setState({
            time: 0,
            stamp: 0,
        }, () => {
            if (this.state.started) {
                this.checkComplete();
            } else {
                this.start();
            }
        });
    }

    stop() {
        if (!this.state.started) return;
        this.setState({
            started: false
        });
    }

    pause() {
        if (!this.state.started) return;
        this.setState({
            paused: true
        });
    }

    resume() {
        if (!this.state.paused) return;
        this.setState({
            paused: false
        }, () => {
            if (this.state.started) {
                this.checkComplete();
            } else {
                this.start();
            }
        });
    }

    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);

        // TODO convert all uses of "restart" prop to action prop below AIM 12/7/16
        if (props.restart && props.restart !== this.props.restart) {
            this.restart();
        }

        if (props.action && props.action !== this.props.action) {
            switch (props.action) {
                case 'restart': this.restart(); break;
                case 'stop': this.stop(); break;
                case 'pause': this.pause(); break;
                case 'resume': this.resume(); break;
                case 'complete': this.complete(); break;
            }
        }
    }

    getClassNames() {
        return classNames('timer', super.getClassNames());
    }

    render() {
        var time = this.props.getTime.call(this);
        return (
            <div {...this.props} className={this.getClassNames()} time={time}>
                {this.props.leadingContent}
                <span>
                    {time}
                </span>
                {this.props.children}
            </div>
        );
    }
}

Timer.defaultProps = _.defaults({
    getTime: function () {
        return moment(this.props.countDown ? this.props.timeout - this.state.time :
            this.state.time).format(this.props.format);
    },
    format: 'm:ss',
    leadingContent: '',
    timeout: 60000,
    countDown: false,
}, skoash.Component.defaultProps);

export default Timer;
