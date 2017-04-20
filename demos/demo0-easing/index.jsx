import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.querySelector('#content')
  )
}

render(Demo)

if (module.hot) {
  module.hot.accept('./Demo', () => { render(Demo) })
}