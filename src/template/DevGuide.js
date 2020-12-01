import React from 'react';
import { Link } from 'react-router-dom';

export default function DevGuide() {
  return (
    <div>
      First Screen Appear
      <br></br>
      <Link to='/login'>
        <button>Login</button>
      </Link>
      <br></br>
      <Link to='/register'>
        <button>Register</button>
      </Link>
      <br></br>
      <br></br>
      <Link to='/login/admin'>
        <button>Login as Admin</button>
      </Link>
    </div>
  );
}
