import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TinyTownNavbar from './TinyTownNavBar/Navbar';
import PortNavbar from'./navbar/Navbar';


const renderLoader = () => <p>Loading</p>;
const TinyTownTour = lazy(() => import( './TinyTownTour/TinyTownTour'));
const HomePage =  lazy(() => import( './homePage/homePage'));
const AdamPage  = lazy(() => import('./AdamPage/AdamPage'));

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
              <Router>
                <Switch>

                  <Route exact path="/tinytowntours" component={() => <TinyTownNavbar toggle={this.toggle} isOpen={this.state.isOpen} /> } />
                  <Route component={() => <PortNavbar toggle={this.toggle} isOpen={this.state.isOpen} /> } />

                </Switch>
              </Router>
              <Router>
                <Switch>
                <Suspense fallback={renderLoader()}>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/AdamPage" component={AdamPage} />
                  <Route exact path="/TinyTownTours" component={TinyTownTour} />
                  </Suspense>
                </Switch>
              </Router>
            </div>
          );
    }
}

export default App;

