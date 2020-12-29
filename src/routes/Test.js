import React, { useEffect, useState } from "react";
import { fetchRegister } from "../redux/";
import { connect } from "react-redux";

function Test({data, fetchRegister }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [note, setNote] = useState(false)

  // useEffect(() => {

  // }, []);
  const Register = () => {
    if (!email || !password || !username || !repassword){
      return setNote(true)
    }
    return fetchRegister(email, username, password, repassword);
  }

  return (
    <div>
      {note && <h1>please fill the field below!</h1>}
      {data.email && <h1>{data.email}</h1>}
      {data.username && <h1>{data.username}</h1>}
      {data.password && <h1>{data.password}</h1>}
      {data.repassword && <h1>{data.repassword}</h1>}
      {data.status && <h1>{data.status}</h1>}
      <input
        type="text"
        placeholder="Email"
        className="crusialInput"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Username"
        className="crusialInput"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        className="crusialInput"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="rePassword"
        className="crusialInput"
        onChange={(event) => {
          setRepassword(event.target.value);
        }}
      />

      <button onClick={Register}>Login</button>
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
    fetchRegister: (email, username, password, repassword) => dispatch(fetchRegister(email, username, password, repassword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
