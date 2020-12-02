import React from 'react';
import { Link } from 'react-router-dom';
import '../../Auth/auth.css';

export default function AdminPage() {
  return (
    <div className='admin-auth'>
      <div className='formAdmin'>
        <Link to='/'>
          <button className='crusialButton'>Back</button>
        </Link>
        <br></br>
        <br></br>
        <input
          type='text'
          className='crusialInput'
          placeholder='Admin ID'
        ></input>
        <br></br>
        <br></br>
        <input
          type='text'
          className='crusialInput'
          placeholder='Password'
        ></input>
        <br></br>
        <br></br>
        <Link to='/admin'>
          <button className='crusialButton'>Login</button>
        </Link>
      </div>
    </div>
  );
}
