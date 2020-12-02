import React from 'react';
import { Link } from 'react-router-dom';
import './basic.css';
import Logo from '../img/devguide.png';

export default function DevGuide() {
  return (
    <div className='firstScreen'>
      <div className='logRoute'>
        <img src={Logo} height='250'></img>
        <br></br>
        <Link to='/login'>
          <button className='loginButton-Route'>Login</button>
        </Link>
        <br></br>
        <br></br>
        <Link to='/register'>
          <button className='registerButton-Route'>Register</button>
        </Link>
        <br></br>
        <br></br>
        <Link to='/login/admin'>
          <button className='adminButton-Route'>Login as Admin</button>
        </Link>
      </div>
    </div>
  );
}
