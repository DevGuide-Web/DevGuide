import { SUB_TITLE1_SUCCESS, SUB_TITLE1_FAILED } from './title1Types'
import axios from 'axios'



export const fetchTitle1 = (slug, headers) => {
    return (dispatch) => {
      axios
        .get(`https://api.devguide.site/courses/${slug.id}/`, {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const title1s = response.data
          dispatch(title1Success(title1s))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(title1Failure(error.message))
        })
    }
  }


export const title1Success = data => {
  return {
    type: SUB_TITLE1_SUCCESS,
    payload: data
  }
}

export const title1Failure = error => {
    return {
      type: SUB_TITLE1_FAILED,
      payload: error
    }
  }
