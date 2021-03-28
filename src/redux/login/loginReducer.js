import {
    LOGIN_FAILED,
    LOGIN_SEND,
    LOGOUT
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
      case LOGIN_FAILED:
        return {
          data: [],
          error: action.payload
        }
      case LOGOUT:
        return{
          data:[]
        }
      default: return state
    }
  }
  


  export default loginReducer
  
