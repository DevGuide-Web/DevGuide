import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './auth.css';

export default function ForgotPassword() {
  const ChangePW = () => {
    alert('Password Changed!');
  };

  return (
    <div className='forgotPW-auth'>
      <div className='formForgotPW'>
        <Link to='/login'>
          <button className='crusialButton'>Back</button>
        </Link>
        <br></br>
        <br></br>
        <input type='text' placeholder='Email' className='crusialInput'></input>
        <br></br>
        <br></br>
        <input
          type='password'
          placeholder='New Password'
          className='crusialInput'
        ></input>
        <br></br>
        <br></br>
        <input
          type='password'
          placeholder='Confirm Password'
          className='crusialInput'
        ></input>
        <br></br>
        <br></br>
        <Link to='/login'>
          <button className='crusialButton' onClick={ChangePW}>
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
}
