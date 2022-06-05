import React, { Component } from "react";
import Logo from "./images/horse-head-lines.png";

class ContactUs extends Component {
    render() {

        const containerstyle = {
            height: "200px",
            display: 'flex',
            backgroundColor: 'grey',

        }

        const leftstyle = {
            height: "100%",
            width: "30%",
        }

        const rightstyle = {
            height: "100%",
            width: "70%",
            display: 'flex',
        }

        return(
            <div style={containerstyle} className="container">
                <div style={leftstyle} className="leftSide"> 
                    <img style={{width: "50%" , height: "50%"}} src={Logo}></img>
                    <p> Copyright © 2022 Horse Games. All rights reserved.</p>
                </div>
                <div style={rightstyle} className="rightSide">
                    <div style={{width: "50%", height:"50%"}} class="links">
                        <h3>links</h3>
                        <ul style={{listStyleType: 'none'}}>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Games</a></li>
                        <li><a href="">Contack Us</a></li>
                        </ul>
                    </div>

                        <div style={{width: "50%", height:"50%"}} class="social">
                        <h3>Social media</h3>
                        <a href="">insta </a>
                        <a href="">face </a>
                        <a href="">Twitter </a>
                        <a href="">youtube </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs