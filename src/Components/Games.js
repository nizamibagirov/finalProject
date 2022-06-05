import React, { Component } from "react";
import AboutGameLeft from "./AboutGameLeft";
import AboutGameRight from "./AboutGameRight";
import Logo from "./images/horse-head-lines.png";

class Games extends Component{
    render() {
        const containerstyle = {
            height: "1000px",
            backgroundColor: 'black',
            color: 'white',
        }
        return(
            <div style={containerstyle} className="container">
                <h1> OUR GAMES</h1>
                <AboutGameLeft image = {Logo} name="CUBGAME" about = "This game is greatTTTTT " path = "/cubgame"/>
                <AboutGameRight image = {Logo} name="Second Game" about = "This is second game which i load here tomorrow" path = "/courierdrone"/>
                <AboutGameLeft image = {Logo} name="TOWER DEFENCE 2D" about = "Basic Tower Defence 2D Game " path = "towerdefence"/>
            </div>
        )
    }
}

export default Games