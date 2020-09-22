import React, { Component } from "react";
import "../App.css";

import { Navbar, Nav, Form, Button, FormControl, NavItem } from 'react-bootstrap';
import  NavbarMobile  from './NavbarMobile/NavbarMobile';
import  NavbarDesktop  from './NavbarDesktop/NavbarDesktop';

import classNames from "classnames";


class PortNavbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
           dimensions: {
              width: window.innerWidth,
              isOpen: false,
              isMobile: true
            },
            apiResponse: "",
            dbResponse: ""
        };
    }

    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
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

    // Go to API and check testAPI route for a response
    callAPI() {
        console.log("LSKANDF");
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
        console.log(this.state.apiResponse);
    }

    // Execute the calls when componnent mounts
    componentDidMount() {

  
      this.callAPI();
     
    }

    render() {
      const {dimensions} =  this.state ;

        return (
          <div>
              {dimensions.width < 620 ? (
              <NavbarMobile/>
             ) : (
               <NavbarDesktop toggle={this.toggle} isOpen={this.state.isOpen} />
          )}
            </div>
        );
    }
}

export default PortNavbar;

