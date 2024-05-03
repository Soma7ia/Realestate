import React, { Component } from "react";
import RequestsItem from "./requestsItem";
import { connect } from "react-redux";

class Requests extends Component {
  render() {
    return (
      <div className="requests">
        {this.props.requests.map((requestItem) => {
          if (requestItem.status == this.props.selectedRequestType) {
            return <RequestsItem {...requestItem} key={requestItem._id} />;
          }
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { requests, selectedRequestType } = state.requests;

  return {
    requests,
    selectedRequestType,
  };
}

export default connect(mapStateToProps)(Requests);
