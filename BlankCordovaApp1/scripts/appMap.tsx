import { Component } from "react";
import React = require("react");
import L = require("leaflet");

export default class AppMap extends Component<React.HTMLAttributes<AppMap>> {
    mapElement = React.createRef<HTMLDivElement>();

    componentDidMount() {
        var map = L.map(this.mapElement.current).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    }

    render() {
        return (
            <div style={this.props.style} ref={this.mapElement}>

            </div>
        );
    }
}