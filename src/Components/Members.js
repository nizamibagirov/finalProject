import React, { Component } from "react";

class Members extends Component {
    render() {
        const membersstyle = {
            width: "180px",
            borderRadius: "15px",
            height: "230px",
            backgroundColor: "red",
            margin: "auto",
            margin: "10px 0",
            marginLeft: "20px",
            marginTop: "20px",
        }
        return(
            <div style={membersstyle} class="members">
                <img style = {{width: "100%", height: "75%" , borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}src={this.props.image}></img>
            <p>{this.props.name}</p>
            <p>{this.props.profession}</p>
          </div>
        )
    }
}

export default Members