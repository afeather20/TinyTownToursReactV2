import React, { Component, lazy, Suspense } from "react";
import "../App.css";

const renderLoader = () => <p>Loading</p>;
const NavbarMobile = lazy(() => import('./NavbarMobile/NavbarMobile')); 
const NavbarDesktop = lazy(() => import('./NavbarDesktop/NavbarDesktop')); 

const DOMAIN = process.env.API_ENDPOINT_DOMAIN || "http://api:9000";

class TinyTownNavbar extends Component {
    
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
      const {dimensions} =  this.state ;

        return (
          <Suspense fallback={renderLoader()}>
          <div>
              {dimensions.width < 620 ? (
              <NavbarMobile/>
             ) : (
               <NavbarDesktop toggle={this.toggle} isOpen={this.state.isOpen} />
          )}
            </div>
            </Suspense>
        );
    }
}

export default TinyTownNavbar;

