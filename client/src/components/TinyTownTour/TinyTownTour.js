import React, { Component } from "react";
import "../App.css";
import { Container} from 'react-bootstrap';
import classNames from "classnames";
import mapboxgl  from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWZlYXRoZXIyMCIsImEiOiJjazhmaDlrYmEwNDg2M2dzMHRycG4wMXJzIn0._FYX6dOkYeSWZTCyQtZs0w';

class TinyTownTour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 2
        };
    }

    componentDidMount() {

      
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        // map.addControl(
        //     new MapboxGeocoder({
        //     accessToken: mapboxgl.accessToken,
        //     mapboxgl: mapboxgl,
        //     marker: false,
        //     })
        //     );
        var geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
            });
            // Add geolocate control to the map.
        map.addControl(
            new mapboxgl.GeolocateControl({
            positionOptions: {
            enableHighAccuracy: true
            },
            trackUserLocation: true
            })
        );
        document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
        }
    render() {
 
        return (

               <Container fluid className={classNames("content", { "is-open": this.props.isOpen })}>

                <div id="geocoder" className="geocoder"></div>
                <div ref={el => this.mapContainer = el} className="mapContainer"  > </div>
          </Container>

        );
    }
}

export default TinyTownTour;

