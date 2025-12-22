import React, { useState } from "react";
import { getCompleteTripData, getCarbonHistory } from "./apiUtils";
import CarbonChart from "./CarbonChart";
import RouteMap from "./RouteMap";
import "./App.css";
import "./CarbonFootprintMap.css";

function CarbonFootprintMap() {


    var [startAddress, setStartAddress] = useState("");
    var [endAddress, setEndAddress] = useState("");
    var [transportMode, setTransportMode] = useState("driving-car");
    var [tripData, setTripData] = useState(null);
    var [history, setHistory] = useState([]);


    var handleCalculate = async function(e) {
        e.preventDefault();
        var data = await getCompleteTripData(startAddress, endAddress, transportMode);
        setTripData(data);
        loadHistory();
    };


    var loadHistory = async function() {
        var historyData = await getCarbonHistory();
        setHistory(historyData);
    };


    React.useEffect(function() {
        loadHistory();
    }, []);


    return (
        <div>
            <nav>
                <ul>
                    <li><a href = "/"> Home </a></li>
                    <li><a href = "/carbonFootprintMap"> Carbon Calculator </a></li>
                    <li><a href = "/about"> About </a></li>
                    <li><a href = "/contact"> Contact/Help </a></li>
                </ul>
            </nav>
            

            <div className = "carbon-footprint-map">
                <div className = "container">
                    <h1> Carbon Footprint Calculator </h1>
                    <p className = "subtitle"> Calculate the environmental impact of your journey </p>


                    <form onSubmit = {handleCalculate} className = "calculator-form">
                        <div className = "form-group">
                            <label htmlFor = "start-address"> Starting Address </label>
                            <input
                                type = "text"
                                id = "start-address"
                                value = {startAddress}
                                onChange = {function(e) { setStartAddress(e.target.value); }}
                                required
                            />
                        </div>


                        <div className = "form-group">
                            <label htmlFor = "end-address"> Destination Address </label>
                            <input
                                type = "text"
                                id = "end-address"
                                value = {endAddress}
                                onChange = {function(e) { setEndAddress(e.target.value); }}
                                required
                            />
                        </div>


                        <div className = "form-group">
                            <label htmlFor = "transport-mode"> Transportation Mode </label>
                            <select
                                id = "transport-mode"
                                value = {transportMode}
                                onChange = {function(e) { setTransportMode(e.target.value); }}
                            >
                                <option value = "driving-car"> Car </option>
                                <option value = "cycling-regular"> Bicycle </option>
                                <option value = "foot-walking"> Walking </option>
                            </select>
                        </div>


                        <button type = "submit" className = "calculate-btn">
                            Calculate Carbon Footprint
                        </button>
                    </form>



                    {tripData && (
                        <div className = "results-section">
                            <h2> Trip Results </h2>
                            

                            <div className = "results-grid">
                                <div className = "result-card">
                                    <h3> Route Information </h3>
                                    <div className = "info-item">
                                        <span className = "label"> From: </span>
                                        <span className = "value"> {tripData.startLocation.address} </span>
                                    </div>
                                    <div className = "info-item">
                                        <span className = "label"> To: </span>
                                        <span className = "value"> {tripData.endLocation.address} </span>
                                    </div>
                                    <div className = "info-item">
                                        <span className = "label"> Distance: </span>
                                        <span className = "value"> {tripData.route.distance} km </span>
                                    </div>
                                    <div className = "info-item">
                                        <span className = "label"> Duration: </span>
                                        <span className = "value"> {tripData.route.duration} minutes </span>
                                    </div>
                                </div>


                                <div className = "result-card carbon-card">
                                    <h3> Carbon Footprint </h3>
                                    <div className = "carbon-display">
                                        <div className = "carbon-main">
                                            <span className = "carbon-value"> {tripData.carbon.carbonKg} </span>
                                            <span className = "carbon-unit"> kg CO₂ </span>
                                        </div>
                                        <div className = "carbon-conversions">
                                            <div> {tripData.carbon.carbonLbs} lbs CO₂ </div>
                                            <div> {tripData.carbon.carbonMt} metric tons CO₂ </div>
                                        </div>
                                    </div>
                                </div>


                                <div className = "result-card">
                                    <h3> Location Coordinates </h3>
                                    <div className = "info-item">
                                        <span className = "label"> Start: </span>
                                        <span className = "value">
                                            {tripData.startLocation.coords.latitude.toFixed(4)}, 
                                            {tripData.startLocation.coords.longitude.toFixed(4)}
                                        </span>
                                    </div>


                                    <div className = "info-item">
                                        <span className = "label"> End: </span>
                                        <span className = "value">
                                            {tripData.endLocation.coords.latitude.toFixed(4)}, 
                                            {tripData.endLocation.coords.longitude.toFixed(4)}
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div style = {{ marginTop: "32px" }}>
                                <h3> Carbon Emissions Chart </h3>
                                <CarbonChart carbonData = {tripData.carbon} />
                            </div>

                            <div style = {{ marginTop: "32px" }}>
                                <h3> Route Map </h3>
                                <RouteMap 
                                    startCoords = {tripData.startLocation.coords} 
                                    endCoords = {tripData.endLocation.coords} 
                                />
                            </div>
                        </div>
                    )}



                    {history.length > 0 && (
                        <div className = "history-section">
                            <h2> Recent Calculations </h2>
                            <div className = "history-list">
                                {history.map(function(item, index) {
                                    return (
                                        <div key = {index} className = "history-item">
                                            <div className = "history-route">
                                                {item.start_address} to {item.end_address}
                                            </div>
                                            <div className = "history-details">
                                                <span> {item.distance_km} km </span>
                                                <span> {item.carbon_kg} kg CO₂ </span>
                                                <span className = "transport-badge"> {item.transport_mode} </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}



export default CarbonFootprintMap;