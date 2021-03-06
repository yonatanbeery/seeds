import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './js/store/store.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./js/components/home/MainPage";
import Build from "./js/components/build/Build";
import Deploy from "./js/components/Deploy";
import Both from "./js/components/Both";
import index from "./js/index";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/Build" component={Build} />
      <Route path="/Deploy" component={Deploy} />
      <Route path="/Both" component={Both} />
    </div>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    {routing}
  </Provider>, 
  document.getElementById('root'))