import React, { Component } from "react";
import Button from "../button";
import RequestsBoxes from "./requestsBoxes";
import Requests from "./requests";
import { connect } from "react-redux";
import * as actions from "../../actions";
import RequireAdmin from "../auth/requireAdmin";

class RequestsGrid extends Component {
  handleAddRequest = () => {
    this.props.history.push("/requests/new");
  };

  componentDidMount() {
    this.props.fetchRequests();
  }

  render() {
    return (
      <div className="requests-grid">
        <RequireAdmin>
          <Button
            className="requests-grid__button"
            icon="fas fa-plus"
            callback={() => this.handleAddRequest()}
          />
        </RequireAdmin>
        <RequestsBoxes />
        <Requests />
      </div>
    );
  }
}

export default connect(null, actions)(RequestsGrid);
