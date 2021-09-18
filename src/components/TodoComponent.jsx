import React, { Component } from "react";
import moment from "moment";
import { Field, Form, Formik } from "formik";

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            description: 'Learn forms',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    render() {
        let { description, targetDate } = this.state
        return (<div>
            <h1>Todo</h1>
            <div className='container'>
                <Formik
                    initialValues={{ description, targetDate }}
                    onSubmit={this.onSubmit}
                >
                    {
                        (props) => (
                            <Form>
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

    onSubmit(values) {
        console.log(values)
    }
}

export default TodoComponent