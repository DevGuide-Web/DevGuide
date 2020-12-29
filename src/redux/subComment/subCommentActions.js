import { SUBCOMMENT_SUCCESS, SUBCOMMENT_FAILED } from './subCommentTypes'
import axios from 'axios'

export const fetchSubComment = (id, headers) => {
    return (dispatch) => {
      axios
        .get(`https://devguide.site/api/comment/subcomment/${id}/`, {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const subComments = response.data
          dispatch(subCommentSuccess(subComments))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(subCommentFailure(error.message))
        })
    }
  }


export const subCommentSuccess = data => {
  return {
    type: SUBCOMMENT_SUCCESS,
    payload: data
  }
}

export const subCommentFailure = error => {
    return {
      type: SUBCOMMENT_FAILED,
      payload: error
    }
  }
