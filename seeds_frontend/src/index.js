import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './js/store/store.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./js/components/MainPage";
import Build from "./js/components/Build";
import Deploy from "./js/components/Deploy";
import Both from "./js/components/Both";

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