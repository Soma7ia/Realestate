import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import NewsletterBox from "./newsletterBox";
import NewsletterLatest from "./newsletterLatest";
import { FormTitle } from "../formTitle";
import { FormButton } from "../formFields";

class NewsletterDetails extends Component {
  componentDidMount() {
    this.props.fetchNewsletterWithId(this.props.match.params.id);
  }

  render() {
    console.log(this.props.fetchNewsletterWithId);
    return (
      <div className="newsletter-details">
        <FormTitle
          className="newsletter-details__title"
          text="Newsletter Archive"
        />
        <NewsletterBox date={this.props.newsletterToEdit.date} />
        <NewsletterLatest {...this.props.newsletterToEdit} />
        <FormButton
          className="newsletter-details__cancel"
          small={true}
          title="Cancel"
          onClick={() => this.props.history.push("/dashboard")}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletter;
  return { newsletterToEdit };
}

export default connect(mapStateToProps, actions)(NewsletterDetails);
