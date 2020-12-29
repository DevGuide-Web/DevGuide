import { REGISTER_SEND, REGISTER_FAILED } from './registerTypes'
import axios from 'axios'



export const fetchRegister = (email, username, password, repassword) => {
    return (dispatch) => {
      axios
        .post('https://devguide.site/api/account/register/', 
        {
          email,
          username,
          password,
          repassword
        }
        )
        .then(response => {
          // response.data is the users
          const registers = response.data
          dispatch(registerSend(registers))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(registerFailure(error.message))
        })
    }
  }


export const registerSend = data => {
  return {
    type: REGISTER_SEND,
    payload: data
  }
}

export const registerFailure = error => {
    return {
      type: REGISTER_FAILED,
      payload: error
    }
  }
