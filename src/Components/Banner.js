import React, { Component } from "react";
import Logo from "./images/horse-head-lines.png";

class Banner extends Component {
  render() {
      const containerstyle = {
          height: "100vh",
          widht: "100%",
          backgroundColor: 'red',
          display: 'flex',
      }

      const leftstyle = {
        width:"40%",
        height:"100%",
        backgroundColor: 'red',
      }

      const rightstyle = {
        width:"60%",
        height:"100%",
        backgroundColor: 'black',
        color: "white",
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        display: 'flex'
      }

      const imgstyle = {
        height: "80%",
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      }
    return (
        <div style={containerstyle} className="container">
            <div style={leftstyle} className="left">
                <div style={imgstyle} className="img">
                    <img style={{width: "50%",}} src={Logo} />
                </div>
                <div className="studioName">
                    <p style={{fontSize: "50px",color: "black"}}> Horse gaming studio </p>
                </div>
            </div>
            <div style={rightstyle} className="right">
                <p style={{marginLeft: "20px",fontSize: "30px"}}>
                An indie game studio located in Baku. According to some legends, there are also some mythological creatures among the team members.
                </p>
            </div>
        </div>
    );
  }
}

export default Banner