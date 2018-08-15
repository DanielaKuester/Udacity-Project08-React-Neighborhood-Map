import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

class App extends Component {

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsYS1rdWVzdGVyIiwiYSI6ImNqam9jdjF1YTAxczQzcG9na3JrZmh2bnkifQ.zMFUT-fI5tsviUOPZsJxog';
        this.map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/streets-v10',
            zoom: 13,
            center: [-0.11832, 51.5093]
        });

        this.marker = new mapboxgl.Marker({color: this.props.color, className: 'my-marker'})
            .setLngLat([-0.11832, 51.5093])
            .addTo(this.map)

        this.popup = new mapboxgl.Popup({ offset: 40 })
            .setLngLat([-0.11832, 51.5093])
            .setText('Obviously, Mapbox thinks that the centre of London is somewher in the Thames.')
            .addTo(this.map)
    }


    render() {
        return (
            <div className="App">
                {/*<header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>*/}
                <section>
                    <div id="map" className="map">
                        {/* Initialize map here */}
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
