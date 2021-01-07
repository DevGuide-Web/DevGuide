import {
    SPECIFIC_FAILED,
    SPECIFIC_SUCCESS
  } from './specificTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const specificReducer = (state = initialState, action) => {
    switch (action.type) {
      case SPECIFIC_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case SPECIFIC_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default specificReducer
  