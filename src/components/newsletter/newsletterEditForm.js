import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormTitle } from "../formTitle";
import { FormInput, FormTextArea, FormButton, FormImage } from "../formFields";
import { connect } from "react-redux";
import { ROOT_URL } from "../../config";

class EditNewsletterForm extends Component {
  render() {
    const { handleSubmit, formTitle } = this.props;
    const {
      fieldOnePlaceholder,
      fieldOneTitle,
      fieldTwoPlaceholder,
      fieldTwoTitle,
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className="newsletter-new-form">
        <FormTitle className="newsletter-new-form__title" text={formTitle} />
        <Field
          className="newsletter-new-form__newsletter-title"
          placeholder={fieldOnePlaceholder}
          component={FormInput}
          name="title"
          type="text"
          title={fieldOneTitle}
        />
        <Field
          className="newsletter-new-form__body"
          placeholder={fieldTwoPlaceholder}
          component={FormTextArea}
          name="body"
          type="text"
          title={fieldTwoTitle}
        />
        <Field
          className="newsletter-new-form__submit"
          small={true}
          danger={true}
          component={FormButton}
          name="submit"
          type="submit"
          title="Submit"
        />
        <Field
          className="newsletter-new-form__cancel"
          small={true}
          component={FormButton}
          name="cancel"
          type="button"
          title="Cancel"
          onClick={this.props.onCancel}
        />
        <Field
          className="newsletter-new-form__image"
          small={true}
          component={FormImage}
          name="image"
          type="file"
          title="Image"
          imageUrl={
            this.props.initialValues.imageUrl
              ? `${ROOT_URL}${this.props.initialValues.imageUrl}`
              : "http://via.placeholder.com/150x137"
          }
        />
      </form>
    );
  }
}

EditNewsletterForm = reduxForm({
  form: "editnewsletter",
  enableReinitialize: true,
})(EditNewsletterForm);

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletter;
  return {
    initialValues: newsletterToEdit,
  };
}

export default connect(mapStateToProps)(EditNewsletterForm);
