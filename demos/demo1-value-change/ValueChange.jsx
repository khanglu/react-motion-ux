import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'


class ValueChange extends Component {
  constructor () {
    super()
    this.state = {
      currentValue: 0,
      oldValue: 0
    }
    this.onValueChange = this.onValueChange.bind(this)
  }

  onValueChange (newValue) {
    this.setState ((prevState, props) => {
      return {
        currentValue: newValue,
        oldValue: prevState.currentValue
      }
    })
  }

  render () {
    const { currentValue, oldValue } = this.state 
    return (
      <div>
        <input 
          type="range"
          value={currentValue}
          min="0"
          max="50"
          step="10"
          onChange={(e) => this.onValueChange(Number(e.target.value))}
        />
        <Motion 
          defaultStyle={{x: oldValue}}
          style={{x: spring(currentValue, {stiffness: 120, damping: 40})}}
        >
          {motionValue => <div id="value-label">{Math.round(motionValue.x)}</div>}
        </Motion>
      </div>
    )
  }
}

export default ValueChange