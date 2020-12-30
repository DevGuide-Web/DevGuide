import { LOGIN_SEND, LOGIN_FAILED, LOGIN_SUCCESS } from "./loginTypes";
import axios from "axios";

export const fetchLogin = (email, password) => {
  return (dispatch) => {
    axios
      .post("https://devguide.site/api/account/login/", {
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

export const assignLocalstorage = () =>{
  return (dispatch) => {
    dispatch(loginSucces())
  }
}

export const loginSend = (data) => {
  return {
    type: LOGIN_SEND,
    payload: data,
  };
};

export const loginSucces = () => {
  return {
    type: LOGIN_SUCCESS,
    payload: JSON.parse(localStorage.getItem('Authorization')),
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};
