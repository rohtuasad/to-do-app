import React, {Component} from "react";
import TodoDataService from "../api/TodoDataService";


class RegisterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.registerClicked = this.registerClicked.bind(this)
  }

  render() {
    return (
        <div>
          <h1>Registration</h1>
          <div className="container">
            User Name: <input type="text" name="login"
                              value={this.state.login}
                              onChange={this.handleChange}/>
            Password: <input type="password" name="password"
                             value={this.state.password}
                             onChange={this.handleChange}/>
            e-mail: <input type="text" name="email" value={this.state.email}
                           onChange={this.handleChange}/>
            <button className="btn" onClick={this.registerClicked}>Register</button>
          </div>
        </div>
    )
  }

  handleChange(event) {
    this.setState(
        {
          [event.target.name]: event.target.value
        }
    )
  }

  registerClicked() {
    TodoDataService.registerUser(this.state)
    .then(
        () => {
          this.props.history.push(`/login`)
        }
    )
    .catch(
        () => {
          this.setState(
              {
                hasRegisterFailed: true,
                showSuccessMessage: false
              }
          )
        }
    )
  }
}

export default RegisterComponent