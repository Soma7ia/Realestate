import React, { Component } from "react";
import NewsletterNewForm from "./newsletterNewForm";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NewsletterNew extends Component {
  onSubmit = (fields) => {
    const { title, body, image } = fields;

    var formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image);

    this.props.createNewNewsletter(formData, () => {
      this.props.history.push("/dashboard");
    });
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="newsletter-new">
        <NewsletterNewForm
          onCancel={() => this.onCancel()}
          onSubmit={(event) => this.onSubmit(event)}
          formTitle="New Newsletter"
          fieldOnePlaceholder="Newsletter Title"
          fieldOneTitle="Newsletter Title"
          fieldTwoPlaceholder="Newsletter Body"
          fieldTwoTitle="Body"
        />
      </div>
    );
  }
}

export default connect(null, actions)(NewsletterNew);
