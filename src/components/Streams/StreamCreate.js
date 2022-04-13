import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux'
import { createStream } from '../../Actions'

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.createStream(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="EnterTitle" />
        <Field
          name="description"
          component={this.renderInput}
          label="enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    //only run if the user did not enter a title
    errors.title = "Keep typing";
  }

  if (!formValues.description) {
    errors.description = "Enter a description";
  }

  return errors;
};

const formWrapped =  reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped)