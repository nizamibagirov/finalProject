
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const divstyle = {
        color: "white",
        backgroundColor: "black",
        width: "100%",
        height: "40px",
        fontFamily: "Arial",
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        position: 'fixed',
      };

      const listyle = {
        float: 'left',
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: "14px 16px"
      }

      const ulstyle = {
        listStyleType: 'none',
        marginLeft: "550px",
        padding: "0px",
        overflow: 'hidden',
      }
    return (
        <div style={divstyle} className="Navbar">
            <ul style={ulstyle}>
                <li style={listyle}>Home</li>
                <li style={listyle}>About Us</li>
                <li style={listyle}>Games</li>
                <li style={listyle}>Contact US</li>
            </ul>
        </div>
    );
  }
}

export default Navbar