import React from 'react';
import ReactDOM from 'react-dom';
import ValueChange from './ValueChange';
import './demo.css'

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.querySelector('#content')
  )
}

render(ValueChange)

if (module.hot) {
  module.hot.accept('./ValueChange', () => { render(ValueChange) })
}