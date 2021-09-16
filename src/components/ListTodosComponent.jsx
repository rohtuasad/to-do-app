import React, { Component } from "react";
import TodoDataService from "../api/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        TodoDataService.retrieveAllTodos(AuthenticationService.getLoggedInUser())
        .then(
            response => {
                this.setState({todos: response.data  })
            }
        )
    }

    render() {
        return (
            <div>
                <h1>List todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>                               
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

export default ListTodosComponent