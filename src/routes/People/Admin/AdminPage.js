import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Auth/auth.css';

export default function AdminPage() {
  const [adminID, setAdminID] = useState(0);
  const [adminPass, setAdminPass] = useState('');

  const [adminToken, setAdminToken] = useState('');

  const adminAuth = () => {
    Axios.post('', {}).then(response => {
      console.log(response);
      setAdminToken(response.data.token);
    });
  };

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
          onChange={event => {
            setAdminID(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          type='password'
          className='crusialInput'
          placeholder='Password'
          onChange={event => {
            setAdminPass(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <Link to='/admin'>
          <button className='crusialButton' onClick={adminAuth}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
