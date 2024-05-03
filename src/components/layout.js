import React, { Component } from "react";
import { Header, HeaderBar } from "./header";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    const { title, subtitle, hideBar } = this.props;

    return (
      <div className="layout-container">
        <div className="layout-grid">
          <Header title={title} subtitle={subtitle} />
          {this.props.hideBar ? "" : <HeaderBar />}
          {this.props.children}
        </div>

        <div className="layout-space"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const header = state.header;

  return {
    ...header,
  };
}

export default connect(mapStateToProps)(Layout);
