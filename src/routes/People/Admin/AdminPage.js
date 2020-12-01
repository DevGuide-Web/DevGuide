import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminPage() {
  return (
    <div>
      <Link to='/'>
        <button>Back</button>
      </Link>
      <br></br>
      <br></br>
      This is Admin Page Login
      <br></br>
      <input type='text'></input>
      <br></br>
      <input type='text'></input>
      <br></br>
      <Link to='/admin'>
        <button>Login</button>
      </Link>
    </div>
  );
}
