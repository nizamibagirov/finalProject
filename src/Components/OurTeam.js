import React, { Component } from "react";
import Members from "./Members";
import personImage from "./images/images.jfif";

class OurTeam extends Component {
    render() {
        const containerstyle = {
            height: "500px",
        }

        const membersstyle = {
            display: 'flex',
        }
        return(
            <div style={containerstyle} className="container">
                <h1> Our Team </h1>
                <div style={membersstyle} className="members">
                    <Members image = {personImage} name = "Nizami Bagirov" profession = "Game Developer"/>
                    <Members image = {personImage} name = "Next Person" profession = "Level Designer"/>
                    <Members image = {personImage} name = "Another Person" profession = "2D Artist"/>
                </div>
            </div>
        )
    }
}

export default OurTeam