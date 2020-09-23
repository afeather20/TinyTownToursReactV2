import React, { Component } from "react";
import { Container } from "react-bootstrap";
import classNames from "classnames";
import logo from "../../images/logo.jpg";
import "../App.css";

import NavBar from "./navBar";

const DOMAIN = process.env.API_ENDPOINT_DOMAIN || "http://localhost:9000";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            dbResponse: ""
        };
    }
    

    // Go to API and check testAPI route for a response
    callAPI() {
        fetch(`${DOMAIN}/testAPI`)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
        console.log(this.state.apiResponse);
    }

    // Execute the calls when componnent mounts
    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <Container fluid className={classNames("content", { "is-open": this.props.isOpen })}>
                <NavBar toggle={this.props.toggle} />
                <div className="HomePage">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Finch Manor</h1>
                <p className="App-intro">{this.state.apiResponse}</p>
                </div>
            </Container>
        );
    }
}

export default App;

