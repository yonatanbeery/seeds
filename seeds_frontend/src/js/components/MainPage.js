import React from 'react';
import "../../css/LoadingPage.css";
import logo_gif from "../../images/welcom_logo.gif";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

  export default class MainPage extends React.Component {
    state = {
      isLoaded: false
    }
    
    componentDidMount() {
      this.id = setTimeout(() => this.setState({ isLoaded: true }), 1500)
    }

    componentWillUnmount() {
      clearTimeout(this.id)
    }

    render() {
        return (
        <div class={this.state.isLoaded ? "loaded": ""}>
        <div id="loader-wrapper">
          <img src={logo_gif} id="loader"/>
          <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
        </div>
        <div id="App">
        <App />
        </div>
        </div>
        );
    }
  }