import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import history from '../history';
import App from './components/App';
import HomePage from './components/home/Homepage'
import AboutPage from './components/about/AboutPage'
import CoursePage from './components/course/CoursePage'
import ManageCoursePage from './components/course/ManageCoursePage'

const Routes = () => (
  <BrowserRouter history={history}>
    <div className="">
      <App>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Route exact path="/course" component={ManageCoursePage} />
        <Route path="/course/:id" component={ManageCoursePage} />
      </App>
    </div>
  </BrowserRouter>
);

export default Routes;