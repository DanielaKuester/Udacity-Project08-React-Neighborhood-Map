import React, { Component } from 'react';
import './App.css';

class App extends Component {

    componentDidMount() {
        var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsYS1rdWVzdGVyIiwiYSI6ImNqam9jdjF1YTAxczQzcG9na3JrZmh2bnkifQ.zMFUT-fI5tsviUOPZsJxog';
        this.map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/streets-v10'
        });
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

                    </div>
                </section>
            </div>
        );
    }
}

export default App;
