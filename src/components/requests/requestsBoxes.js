import React, { Component } from "react";
import RequestsBox from "./requestsBox";
import { connect } from "react-redux";

class RequestsBoxes extends Component {
  render() {
    return (
      <div className="requests-boxes">
        <RequestsBox
          icon="fas fa-exclamation-triangle"
          title={"pending"}
          count={this.props.pendingCount}
        />
        <RequestsBox
          icon="fas fa-wrench"
          title={"in-progress"}
          count={this.props.progressCount}
        />
        <RequestsBox
          icon="fas fa-check-circle"
          title={"complete"}
          count={this.props.completeCount}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { requests } = state.requests;
  var pendingCount = 0;
  var progressCount = 0;
  var completeCount = 0;

  requests.map((request) => {
    if (request.status == "pending") {
      pendingCount += 1;
    } else if (request.status == "in-progress") {
      progressCount += 1;
    } else if (request.status == "complete") {
      completeCount += 1;
    }
  });

  return {
    pendingCount,
    progressCount,
    completeCount,
  };
}

export default connect(mapStateToProps)(RequestsBoxes);
