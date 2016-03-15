import React from 'react';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import App from './containers/App';
import reducers from './reducers';

const store = createStore(reducers, {
	visibility: true
});

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)