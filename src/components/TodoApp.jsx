import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome" component={WelcomeComponent} />
                    </>
                </Router>
            </div>
        )
    }
}

export default TodoApp
