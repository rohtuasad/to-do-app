import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'username',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
                    {this.state.showSuccessMessage && <div>Login success</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn" onClick={this.loginClicked}>Login</button>
                </div>
            </div >
        )
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        AuthenticationService.executeBasicAuthentication(this.state.username, this.state.password)
            .then(
                () => {
                    AuthenticationService.registerSuccessLogin(this.state.username, this.state.password)
                    this.props.history.push(`/welcome/${this.state.username}`)
                }
            )
            .catch(
                () => {
                    this.setState(
                        {
                            hasLoginFailed: true,
                            showSuccessMessage: false
                        }
                    )
                }
            )
    }

}

export default LoginComponent