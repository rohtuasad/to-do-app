import React, { Component } from "react";
import moment from "moment";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TodoDataService from "../api/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    render() {
        let { description, targetDate } = this.state
        return (<div>
            <h1>Todo</h1>
            <div className='container'>
                <Formik
                    initialValues={{ description, targetDate }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={true}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                <fieldset className='form-group'>
                                    <label>Description</label>
                                    <Field className='form-control' type='text' name='description' />
                                    <label>Target Date</label>
                                    <Field className='form-control' type='date' name='targetDate' />
                                </fieldset>
                                <button className='btn btn-success' type='submit'>Save</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </div>)
    }

    componentDidMount() {
        if (this.state.id == -1) {
            return
        }
        TodoDataService.retrieveTodo(AuthenticationService.getLoggedInUser(), this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: response.data.targetDate
            }))

    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter at least 5 chacacters in Description'
        }
        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter valid target date'
        }
        return errors
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUser()
        let todo = {
            id: this.state.id,
            username: username,
            description: values.description,
            targetDate: values.targetDate
        }
        if (this.state.id == -1) {
            todo.id = null
            TodoDataService.createTodo(username, todo)
                .then(() => this.props.history.push('/todos'))
        } else {
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.history.push('/todos'))
        }
    }
}

export default TodoComponent