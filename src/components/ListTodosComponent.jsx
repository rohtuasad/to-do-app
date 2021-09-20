import React, { Component } from "react";
import TodoDataService from "../api/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount() {
        this.refreshTodos()
    }

    updateTodoClicked(id) {
        this.props.history.push(`/todos/${id}`)
    }

    addTodoClicked() {
        this.props.history.push('/todos/-1')
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
                                <th>Is Completed?</th>
                                <th>Target Date</th>                                
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone.toString()}</td>
                                    <td>{moment(todo.targetDate).format('DD.MM.YYYY')}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={() => this.addTodoClicked()}>Add Todo</button>
                    </div>
                </div>
            </div >
        )
    }
}

export default ListTodosComponent