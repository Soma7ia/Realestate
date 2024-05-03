import { CHANGE_SELECTED_REQUEST_TYPE, SET_REQUESTS } from "./types";
import { ROOT_URL } from "../config";
import axios from "axios";

export function changeSelectedRequestType(boxType) {
  return {
    type: CHANGE_SELECTED_REQUEST_TYPE,
    payload: boxType,
  };
}

export function createNewRequest(userId, formData, success) {
  const token = localStorage.getItem("token");
  return function () {
    axios
      .post(`${ROOT_URL}/requests/new`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        success();
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function fetchRequests() {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    axios
      .get(`${ROOT_URL}/requests`, {
        headers: { authorization: token },
      })
      .then((response) => {
        dispatch({
          type: SET_REQUESTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function changeStatus({ _id, status }, success) {
  const token = localStorage.getItem("token");
  return function () {
    axios
      .post(
        `${ROOT_URL}/requests/update-status`,
        { _id, status },
        {
          headers: { authorization: token },
        }
      )
      .then((response) => {
        console.log(response.data);
        success();
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
