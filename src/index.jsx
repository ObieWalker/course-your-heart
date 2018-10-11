import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router-dom'
import { loadCourses } from './actions/courseActions';
import Routes from './routes'
import { configureStore } from './store/configureStore';


const store = configureStore();
store.dispatch(loadCourses())

ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);