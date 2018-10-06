import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import styled from 'styled-components';
import { castOutputToString, setText, buildNewOutput } from './utils';

const Char = styled.span`
  opacity: 1;
  transition: opacity 0.05s ease-out;
`;

const DudChar = styled(Char)`
  opacity: 0.6;
`;

const toString = ({ char }) => char;

let busyBy = null;

export default class TextScamble extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dudClassName: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    onDone: PropTypes.func,
    onDoneTimeout: PropTypes.number,
  };

  static defaultProps = {
    children: '',
    component: 'span',
    onDoneTimeout: 1,
  };

  state = {
    frame: 0,
    output: [],
    newText: this.props.children,
    oldText: '',
    queue: [],
    done: false,
  };

  ref = React.createRef();

  componentDidMount() {
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        this.setText(this.props.children);
      });
    } else {
      this.setText(this.props.children);
    }
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (!isEqual(newProps.children, this.props.children)) {
      this.setText(newProps.children);
    }
  }

  shouldComponentUpdate(newProps, newState) {
    // component is not depended on children directly,
    // rather on output[] from children

    const result = castOutputToString(newState.output) !== castOutputToString(this.state.output);

    return result;
  }

  componentDidUpdate() {
    if (this.state.done && this.props.onDone) {
      clearTimeout(this.onDoneTimeoutRequest);
      this.onDoneTimeoutRequest = setTimeout(this.props.onDone, this.props.onDoneTimeout);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.onDoneTimeoutRequest);
    this.cancelAnimation();
  }

  // eslint-disable-next-line complexity
  setText(children) {
    if (!children || !children.length) {
      return;
    }

    const { oldText } = this.state;

    const state = setText(children, oldText);

    this.setState(state, () => {
      this.cancelAnimation();
      this.update();
    });
  }

  update() {
    if (busyBy && busyBy !== this.ref) {
      return window.requestAnimationFrame(() => this.update());
    }

    const { frame, queue } = this.state;
    const { newQueue, output, complete } = buildNewOutput(queue, frame);
    const done = complete === queue.length;

    busyBy = this.ref;

    this.setState(
      {
        frame: frame + 1,
        queue: newQueue,
        oldText: castOutputToString(output),
        output,
        done,
      },
      () => {
        if (!done) {
          this.animate();
        } else {
          busyBy = null;
        }
      },
    );
  }

  cancelAnimation() {
    window.cancelAnimationFrame(this.frameRequest);
  }

  animate() {
    this.frameRequest = window.requestAnimationFrame(() => this.update());
  }

  renderChar = ({ char, dud = false }, i) => {
    const Component = dud ? DudChar : Char;

    return <Component key={i}>{char}</Component>;
  };

  render() {
    const { component: Component = 'span', children } = this.props;
    const { done, output } = this.state;

    return (
      <Component ref={this.ref}>
        <noscript>{children}</noscript>

        {done ? output.map(toString).join('') : output.map(this.renderChar)}
      </Component>
    );
  }
}
