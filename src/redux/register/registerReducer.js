import {
    REGISTER_FAILED,
    REGISTER_SEND
  } from './registerTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_SEND:
        return {
          data: action.payload,
          error: ''
        }
      case REGISTER_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default registerReducer
  