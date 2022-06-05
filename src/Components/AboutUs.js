import React, { Component } from "react";

class AboutUs extends Component {
    render() {
        const containerstyle = {
            height: '50vh',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: "20px",
        }
        const aboutstyle = {
            width: "50%",
        }
        return(
            <div style={containerstyle} className="container">
                <div style={aboutstyle}>
                    <h1>STRONG BOUNDS</h1>
                    <p>We respect our colleagues, reinforce each other to ensure that we maximize the value for everyone.</p>
                </div>
                <div style={aboutstyle}>
                    <h1>PASSIONATE</h1>
                    <p>We respect our colleagues, reinforce each other to ensure that we maximize the value for everyone.</p>
                </div>
                <div style={aboutstyle}>
                    <h1>ADAPTABLE</h1>
                    <p>We learn while developing our projects and we dare ourselves to use those new methods and technologies.</p>
                </div>
            </div>
        )
    }
}

export default AboutUs