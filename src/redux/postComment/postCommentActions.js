import { POST_COMMENT_SUCCESS, POST_COMMENT_FAILED } from './postCommentTypes'
import axios from 'axios'

export const fetchPostComment = (slug, headers, title, detail) => {
    return (dispatch) => {
      axios
        .post(`https://api.devguide.site/comment/${slug.subject}/`,{
        Title: title,
        detail
        }, {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const postComments = response.data
          dispatch(postCommentSuccess(postComments))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(postCommentFailure(error.message))
        })
    }
  }


export const postCommentSuccess = data => {
  return {
    type: POST_COMMENT_SUCCESS,
    payload: data
  }
}

export const postCommentFailure = error => {
    return {
      type: POST_COMMENT_FAILED,
      payload: error
    }
  }
