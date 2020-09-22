import React, { Component } from "react";
import "../App.css";
import { Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; 
import { FormControl } from 'react-bootstrap';


class PortNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            dbResponse: ""
        };
    }

    render() {
        return (
            
            <div className="App">
                <h1> HIIII</h1>
                <header className="App-header">
            
            </header>
            </div>
        );
    }
}

export default PortNavbar;

