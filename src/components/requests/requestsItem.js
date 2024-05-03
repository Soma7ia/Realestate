import React, { Component } from "react";
import Icon from "../icon";
import Button from "../button";
import AnimateHeight from "react-animate-height";
import { ROOT_URL } from "../../config";
import { connect } from "react-redux";
import * as actions from "../../actions";
import RequireAdmin from "../auth/requireAdmin";

class RequestsItem extends Component {
  constructor() {
    super();

    this.state = {
      height: 0,
    };
  }

  toggleDropdown = () => {
    var element = document.getElementById(`${this.props._id} requests-item`);
    var arrowRotate = document.getElementById(`${this.props._id} arrow-down`);

    if (this.state.height == 0) {
      element.classList.add("bg-F8");
      arrowRotate.classList.add("arrow-up");
      this.setState({ height: "auto" });
    } else {
      element.classList.remove("bg-F8");
      arrowRotate.classList.remove("arrow-up");
      this.setState({ height: 0 });
    }
  };

  handleStatus = () => {
    const { _id, status } = this.props;
    this.props.changeStatus({ _id, status }, () => {
      this.props.fetchRequests();
    });
  };

  render() {
    const { title, body, date, imageUrl, status, _id } = this.props;
    const parsedDate = new Date(date);

    var mainIcon = "fas fa-exclamation-triangle";
    var moveButtonIcon = "fas fa-wrench";
    if (status == "in-progress") {
      moveButtonIcon = "fas fa-check-circle";
      mainIcon = "fas fa-wrench";
    } else if (status == "complete") {
      moveButtonIcon = "fas fa-exclamation-triangle";
      mainIcon = "fas fa-check-circle";
    }

    return (
      <div id={`${_id} requests-item`} className="requests-item">
        <Icon className="requests-item__icon" icon={mainIcon} />

        <div className="requests-item__title">
          <div className="requests-item__title__text">{title}</div>

          <Icon
            id={`${_id} arrow-down`}
            callback={() => this.toggleDropdown()}
            className="requests-item__title__arrow"
            icon="fas fa-sort-down"
          />
        </div>

        <div className="requests-item__tenant-unit"> Kevin - Unit 204</div>

        <div className="requests-item__date">
          {parsedDate.getMonth() + 1}/{parsedDate.getDate()}/
          {parsedDate.getFullYear() - 2000}
        </div>

        <RequireAdmin>
          <Button
            className="requests-item__move"
            icon={moveButtonIcon}
            callback={() => this.handleStatus()}
          />
        </RequireAdmin>

        <div className="requests-item__description">
          <AnimateHeight duration={300} height={this.state.height}>
            <div className="item-description">
              <img
                className="item-description__img"
                src={`${ROOT_URL}/${imageUrl}`}
              />

              <p className="item-description__text">{body}</p>
            </div>
          </AnimateHeight>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(RequestsItem);