import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

class Map extends Component {

    state = {
        locations: [
            {
                name: "Notre Dame",
                id: "Notre Dame",
                index: 1,
                pairID: "A",
                coordinates: [2.35, 48.852778]
            },
            {
                name: "Louvre",
                id: "Louvre",
                index: 2,
                pairID: "B",
                coordinates: [2.336389, 48.8625]
            },
            {
                name: "Eiffel Tower",
                id: "Eiffel Tower",
                index: 3,
                pairID: "C",
                coordinates: [2.2945, 48.858222]
            },
            {
                name: "Arc de Triomphe",
                id: "Arc de Triomphe",
                index: 4,
                pairID: "D",
                coordinates: [2.294722, 48.873778]
            },
            {
                name: "Opéra Garnier",
                id: "Opéra Garnier",
                index: 5,
                pairID: "E",
                coordinates: [2.331667, 48.871944]
            }
          ],
        markerColor: "Pink-Icon",
        isClicked: false,
        visibility: "hidden",
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsYS1rdWVzdGVyIiwiYSI6ImNqam9jdjF1YTAxczQzcG9na3JrZmh2bnkifQ.zMFUT-fI5tsviUOPZsJxog';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [2.351667, 48.856667],
            zoom: 12
        });
    }


    render() {
        return (
            <div id="map" class="my-map">
                {/* Initialises the map here*/}
            </div>
        );
    }
}

export default Map;
