import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../../../NavBar/NavBar';
import './changepassword.css';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const confirmPW = () => {
    Axios.post(
      'http://www.devguide.site/api/account/changepassword/',
      {
        old_password: oldPassword,
        password: password,
        repassword: repassword,
      },
      {
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
      }
    ).then(response => {
      const checkPassword = response.data.password;
      if (checkPassword) {
        alert('Please Input Correct Password');
      } else {
        alert('Password Updated!');
      }
    });
  };

  return (
    <div>
      <NavBar />
      <div className='changePW-page'>
        <div className='changePW-content'>
          <Link to='/profile'>
            <button className='crusialButton'>Back</button>
          </Link>
          <br></br>
          <h2>Current Password</h2>
          <input
            type='password'
            className='changeForm'
            placeholder='Type Here!'
            onChange={event => {
              setOldPassword(event.target.value);
            }}
          />
          <h2>New Password</h2>
          <input
            type='password'
            className='changeForm'
            placeholder='Type Here!'
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
          <h2>Confirm Password</h2>
          <input
            type='password'
            className='changeForm'
            placeholder='Type Here!'
            onChange={event => {
              setRepassword(event.target.value);
            }}
          />
          <br></br>
          <br></br>
          <button className='crusialButton' onClick={confirmPW}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
