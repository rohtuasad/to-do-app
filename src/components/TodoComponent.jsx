import React, { Component } from "react";
import moment from "moment";
import { ErrorMessage, Field, Form, Formik } from "formik";

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            description: 'Learn forms',
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
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
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

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if(values.description.length < 5) {
            errors.description = 'Enter at least 5 chacacters in Description'
        }
        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter valid target date'
        }
        return errors
    }

    onSubmit(values) {
        console.log(values)
    }
}

export default TodoComponent