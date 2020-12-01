import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <Link to='/'>
        <button>Back</button>
      </Link>
      <br></br>
      This is Login Page
      <br></br>
      <input type='text'></input>
      <br></br>
      <input type='text'></input>
      <br></br>
      <Link to='/home'>
        <button>Login</button>
      </Link>
      <br></br>
      <br></br>
      Don't have an Account?
      <br></br>
      <Link to='/register'>
        <button>Register</button>
      </Link>
    </div>
  );
}
