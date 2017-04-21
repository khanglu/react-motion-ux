import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'


class Transformation extends Component {
  constructor () {
    super()
    this.state = {
      width: 50,
      height: 50,
      radius: 50
    }
    this.toggleTransformation = this.toggleTransformation.bind(this)
  }

  toggleTransformation () {
    if (this.state.width === 50) {
      this.setState({width: 500, height: 200, radius: 5})
    } else {
      this.setState({width: 50, height: 50, radius: 50})
    }
  }

  render () {
    const { width, height, radius } = this.state
    const config = {stiffness: 200, damping: 33}
    return (
      <Motion 
        style={{
          // these are motionValue.x/y/z that will be injected inside the child function
          x: spring(width, config),
          y: spring(height, config),
          z: spring(radius, config)
        }}
      >
        {
          motionValue => 
            <div 
              style={{
                minHeight: '1px', // minHeight for creating an empty div with shape
                backgroundColor: '#e2e2e2',
                borderRadius: motionValue.z,
                width: motionValue.x + 'px',
                height: motionValue.y + 'px'
              }}
              onClick={this.toggleTransformation}
            ></div>
        }
      </Motion>
    )
  }
}

export default Transformation