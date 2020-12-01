import React from 'react';
import NavBar from '../../../../components/NavBar';
import { Link } from 'react-router-dom';
import '../../../content.css';

export default function Profile() {
  return (
    <div>
      <NavBar />
      <div className='profile-page'>
        This is Profile Page
        <br></br>
        <Link to='/profile/edit'>
          <button>Edit</button>
        </Link>
        <br></br>
        <Link to='/'>
          <button>Log Out</button>
        </Link>
      </div>
    </div>
  );
}
