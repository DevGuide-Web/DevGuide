import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import NavBar from "../../../NavBar/NavBar";
import "./changepassword.css";
import { changePasswordProfile } from "../../../../redux/";
import { connect } from "react-redux";

function ChangePassword({ userData, data, changePasswordProfile, history }) {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const { status_password, Error } = data.data;

  useEffect(() => {
    if (status_password) {
      history.replace("/profile");
      window.location.reload()
    }
  }, [history, status_password]);

  const confirmPW = () => {
    changePasswordProfile(
      userData.data.Authorization,
      oldPassword,
      password,
      repassword
    );
  };

  return (
    <div>
      <NavBar />
      <div className="changePW-page">
        <div className="changePW-content">
          <Link to="/profile">
            <button className="crusialButton">Back</button>
          </Link>
          {Error && <h4>{Error}</h4>}
          {status_password && <h4>{status_password}</h4>}
          <br></br>
          <h2>Current Password</h2>
          {data.data.old_password && <h4>{data.data.old_password}</h4>}
          <input
            type="password"
            className="changeForm"
            placeholder="Type Here!"
            onChange={(event) => {
              setOldPassword(event.target.value);
            }}
          />
          <h2>New Password</h2>
          {data.data.password && <h4>{data.data.password}</h4>}
          <input
            type="password"
            className="changeForm"
            placeholder="Type Here!"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <h2>Confirm Password</h2>
          {data.data.repassword && <h4>{data.data.repassword}</h4>}
          <input
            type="password"
            className="changeForm"
            placeholder="Type Here!"
            onChange={(event) => {
              setRepassword(event.target.value);
            }}
          />
          <br></br>
          <br></br>
          <button className="crusialButton" onClick={confirmPW}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.postProfile,
    userData: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePasswordProfile: (headers, old_password, password, repassword) =>
      dispatch(
        changePasswordProfile(headers, old_password, password, repassword)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
