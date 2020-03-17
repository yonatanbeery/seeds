import React, { useState, useEffect } from 'react';
import "../../../css/LoadingPage.css";
import logo_gif from "../../../images/welcom_logo.gif";
import MainApp from "./MainApp";
import 'bootstrap/dist/css/bootstrap.min.css';

  export default function MainPage() {
    const [isLoaded, setLoaded] = useState(false);
    
    useEffect(() => {
      setTimeout(() => setLoaded(true), 1500)
    });

        return (
        <div class={isLoaded ? "loaded": ""}>
        <div id="loader-wrapper">
          <img alt="leaf_logo" src={logo_gif} id="loader"/>
          <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
        </div>
        <div id="App">
        <MainApp />
        </div>
        </div>
        );
  }