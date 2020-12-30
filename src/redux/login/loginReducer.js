import {
    LOGIN_FAILED,
    LOGIN_SEND,
    LOGIN_SUCCESS
  } from './loginTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SEND:
        return {
          data: action.payload,
          error: ''
        }
      case LOGIN_SUCCESS:
        return {
          data: JSON.parse(localStorage.getItem('Authorization')),
          error: ''
        }
      case LOGIN_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default loginReducer
  