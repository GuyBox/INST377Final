import React from "react";
import "./App.css";
import "./About.css";

function About() {
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
            
            <div className = "about-page">
            <div className = "about-container">
                <h1> About This Project </h1>
                
                <section className = "about-section">
                    <h2> Why I Created This </h2>
                    <p>
                        As an information science student here at the university of maryland,
                        I have always been interest in how technology can be used to solve real world
                        problems. One of the big ones that effects everyone in the world is our envirnoment.
                        Its important for people to be aware of how their actions affect it in order to protect it.
                    </p>
                    <p>
                        My project aims to provide a service that allows people to become more aware of the impact
                        their having on their day to day commuts.
                    </p>
                </section>

                <section className = "about-section">
                    <h2> The Mission </h2>
                    <p>
                        I am to give people a tool that allows them to make environmentaly conscious choices when travelling
                        by providing realtime information about carbon emissions.
                    </p>
                    <div className = "mission-points">
                        <div className = "mission-point">
                            <span className = "emoji"> 🌍 </span>
                            <div>
                                <h3> Environmental Conscientiousness </h3>
                           
                            </div>
                        </div>
                        <div className = "mission-point">
                            <span className = "emoji"> 📊 </span>
                            <div>
                                <h3> Real Time Data-Driven Decisions </h3>
                    
                            </div>
                        </div>

                    </div>
                </section>

                <section className = "about-section">
                    <h2> How It Works </h2>
                    <ol className = "how-it-works">
                        <li>
                            <strong> Enter Your Route: </strong> Input your starting point 
                            and destination using real addresses
                        </li>
                        <li>
                            <strong> Choose Transportation: </strong> Select from car, 
                            bicycle, or walking
                        </li>
                        <li>
                            <strong> Get Results: </strong> See the distance, duration, 
                            and carbon emissions for your trip
                        </li>
                        <li>
                            <strong> Track History: </strong> View your past calculations 
                            and compare different routes
                        </li>
                    </ol>
                </section>

                <section className = "about-section">
                    <h2> Technologies Used </h2>
                    <div className = "tech-grid">
                        <div className = "tech-item"> React & Vite </div>
                        <div className = "tech-item"> OpenStreetMap API </div>
                        <div className = "tech-item"> OpenRouteService </div>
                        <div className = "tech-item"> CarbonSutra </div>
                        <div className = "tech-item"> Supabase Database </div>
                        <div className = "tech-item"> Chart.js </div>
                    </div>
                </section>

                <section className = "about-section">
                    <h2> About the Developer </h2>
                    <p>
                        This is my final project for my INST377 course at the University of Maryland.
                        I used this project as an opportunity to not only explore web development but allows
                        contribute to a cause I am passionate about. I hope that this tool helps people be more aware
                        of the impact their traveling has on the environment.
                    </p>
                </section>
            </div>
        </div>
        </div>
    );
}

export default About;