import React, { useState } from "react";
import "./App.css";
import "./ContactHelp.css";

function ContactHelp() {
    var [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    var [submitted, setSubmitted] = useState(false);

    var handleInputChange = function(e) {
        var fieldName = e.target.name;
        var fieldValue = e.target.value;
        
        setFormData({
            ...formData,
            [fieldName]: fieldValue
        });
    };

    var handleSubmit = function(e) {
        e.preventDefault();
        
        
        console.log("Form submitted:", formData);
        
        setSubmitted(true);
        
        
        setTimeout(function() {
            setSubmitted(false);
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        }, 3000);
    };

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
            
            <div className = "contact-help-page">
            <div className = "contact-container">
                <h1> Contact & Help </h1>




                <section className = "contact-section">
                    <p> Questions? Feedback? Let Us Know! </p>

                    {submitted ? (
                        <div className = "success-message">
                            Thank you for reaching out! We'll respond as soon as we can.
                        </div>
                    ) : (
                        <form onSubmit = {handleSubmit} className = "contact-form">
                            <div className = "form-group">
                                <label htmlFor = "name"> Name </label>
                                <input
                                    type = "text"
                                    id = "name"
                                    name = "name"
                                    value = {formData.name}
                                    onChange = {handleInputChange}
                                    placeholder = "Your Name"
                                    required
                                />
                            </div>

                            <div className = "form-group">
                                <label htmlFor = "email"> Email </label>
                                <input
                                    type = "email"
                                    id = "email"
                                    name = "email"
                                    value = {formData.email}
                                    onChange = {handleInputChange}
                                    placeholder = "you.email@example.com"
                                    required
                                />
                            </div>

                            <div className = "form-group">
                                <label htmlFor = "message"> Message </label>
                                <textarea
                                    id = "message"
                                    name = "message"
                                    value = {formData.message}
                                    onChange = {handleInputChange}
                                    placeholder = "Whats on your mind?"
                                    rows = "6"
                                    required
                                ></textarea>
                            </div>

                            <button type = "submit" className = "submit-btn">
                                Send Message
                            </button>
                        </form>
                    )}
                </section>



                <section className = "help-section">
                    <h2> Quick Start Guide </h2>
                    
                    <div className = "guide-steps">
                        <div className = "guide-step">
                            <div className = "step-number"> 1 </div>
                            <div className = "step-content">
                                <h3> Navigate to the Calculator </h3>
                                <p>
                                    Click on the button called "Calculate Your Carbon Footprint" located on the hompage
                                    or use the navigation menu to access the Carbon Footprint Map page.
                                </p>
                            </div>
                        </div>

                        <div className = "guide-step">
                            <div className = "step-number"> 2 </div>
                            <div className = "step-content">
                                <h3> How to Enter an Address </h3>
                                <p>
                                    To input your starting address and destination you can either use 
                                    specific street addresses or a full address ending in a city, state, or zip code.
                                    The more specific you are the more accurate the calculation will be.
                                </p>
                            </div>
                        </div>

                        <div className = "guide-step">
                            <div className = "step-number"> 3 </div>
                            <div className = "step-content">
                                <h3> Choose Your Method of Transportation </h3>
                                <p>
                                    We currently offer a selection of a Car, Bicycle, or Walking. 
                                    Each will provide different carbon emissions.
                                </p>
                            </div>
                        </div>

                        <div className = "guide-step">
                            <div className = "step-number"> 4 </div>
                            <div className = "step-content">
                                <h3> View Your Results </h3>
                                <p>
                                    Click the calculate button to see your carbon footprint.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                <section className = "faq-section">
                    <h2> Frequently Asked Questions </h2>
                    
                    <div className = "faq-item">
                        <h3> Are the carbon calculations accurate? </h3>
                        <p>
                            Our carbon calculations use industry-standard emission factors and 
                            real-time route data inorder to provide the most accurate results.
                        </p>
                    </div>

                    <div className = "faq-item">
                        <h3> What transportation modes are supported? </h3>
                        <p>
                          We currently support cars, bicycle, and walking. 
                        </p>
                    </div>

                    <div className = "faq-item">
                        <h3> Can I track my carbon footprint over time? </h3>
                        <p>
                            Yes you can! Any calculations made are saved on the page.
                        </p>
                    </div>

                    <div className = "faq-item">
                        <h3> What if the address I entered didnt work. </h3>
                        <p>
                            Try a more specific address.
                            Make sure to include the city and state for best results.
                        </p>
                    </div>
                </section>
            </div>
        </div>
        </div>
    );
}

export default ContactHelp;