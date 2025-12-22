import React from "react";
import {MapContainer, TileLayer, Marker, Popup, Polyline} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function RouteMap({startCoords, endCoords}) {
    var centerLat = (startCoords.latitude + endCoords.latitude) / 2;
    var centerLon = (startCoords.longitude + endCoords.longitude) / 2;

    var positions = [
        [startCoords.latitude, startCoords.longitude],
        [endCoords.latitude, endCoords.longitude]
    ];

    return (
        <MapContainer center = {[centerLat, centerLon]} zoom = {8} style = {{ height: "400px", width: "100%" }}>
            <TileLayer
                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution = "&copy; OpenStreetMap contributors"
            />
            <Marker position = {[startCoords.latitude, startCoords.longitude]}>
                <Popup> Start </Popup>
            </Marker>
            <Marker position = {[endCoords.latitude, endCoords.longitude]}>
                <Popup> End </Popup>
            </Marker>
            <Polyline positions = {positions} color = "#1e491a" />
        </MapContainer>
    );
}

export default RouteMap;