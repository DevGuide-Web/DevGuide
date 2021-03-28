import { POST_PROFILE_SUCCESS, POST_PROFILE_FAILED } from './postProfileTypes'
import axios from 'axios'

  export const fetchPostProfile = (headers, email, username, fullname, interest) => {
    return (dispatch) => {
      axios
        .post(`https://127.0.0.1/account/biodata/`,{
          email,
          username,
          fullname,
          interest
        },
         {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const profiles = response.data
          dispatch(postProfileSuccess(profiles))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(postProfileFailure(error.message))
        })
    }
  }

  export const changePasswordProfile = (headers, old_password, password, repassword) => {
    return (dispatch) => {
      axios
        .post(`https://127.0.0.1/account/changepassword/`,{
          old_password,
          password,
          repassword
        },
         {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const profiles = response.data
          dispatch(postProfileSuccess(profiles))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(postProfileFailure(error.message))
        })
    }
  }

export const postProfileSuccess = data => {
  return {
    type: POST_PROFILE_SUCCESS,
    payload: data
  }
}

export const postProfileFailure = error => {
    return {
      type: POST_PROFILE_FAILED,
      payload: error
    }
  }
