import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../Auth/auth.css';

export default function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  const [token, setToken] = useState('');

  const loginAuth = () => {
    Axios.post('http://192.168.100.15:8000/account/login/', {
      email: loginEmail,
      password: loginPass,
    }).then(response => {
      console.log(response.data.token);
      setToken(response.data.token)
    });
  };

  return (
    <div className='login-auth'>
      <div className='formLogin'>
        <Link to='/'>
          <button className='crusialButton'>Back</button>
        </Link>
        <br></br>
        <br></br>
        <input
          type='text'
          placeholder='Email'
          className='crusialInput'
          onChange={event => {
            setLoginEmail(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          type='password'
          placeholder='Password'
          className='crusialInput'
          onChange={event => {
            setLoginPass(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <Link to='/home'>
          <button className='crusialButton' onClick={loginAuth}>
            Login
          </button>
        </Link>
        <br></br>
        <br></br>
        Don't have an Account?
        <br></br>
        <br></br>
        <Link to='/register'>
          <button className='crusialButton'>Register</button>
        </Link>
      </div>
    </div>
  );
}
