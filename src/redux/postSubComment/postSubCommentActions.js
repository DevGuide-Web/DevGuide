import {
  POST_SUBCOMMENT_SUCCESS,
  POST_SUBCOMMENT_FAILED,
} from "./postSubCommentTypes";
import axios from "axios";

export const fetchPostSubComment = (id, headers, detail) => {
  return (dispatch) => {
    axios
      .post(
        `https://127.0.0.1/comment/subcomment/${id}/`,
        {
          detail,
        },
        {
          headers: {
            Authorization: headers,
          },
        }
      )
      .then((response) => {
        // response.data is the users
        const postSubComments = response.data;
        dispatch(postSubCommentSuccess(postSubComments));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(postSubCommentFailure(error.message));
      });
  };
};

export const postSubCommentSuccess = (data) => {
  return {
    type: POST_SUBCOMMENT_SUCCESS,
    payload: data,
  };
};

export const postSubCommentFailure = (error) => {
  return {
    type: POST_SUBCOMMENT_FAILED,
    payload: error,
  };
};
