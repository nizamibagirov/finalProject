import React, { Component } from "react";
import { Link } from "react-router-dom";

class AboutGameLeft extends Component{
    render() {

        const containerstyle={
            display: 'flex',
            marginTop: "50px",
        }

        const logosection = {
            height: "200px",
            width: "30%"
        }

        const aboutsection = {
            height: "200px",
            width: "70%",      
        }

        const aboutGame = {
            height: "200px",
            display: 'flex',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
        }

        const buttonsection = {
            display: 'flex',
            alignItems: 'right',
            flex: 1,
            justifyContent: 'right',
        }
        return(
            <div style={containerstyle} className="container">
                <div style={logosection} className="logosection">
                <img style={{width: "50%",backgroundColor: 'red'}} src={this.props.image} />
                <h3> {this.props.name} </h3>
                </div> 
                <div style={aboutsection} className="aboutsection">
                    <div style={aboutGame} className="aboutGame">
                        <p> {this.props.about}</p>
                    </div>
                    <div style={buttonsection} className="butttonsection">
                        <Link to={this.props.path}>
                            <button style={{width: "150px", height: "40px",marginLeft: "20px"}}> Learn more </button>
                        </Link>

                    </div>
                </div>
            </div>
        )
    }
}

export default AboutGameLeft