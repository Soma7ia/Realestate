import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormTitle } from "../formTitle";
import { FormInput, FormButton } from "../formFields";

class ForgotPasswordForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <FormTitle
          className="forgot-password-form__title"
          text="Forgot Password"
        />
        <Field
          className="forgot-password-form__email"
          placeholder="Enter Email"
          component={FormInput}
          name="email"
          type="email"
          title="Email"
        />
        <Field
          className="forgot-password-form__login"
          component={FormButton}
          name="forgot-password"
          type="submit"
          title="Send Email"
        />
      </form>
    );
  }
}

ForgotPasswordForm = reduxForm({
  form: "forgotpassword",
})(ForgotPasswordForm);

export default ForgotPasswordForm;
