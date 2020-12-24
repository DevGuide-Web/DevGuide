import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../Auth/auth.css';

export default function Register() {
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPass, setRegPass] = useState('');
  const [regRePass, setRegRePass] = useState('');

  const regAuth = () => {
    Axios.post('http://www.devguide.site/api/account/register/', {
      username: regName,
      email: regEmail,
      password: regPass,
      repassword: regRePass,
    }).then(response => {
      console.log(response.data);
      const checkPassword = response.data.password;
      const checkRepassword = response.data.repassword;
      const checkSameEmail = response.data.email;
      const checkSameName = response.data.username;
      const checkSuccess = response.data.status;
      if (checkSameEmail) {
        alert('Please Input Correct Email / Email Already exist');
      }
      if (checkSameName) {
        alert('Please Input Correct Username / Username Already exist');
      }
      if (checkPassword) {
        alert('Please Input Correct Password');
      }
      if (checkRepassword) {
        alert('Please Input Correct Confirm Password');
      }
      if (checkSuccess) {
        alert('Succesfully Registered!');
      }
    });
  };

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
          onChange={event => {
            setRegName(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          type='text'
          className='crusialInput'
          placeholder='Email'
          onChange={event => {
            setRegEmail(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          type='password'
          className='crusialInput'
          placeholder='Password'
          onChange={event => {
            setRegPass(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          type='password'
          className='crusialInput'
          placeholder='Confirm Password'
          onChange={event => {
            setRegRePass(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <button className='crusialButton' onClick={regAuth}>
          Register
        </button>
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
