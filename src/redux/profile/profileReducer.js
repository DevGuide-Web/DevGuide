import {
  PROFILE_FAILED,
  PROFILE_SUCCESS
} from './profileTypes'

const initialState = {
  data: [],
  error: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SUCCESS:
      return {
        data: action.payload,
        error: ''
      }
    case PROFILE_FAILED:
      return {
        data: [],
        error: action.payload
      }
    default: return state
  }
}



export default profileReducer
