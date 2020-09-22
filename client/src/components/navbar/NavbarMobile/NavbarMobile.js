
import React from "react";
import "../../App.css";
import { Navbar, Button, Nav } from "react-bootstrap";


class NavbarMobile extends React.Component {
  render() {
    return (
        <Navbar fixed="bottom"  className="Mobile-Nav" bg="dark" variant="dark">
        <Nav className="justify-content-center">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Navbar>
    );
  }
}
export default NavbarMobile;