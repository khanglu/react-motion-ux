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
    return (
      <Motion 
        style={{
          /**
           * These are motionValue.x/y/z that will be injected inside the child function
           * Each value can have different config
           */ 
          mWidth: spring(width, {stiffness: 200, damping: 20}),
          mHeight: spring(height, {stiffness: 200, damping: 17}),
          mRadius: spring(radius, {stiffness: 200, damping: 30})
        }}
      >
        {
          motion => 
            <div 
              style={{
                minHeight: '1px', // minHeight for creating an empty div with shape
                backgroundColor: '#e2e2e2',
                borderRadius: motion.mRadius,
                width: motion.mWidth + 'px',
                height: motion.mHeight + 'px'
              }}
              onClick={this.toggleTransformation}
            ></div>
        }
      </Motion>
    )
  }
}

export default Transformation