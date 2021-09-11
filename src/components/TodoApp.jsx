import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome" component={WelcomeComponent} />
                            <Route component={Error404Component} />
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }
}

function Error404Component() {
    return <div>Nothing here</div>
}

export default TodoApp
