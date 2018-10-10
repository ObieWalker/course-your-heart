import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router-dom'
import history from '../history'
import Routes from './routes'
import { configureStore } from './store/configureStore';


const store = configureStore();


ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);