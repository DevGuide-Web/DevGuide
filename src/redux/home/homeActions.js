import { HOME_SUCCESS, HOME_FAILED } from './homeTypes'
import axios from 'axios'

export const fetchHome = (headers) => {
    return (dispatch) => {
      axios
        .get(`https://api.devguide.site/home/`, {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const homes = response.data
          dispatch(homeSuccess(homes))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(homeFailure(error.message))
        })
    }
  }


export const homeSuccess = data => {
  return {
    type: HOME_SUCCESS,
    payload: data
  }
}

export const homeFailure = error => {
    return {
      type: HOME_FAILED,
      payload: error
    }
  }
