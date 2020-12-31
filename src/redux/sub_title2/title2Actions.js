import { SUB_TITLE2_SUCCESS, SUB_TITLE2_FAILED } from './title2Types'
import axios from 'axios'



export const fetchTitle2 = (slug, headers) => {
    return (dispatch) => {
      axios
        .get(`https://devguide.site/api/courses/${slug.id}/${slug.id2}`, {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const title2 = response.data
          dispatch(title2Success(title2))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(title2Failure(error.message))
        })
    }
  }


export const title2Success = data => {
  return {
    type: SUB_TITLE2_SUCCESS,
    payload: data
  }
}

export const title2Failure = error => {
    return {
      type: SUB_TITLE2_FAILED,
      payload: error
    }
  }
