import React, { Component } from "react";
import TodoDataService from "../api/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount() {
        this.refreshTodos()
    }

    deleteTodoClicked(id) {
        TodoDataService.deleteTodo(AuthenticationService.getLoggedInUser(), id)
            .then(
                response => {
                    this.setState({ message: `Delete of todo ${id} successfull` })
                    this.refreshTodos()
                }
            )
    }

    refreshTodos() {
        TodoDataService.retrieveAllTodos(AuthenticationService.getLoggedInUser())
            .then(
                response => {
                    this.setState({ todos: response.data })
                }
            )
    }

    render() {
        return (
            <div>
                <h1>List todos</h1>
                <div className="container">
                    {this.state.message && <div className='allert alert-success'>{this.state.message}</div>}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
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