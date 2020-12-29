import {
  SUB_TITLE4_FAILED,
  SUB_TITLE4_SUCCESS
} from './title4Types'

const initialState = {
  data: [],
  error: ''
}

const title4Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUB_TITLE4_SUCCESS:
      return {
        data: action.payload,
        error: ''
      }
    case SUB_TITLE4_FAILED:
      return {
        data: [],
        error: action.payload
      }
    default: return state
  }
}



export default title4Reducer
