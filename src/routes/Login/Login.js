import React from 'react';
import { Link } from 'react-router-dom';
import '../Auth/auth.css';

export default function Login() {
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
          placeholder='Username'
          className='crusialInput'
        ></input>
        <br></br>
        <br></br>
        <input
          type='text'
          placeholder='Password'
          className='crusialInput'
        ></input>
        <br></br>
        <br></br>
        <Link to='/home'>
          <button className='crusialButton'>Login</button>
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
