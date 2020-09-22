import React, { Component, useState } from "react";
import logo from "../logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './homePage/homePage';
import PortNavbar from './navbar/Navbar';

class App extends Component {
    constructor(props) {
        super(props);
    
        // Moblie first
        this.state = {
          isOpen: false,
          isMobile: true
        };
    
        this.previousWidth = -1;
      }
    
      updateWidth() {
        const width = window.innerWidth;
        const widthLimit = 576;
        const isMobile = width <= widthLimit;
        const wasMobile = this.previousWidth <= widthLimit;
    
        if (isMobile !== wasMobile) {
          this.setState({
            isOpen: !isMobile
          });
        }
        this.previousWidth = width;
      }
      /**
       * Add event listener
       */
      componentDidMount() {
        this.updateWidth();
        window.addEventListener("resize", this.updateWidth.bind(this));
      }

      /**
       * Remove event listener
       */
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth.bind(this));
      }
    render() {
        return (
            <div className="App wrapper">
              <PortNavbar toggle={this.toggle} isOpen={this.state.isOpen} />
              <HomePage toggle={this.toggle} isOpen={this.state.isOpen} />
            </div>
          );
    }
}

export default App;

