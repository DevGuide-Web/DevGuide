import { PROFILE_SUCCESS, PROFILE_FAILED } from './profileTypes'
import axios from 'axios'

export const fetchGetProfile = (headers) => {
    return (dispatch) => {
      axios
        .get(`https://api.devguide.site/account/biodata/`, {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const profiles = response.data
          dispatch(profileSuccess(profiles))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(profileFailure(error.message))
        })
    }
  }


export const profileSuccess = data => {
  return {
    type: PROFILE_SUCCESS,
    payload: data
  }
}

export const profileFailure = error => {
    return {
      type: PROFILE_FAILED,
      payload: error
    }
  }
