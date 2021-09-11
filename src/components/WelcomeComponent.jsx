import React, { Component } from "react";

class WelcomeComponent extends Component {
    render() {
        return (
            <div>Welcome {this.props.match.params.name}</div >
        )
    }
}

export default WelcomeComponent