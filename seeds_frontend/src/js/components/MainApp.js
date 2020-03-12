import React from 'react';
import leaf_logo from "../../images/leaf logo.png";
import "../../css/MainApp.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MainApp extends React.Component {
    render() {
        return (
            <all class="text-center" id="allPage">
            <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header class="masthead mb-auto"></header>
        
          <main role="main" class="inner cover">
          <div class="inner">
              <img src={leaf_logo} id="logo"/>
            </div>
            <h1 class="cover-heading">start here.</h1>
            <p class="lead">
              <a href="/build" class="btn btn-lg btn-secondary">build</a>
              <a href="/deploy" class="btn btn-lg btn-secondary">deploy</a>
              <a href="/both" class="btn btn-lg btn-secondary">both?!</a>
            </p>
          </main>
        
          <footer class="mastfoot mt-auto">
            <div class="inner">
            </div>
          </footer>
        </div>
        </all>
        );
    }
  }