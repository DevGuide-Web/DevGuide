import { SUB_TITLE4_SUCCESS, SUB_TITLE4_FAILED } from './title4Types'
import axios from 'axios'

export const fetchTitle4 = (slug, headers) => {
    return (dispatch) => {
      axios
        .get(`https://devguide.site/api/courses/${slug.id}/${slug.id2}/${slug.id3}/${slug.id4}/`, {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const title4 = response.data
          dispatch(title4Success(title4))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(title4Failure(error.message))
        })
    }
  }


export const title4Success = data => {
  return {
    type: SUB_TITLE4_SUCCESS,
    payload: data
  }
}

export const title4Failure = error => {
    return {
      type: SUB_TITLE4_FAILED,
      payload: error
    }
  }
