import { combineReducers } from 'redux'
import learnReducer from './learning_path/learnReducer'
import title1Reducer from './sub_title1/title1Reducer'
import title2Reducer from './sub_title2/title2Reducer'
import title3Reducer from './sub_title3/title3Reducer'
import title4Reducer from './sub_title4/title4Reducer'
import loginReducer from './login/loginReducer'
import registerReducer from './register/registerReducer'
import subjectReducer from './subject/subjectReducer'
import commentReducer from './comment/commentReducer'


const rootReducer = combineReducers({
  learn_path: learnReducer,
  sub_title1: title1Reducer,
  sub_title2: title2Reducer,
  sub_title3: title3Reducer,
  sub_title4: title4Reducer,
  login: loginReducer,
  register: registerReducer,
  subject: subjectReducer,
  comment: commentReducer,
  
})

export default rootReducer
