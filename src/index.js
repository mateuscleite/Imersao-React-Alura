import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import NewVideo from './pages/new/video';
import NewCategory from './pages/new/category';
import Page404 from './pages/page404';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom' 

ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/categoria" component={NewCategory} exact/>
      <Route path="/cadastro/video" component={NewVideo} exact/> 
      <Route path="/" component={Home} exact />
      <Route component={Page404} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
