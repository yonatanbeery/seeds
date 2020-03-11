import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from "./js/components/MainPage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={MainPage} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))