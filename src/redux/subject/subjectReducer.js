import {
  SUBJECT_FAILED,
  SUBJECT_SUCCESS
} from './subjectTypes'

const initialState = {
  data: [],
  error: ''
}

const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBJECT_SUCCESS:
      return {
        data: action.payload,
        error: ''
      }
    case SUBJECT_FAILED:
      return {
        data: [],
        error: action.payload
      }
    default: return state
  }
}



export default subjectReducer
