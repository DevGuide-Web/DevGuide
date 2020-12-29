import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Auth/auth.css";
import { fetchRegister } from "../../redux/";
import { connect } from "react-redux";

function Register({ data, fetchRegister, history }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const { status } = data;

  useEffect(() => {
    if (status) {
      history.push("/login");
    }
  }, [history, status]);

  const regAuth = () => fetchRegister(email, username, password, repassword);

  return (
    <div className="register-auth">
      <div className="formRegister">
        <Link to="/">
          <button className="crusialButton">Back</button>
        </Link>
        <br></br>
        <br></br>
        {data.username && <h1>{data.username}</h1>}
        <input
          type="text"
          className="crusialInput"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        {data.email && <h1>{data.email}</h1>}
        <input
          type="text"
          className="crusialInput"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        {data.password && <h1>{data.password}</h1>}
        <input
          type="password"
          className="crusialInput"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        {data.repassword && <h1>{data.repassword}</h1>}
        <input
          type="password"
          className="crusialInput"
          placeholder="Confirm Password"
          onChange={(event) => {
            setRepassword(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <button className="crusialButton" onClick={regAuth}>
          Register
        </button>
        <br></br>
        <br></br>
        Have an Account?
        <br></br>
        <br></br>
        <Link to="/login">
          <button className="crusialButton">Login</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.register.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRegister: (email, username, password, repassword) =>
      dispatch(fetchRegister(email, username, password, repassword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
