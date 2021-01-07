import { SUB_TITLE3_SUCCESS, SUB_TITLE3_FAILED } from './title3Types'
import axios from 'axios'

export const fetchTitle3 = (slug, headers) => {
    return (dispatch) => {
      axios
        .get(`https://api.devguide.site/courses/${slug.id}/${slug.id2}/${slug.id3}`, {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const title3 = response.data
          dispatch(title3Success(title3))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(title3Failure(error.message))
        })
    }
  }


export const title3Success = data => {
  return {
    type: SUB_TITLE3_SUCCESS,
    payload: data
  }
}

export const title3Failure = error => {
    return {
      type: SUB_TITLE3_FAILED,
      payload: error
    }
  }
