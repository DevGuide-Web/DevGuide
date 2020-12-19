import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../NavBar/NavBar';
import './changepassword.css';

export default function ChangePassword() {
  const changePW = () => {
    alert('Password updatted!');
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
          />
          <h2>New Password</h2>
          <input
            type='password'
            className='changeForm'
            placeholder='Type Here!'
          />
          <h2>Confirm Password</h2>
          <input
            type='password'
            className='changeForm'
            placeholder='Type Here!'
          />
          <br></br>
          <br></br>
          <Link to='/profile'>
            <button className='crusialButton' onClick={changePW}>
              Save
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
