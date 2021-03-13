import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import 'bulma/css/bulma.css';
import './styles.scss';

//Import provider, wrap app in provider and pass in store={store}
// create store with const store = createStore(reducer)

const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement);
