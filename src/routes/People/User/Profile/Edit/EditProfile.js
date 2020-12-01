import React from 'react';
import NavBar from '../../../../../components/NavBar';
import { Link } from 'react-router-dom';
import '../../../../content.css';

export default function EditProfile() {
  return (
    <div>
      <NavBar />
      <div className='editProfile-page'>
        This is Edit Profile Page
        <br></br>
        <Link to='/profile'>
          <button>Save</button>
        </Link>
      </div>
    </div>
  );
}
