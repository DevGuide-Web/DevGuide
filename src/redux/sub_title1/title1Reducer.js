import {
    SUB_TITLE1_FAILED,
    SUB_TITLE1_SUCCESS
  } from './title1Types'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const title1Reducer = (state = initialState, action) => {
    switch (action.type) {
      case SUB_TITLE1_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case SUB_TITLE1_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default title1Reducer
  