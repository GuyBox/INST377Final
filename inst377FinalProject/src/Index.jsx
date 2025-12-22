import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./Index.css";

function Index() {
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
            
            <div className = "home-page">
                <div className = "hero-section">
                    <h1> Carbon Footprint Tracker </h1>
                    
                    <Link to = "/carbonFootprintMap">
                        <button className = "cta-button">
                            Click Me to Calculate Your Carbon Footprint
                        </button>
                    </Link>
                    
                    <div className = "quick-stats">
                        
                        <div className = "stat-card">
                            <div className = "stat-number"> 3 </div>
                            <div className = "stat-label"> Transport Modes </div>
                        </div>

                        <div className = "stat-card">
                            <div className = "stat-number"> Real-Time </div>
                            <div className = "stat-label"> Route Calculation </div>
                        </div>

                        <div className = "stat-card">
                            <div className = "stat-label"> Reduce Emissions </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;