import { COMMENT_SUCCESS, COMMENT_FAILED } from './commentTypes'
import axios from 'axios'

export const fetchComment = (slug, headers) => {
    return (dispatch) => {
      axios
        .get(`https://api.devguide.site/comment/${slug.subject}/`, {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const comments = response.data
          dispatch(commentSuccess(comments))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(commentFailure(error.message))
        })
    }
  }


export const commentSuccess = data => {
  return {
    type: COMMENT_SUCCESS,
    payload: data
  }
}

export const commentFailure = error => {
    return {
      type: COMMENT_FAILED,
      payload: error
    }
  }
