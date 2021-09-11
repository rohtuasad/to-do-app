import React, { Component } from "react";

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
                {this.state.hasLoginFailed && <div>Invalid credentials</div>}
                {this.state.showSuccessMessage && <div>Login success</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
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
        if (this.state.username === 'dasauthor' && this.state.password === '1234') {
            this.setState(
                {
                    hasLoginFailed: false,
                    showSuccessMessage: true
                }
            )
        } else {
            this.setState(
                {
                    hasLoginFailed: true,
                    showSuccessMessage: false
                }
            )
        }
    }
}

export default LoginComponent