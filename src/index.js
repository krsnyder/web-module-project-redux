import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import 'bulma/css/bulma.css';
import './styles.scss';
import { BrowserRouter } from 'react-router-dom'
import logger from 'redux-logger'

//Import provider, wrap app in provider and pass in store={store}
// create store with const store = createStore(reducer)

const store = createStore(reducer, applyMiddleware(logger))

const rootElement = document.getElementById('root');
ReactDOM.render(<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>,
  rootElement);
