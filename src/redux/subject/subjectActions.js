import { SUBJECT_SUCCESS, SUBJECT_FAILED } from './subjectTypes'
import axios from 'axios'

export const fetchSubject = (slug, headers) => {
    return (dispatch) => {
      axios
        .get(`https://api.devguide.site/courses/${slug.id}/${slug.id2}/${slug.id3}/${slug.id4}/${slug.subject}/`, {
            headers: {
              Authorization: headers,
            },
          })
        .then(response => {
          // response.data is the users
          const subjects = response.data
          dispatch(subjectSuccess(subjects))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(subjectFailure(error.message))
        })
    }
  }


export const subjectSuccess = data => {
  return {
    type: SUBJECT_SUCCESS,
    payload: data
  }
}

export const subjectFailure = error => {
    return {
      type: SUBJECT_FAILED,
      payload: error
    }
  }
