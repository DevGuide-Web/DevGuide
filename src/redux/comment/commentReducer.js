import {
  COMMENT_FAILED,
  COMMENT_SUCCESS
} from './commentTypes'

const initialState = {
  data: [],
  error: ''
}

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_SUCCESS:
      return {
        data: action.payload,
        error: ''
      }
    case COMMENT_FAILED:
      return {
        data: [],
        error: action.payload
      }
    default: return state
  }
}



export default commentReducer
