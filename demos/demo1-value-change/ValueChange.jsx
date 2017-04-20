import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

const ValueChange = () => (
  <Motion defaultStyle={{x: 0}} style={{x: spring(10, {stiffness: 120, damping: 40})}}>
    {value => <div>{Math.round(value.x)}</div>}
  </Motion>
)

export default ValueChange