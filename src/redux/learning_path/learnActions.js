import { LEARNING_PATH_SUCCESS, LEARNING_PATH_FAILED } from "./learnTypes";
import axios from "axios";

export const fetchLearning = (headers) => {
  return (dispatch) => {
    axios
      .get("https://127.0.0.1/courses/", {
        headers: {
          Authorization: headers,
        },
      })
      .then((response) => {
        // response.data is the users
        const learnings = response.data;
        dispatch(learnSuccess(learnings));
      })
      .catch((error) => {
        // error.message is the error message
        console.log(headers);
        dispatch(learnFailure(error.message));
      });
  };
};

export const learnSuccess = (data) => {
  return {
    type: LEARNING_PATH_SUCCESS,
    payload: data,
  };
};

export const learnFailure = (error) => {
  return {
    type: LEARNING_PATH_FAILED,
    payload: error,
  };
};
