import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import ForgotPasswordForm from "./forgotPasswordForm";

class ForgotPassword extends Component {
  componentDidMount() {
    this.props.updateHeader("Welcome to HOA Management!", false);
  }

  onSubmit = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="forgot-password">
        <ForgotPasswordForm onSubmit={(event) => this.onSubmit(event)} />
      </div>
    );
  }
}

export default connect(null, actions)(ForgotPassword);
