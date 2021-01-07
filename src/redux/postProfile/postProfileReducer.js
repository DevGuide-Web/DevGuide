import {
  POST_PROFILE_FAILED,
  POST_PROFILE_SUCCESS
} from './postProfileTypes'

const initialState = {
  data: [],
  error: ''
}

const postProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_PROFILE_SUCCESS:
      return {
        data: action.payload,
        error: ''
      }
    case POST_PROFILE_FAILED:
      return {
        data: [],
        error: action.payload
      }
    default: return state
  }
}



export default postProfileReducer
