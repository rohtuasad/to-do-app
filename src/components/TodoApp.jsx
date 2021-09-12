import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from "./LoginComponent"
import WelcomeComponent from "./WelcomeComponent"
import ListTodosComponent from "./ListTodosComponent"
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todos" component={ListTodosComponent} />
                            <Route component={Error404Component} />
                        </Switch>
                    </>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

function Error404Component() {
    return <div>Nothing here</div>
}

export default TodoApp
