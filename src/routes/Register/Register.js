import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div>
      <Link to='/'>
        <button>Back</button>
      </Link>
      <br></br>
      This is Register Page
      <br></br>
      <input type='text'></input>
      <br></br>
      <input type='text'></input>
      <br></br>
      <Link to='/suggest'>
        <button>Register</button>
      </Link>
      <br></br>
      <br></br>
      Have an Account?
      <br></br>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>
  );
}
