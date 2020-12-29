import {
  SUBCOMMENT_FAILED,
  SUBCOMMENT_SUCCESS
} from './subCommentTypes'

const initialState = {
  data: [],
  error: ''
}

const subCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBCOMMENT_SUCCESS:
      return {
        data: action.payload,
        error: ''
      }
    case SUBCOMMENT_FAILED:
      return {
        data: [],
        error: action.payload
      }
    default: return state
  }
}



export default subCommentReducer
