
import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import classNames from "classnames";
import "../../App.css";
import logo from "../../../images/logo.png";

class NavbarDesktop extends React.Component {

    constructor(props) {
        super(props);
    
        // Moblie first
        this.state = {
          isOpen: true,
          isMobile: false
        };
    
        this.previousWidth = -1;
      }

      toggleNavbar() {
        console.log(this.state.collapsed);
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
    
  render() {
   
    return (
        <div  className={classNames("sidebar", { "is-open": this.state.isOpen })}>
        <div className="sidebar-header flex-column">
          <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top tiny-town-tours-logo"
          />{' '}
        </Navbar.Brand>
        </div>
        <Nav className="flex-column pt-2">
          <Nav.Item className="active">
            <Nav.Link href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">
              Tiny Town Tours
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/AdamPage">
              Adam Page
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
        </div>

    );
  }
}

export default NavbarDesktop;