import { LOGIN_SEND, LOGIN_FAILED, LOGOUT } from "./loginTypes";
import axios from "axios";

export const fetchLogin = (email, password) => {
  return (dispatch) => {
    axios
      .post("https://api.devguide.site/account/login/", {
        email,
        password,
      })
      .then((response) => {
        // response.data is the users
        const logins = response.data;
        const token = {
          id: logins.pk,
          Authorization: `Token ${logins.token}`,
          username: logins.username,
        };
        logins.token &&
          localStorage.setItem("Authorization", JSON.stringify(token));
        dispatch(loginSend(logins));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(loginFailure(error.message));
      });
  };
};

export const doLogout = () => {
  return (dispatch) => {
    localStorage.removeItem('Authorization')
    dispatch(logout())
  };
};

export const loginSend = (data) => {
  return {
    type: LOGIN_SEND,
    payload: data,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
