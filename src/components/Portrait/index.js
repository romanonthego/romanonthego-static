import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StaggeredMotion, spring} from 'react-motion'
import ThrottledEventsProvider from 'components/ThrottledEventsProvider'
import styled from 'styled-components'
import {busy, isBusy} from 'utils'
import Path from './Path'

const importMePaths = () =>
  import(/* webpackChunkName: 'portrait-paths' */
  /* webpackMode: 'lazy' */
  './paths')

const springWithParams = val => {
  return spring(val, {stiffness: 60, damping: 8, precision: 0.01})
}

const mapToOpacity = () => ({opacity: 0})

const Wrap = styled.aside`
  position: fixed;
  height: 100vh;
  width: 100%;
  width: 100vw;
  min-height: 720px;
  top: 0;
  right: 0;
  pointer-events: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    overflow: visible;
    opacity: 0.3;
    height: 100%;
    width: auto;

    path {
      position: relative;
      will-change: fill-opacity;
    }
  }
`

class Me extends Component {
  static propTypes = {
    subscribe: PropTypes.func.isRequired,
    unsubscribe: PropTypes.func.isRequired,
    staticMe: PropTypes.bool,
    useMouseTracking: PropTypes.bool,
  }

  static defaultProps = {
    staticMe: false,
    useMouseTracking: true,
  }

  state = {
    paths: [],
    x: 0,
    y: 0,
  }

  ref = React.createRef()

  componentDidMount() {
    const check = paths => {
      // isBusy(this.ref)
      // ? window.requestAnimationFrame(() => check(paths))
      setTimeout(
        () => window.requestIdleCallback(() => this.setState({paths})),
        5000
      )
    }

    importMePaths().then(({default: paths}) => check(paths))
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // if (nextProps.useMouseTracking && !this.props.useMouseTracking) {
    //   this.subscribe()
    // }

    if (!nextProps.useMouseTracking && this.props.useMouseTracking) {
      this.unsubscribe()
    }
  }

  shouldComponentUpdate(_, {x: newX, y: newY, paths: nextPaths}) {
    if (nextPaths !== this.state.paths) {
      return true
    }

    const {x, y} = this.state

    if (x !== newX && y !== newY) {
      return true
    }

    return false
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  subscribe = () => {
    this.subscription = this.props.subscribe(
      'mousemove',
      this.handleMouseMove,
      {useRAF: true}
    )
  }

  unsubscribe = () => {
    this.props.unsubscribe('mousemove', this.subscription)
    this.setState({x: 0, y: 0})
  }

  getDefaultStyles = () => {
    return this.state.paths.map(mapToOpacity)
  }

  handleMouseMove = ({clientX: x, clientY: y}) => {
    const {innerHeight: height, innerWidth: width} = window
    const center = {x: width / 2, y: height / 2}

    this.setState({
      x: Math.round(x - center.x),
      y: Math.round(y - center.y),
    })
  }

  mapStyles = prevInterpolatedStyles => {
    const {paths} = this.state

    return prevInterpolatedStyles.map((prevPaths, i) => {
      if (i === 0) {
        return {opacity: springWithParams(paths[0].fillOpacity)}
      }

      const prevValue =
        prevInterpolatedStyles[i - 1].opacity / paths[i - 1].fillOpacity

      if (prevValue > 0.1) {
        return {
          opacity: springWithParams(paths[i].fillOpacity),
        }
      }

      return {opacity: 0}
    })
  }

  renderPath = (path, i) => {
    const {x, y, paths} = this.state
    return (
      <Path
        paths={paths}
        key={i}
        index={i}
        x={x}
        y={y}
        {...paths[i]}
        {...path}
      />
    )
  }

  renderIterpolated = interpolated => {
    return <g>{interpolated.map(this.renderPath)}</g>
  }

  render() {
    return (
      <Wrap ref={this.ref}>
        {this.state.paths.length > 0 && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 402">
            <StaggeredMotion
              defaultStyles={this.getDefaultStyles()}
              styles={this.mapStyles}
            >
              {this.renderIterpolated}
            </StaggeredMotion>
          </svg>
        )}
      </Wrap>
    )
  }
}

export default ThrottledEventsProvider(Me)
