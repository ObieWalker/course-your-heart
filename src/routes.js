import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/App';
import HomePage from './components/home/Homepage'
import AboutPage from './components/about/AboutPage'
import CoursePage from './components/course/CoursePage'

const Routes = () => (
  <BrowserRouter>
    <div className="">
      <App>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
      </App>
    </div>
  </BrowserRouter>
);

export default Routes;