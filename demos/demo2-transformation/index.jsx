import React from 'react';
import ReactDOM from 'react-dom';
import Transformation from './Transformation';
import './demo.css'

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.querySelector('#content')
  )
}

render(Transformation)

if (module.hot) {
  module.hot.accept('./Transformation', () => { render(Transformation) })
}