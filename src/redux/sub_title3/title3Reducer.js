import {
  SUB_TITLE3_FAILED,
  SUB_TITLE3_SUCCESS
} from './title3Types'

const initialState = {
  data: [],
  error: ''
}

const title3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUB_TITLE3_SUCCESS:
      return {
        data: action.payload,
        error: ''
      }
    case SUB_TITLE3_FAILED:
      return {
        data: [],
        error: action.payload
      }
    default: return state
  }
}



export default title3Reducer
