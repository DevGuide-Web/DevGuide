import {
  POST_COMMENT_FAILED,
  POST_COMMENT_SUCCESS
} from './postCommentTypes'

const initialState = {
  data: [],
  error: ''
}

const postCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT_SUCCESS:
      return {
        data: action.payload,
        error: ''
      }
    case POST_COMMENT_FAILED:
      return {
        data: [],
        error: action.payload
      }
    default: return state
  }
}



export default postCommentReducer
