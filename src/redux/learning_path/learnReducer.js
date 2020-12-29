import {
    LEARNING_PATH_FAILED,
    LEARNING_PATH_SUCCESS
  } from './learnTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const learnReducer = (state = initialState, action) => {
    switch (action.type) {
      case LEARNING_PATH_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case LEARNING_PATH_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default learnReducer
  