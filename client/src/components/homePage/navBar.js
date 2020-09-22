
import React from "react";

import { Navbar, Button, Nav , Form, FormControl, Container} from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
    <Container>
        <Form inline>
            <FormControl type="text" placeholder="Search" class="md-10"/>
            <Button variant="outline-success">Search</Button>
        </Form>
    </Container>

    );
  }
}

export default NavBar;