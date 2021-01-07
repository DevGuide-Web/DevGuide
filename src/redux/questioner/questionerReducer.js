import {
    QUESTIONER_FAILED,
    QUESTIONER_SEND
  } from './questionerTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const questionerReducer = (state = initialState, action) => {
    switch (action.type) {
      case QUESTIONER_SEND:
        return {
          data: action.payload,
          error: ''
        }
      case QUESTIONER_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default questionerReducer
  