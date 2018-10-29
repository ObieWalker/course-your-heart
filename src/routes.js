import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history';
import App from './components/App';
import HomePage from './components/home/Homepage'
import AboutPage from './components/about/AboutPage'
import CoursePage from './components/course/CoursePage'
import ManageCoursePage from './components/course/ManageCoursePage'
import AuthorsPage from './components/authors/AuthorsPage'
import NotFound from './components/NotFound'

const Routes = () => (
  <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursePage} />
          <Route exact path="/course" component={ManageCoursePage} />
          <Route path="/course/:id" component={ManageCoursePage} />
          <Route path="/authors" component={AuthorsPage} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </App>
  </Router>
);

export default Routes;