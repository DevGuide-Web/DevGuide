import { LOGIN_SEND, LOGIN_FAILED } from './loginTypes'
import axios from 'axios'



export const fetchLogin = (email, password) => {
    return (dispatch) => {
      axios
        .post('https://devguide.site/api/account/login/', 
        {
          email,
          password,
        }
        )
        .then(response => {
          // response.data is the users
          const logins = response.data
          logins.token && localStorage.setItem('Authorization', `Token ${logins.token}`)
          dispatch(loginSend(logins))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(loginFailure(error.message))
        })
    }
  }


export const loginSend = data => {
  return {
    type: LOGIN_SEND,
    payload: data
  }
}

export const loginFailure = error => {
    return {
      type: LOGIN_FAILED,
      payload: error
    }
  }
