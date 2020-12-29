import {
    SUB_TITLE2_FAILED,
    SUB_TITLE2_SUCCESS
  } from './title2Types'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const title2Reducer = (state = initialState, action) => {
    switch (action.type) {
      case SUB_TITLE2_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case SUB_TITLE2_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default title2Reducer
  