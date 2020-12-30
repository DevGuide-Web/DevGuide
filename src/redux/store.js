import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

<<<<<<< Updated upstream
const initialState = {
  login: {
    data: localStorage.getItem('Authorization')
      ? JSON.parse(localStorage.getItem('Authorization'))
      : {},
  },
};
=======
const initialState = {"login": {data: localStorage.getItem('Authorization') ? JSON.parse(localStorage.getItem('Authorization')) : {}} }
>>>>>>> Stashed changes

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
