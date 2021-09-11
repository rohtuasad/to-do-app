import React, { Component } from "react";
import LoginComponent from "./LoginComponent";

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent />
            </div>
        )
    }
}

export default TodoApp
