import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchLogin } from "../../redux/";
import { connect } from "react-redux";
import "../Auth/auth.css";

function Login({ data, fetchLogin, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [note, setNote] = useState(false);
  const { token } = data.data;

  useEffect(() => {
    if(token){
      history.push('/home')
    }
  },[history, token]) 

  const loginAuth = () => {
    if (!email || !password){
      return setNote(true)
    }
    return fetchLogin(email, password);
  }

  return (
    <div className="login-auth">
      <div className="formLogin">
        <Link to="/">
          <button className="crusialButton">Back</button>
        </Link>
        {data.data.response && <h1>{data.data.response}</h1>}
        {data.data.email && <h1>{data.email}</h1>}
        {note && <h1>please fill the field below!</h1>}
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="Email"
          className="crusialInput"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <input
          type="password"
          placeholder="Password"
          className="crusialInput"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <button className="crusialButton" onClick={loginAuth}>
          Login
        </button>
        <br></br>
        <br></br>
        Don't have an Account?
        <br></br>
        <br></br>
        <Link to="/register">
          <button className="crusialButton">Register</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (email, password) => dispatch(fetchLogin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
