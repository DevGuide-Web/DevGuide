import React from 'react';
import { Link } from 'react-router-dom';
import '../Auth/auth.css';

export default function Register() {
  return (
    <div className='register-auth'>
      <div className='formRegister'>
        <Link to='/'>
          <button className='crusialButton'>Back</button>
        </Link>
        <br></br>
        <br></br>
        <input
          type='text'
          className='crusialInput'
          placeholder='Username'
        ></input>
        <br></br>
        <br></br>
        <input type='text' className='crusialInput' placeholder='Email'></input>
        <br></br>
        <br></br>
        <input
          type='text'
          className='crusialInput'
          placeholder='Password'
        ></input>
        <br></br>
        <br></br>
        <input
          type='text'
          className='crusialInput'
          placeholder='Confirm Password'
        ></input>
        <br></br>
        <br></br>
        <Link to='/suggest'>
          <button className='crusialButton'>Register</button>
        </Link>
        <br></br>
        <br></br>
        Have an Account?
        <br></br>
        <br></br>
        <Link to='/login'>
          <button className='crusialButton'>Login</button>
        </Link>
      </div>
    </div>
  );
}
