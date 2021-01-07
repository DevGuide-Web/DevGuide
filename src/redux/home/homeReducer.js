import {
  HOME_FAILED,
  HOME_SUCCESS
} from './homeTypes'

const initialState = {
  data: [],
  error: ''
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_SUCCESS:
      return {
        data: action.payload,
        error: ''
      }
    case HOME_FAILED:
      return {
        data: [],
        error: action.payload
      }
    default: return state
  }
}



export default homeReducer
