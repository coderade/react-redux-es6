import React from 'react';
import {Route, IndexRoute} from 'react-router';
import  App from './components/App';
import  Homepage from './components/home/HomePage';
import  AboutPage from './components/about/AboutPage';

export default App(
  <Route>
    <indexRoute component="HomePage"/>
    <Route path="about" component={AboutPage}/>
  </Route>
)
