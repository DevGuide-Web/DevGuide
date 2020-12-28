import React from 'react';
import { Link } from 'react-router-dom';
import './basic.css';
import Logo from '../img/devguide.png';

export default function DevGuide() {
  const storage = () => {
    localStorage.setItem('Authorization', 'Token ');
  };

  return (
    <div className='firstScreen'>
      <div className='logRoute'>
        <img src={Logo} height='250'></img>
        <br></br>
        <Link to='/login'>
          <button className='loginButton-Route' onClick={storage}>
            Login
          </button>
        </Link>
        <br></br>
        <br></br>
        <Link to='/register'>
          <button className='registerButton-Route'>Register</button>
        </Link>
      </div>
    </div>
  );
}
