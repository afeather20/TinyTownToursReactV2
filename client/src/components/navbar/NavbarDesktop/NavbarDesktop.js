
import React from "react";

import { Navbar, Button, Nav } from "react-bootstrap";
import classNames from "classnames";
import "../../App.css";

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
        <div className={classNames("sidebar", { "is-open": this.state.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
          </Button>
          <h3>React Portfolio Website</h3>
        </div>
        <Nav className="flex-column pt-2">
          <Nav.Item className="active">
            <Nav.Link href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/TinyTownTours">
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