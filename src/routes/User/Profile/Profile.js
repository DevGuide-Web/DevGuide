import React from 'react';
import NavBar from '../../NavBar/NavBar';
import { Link } from 'react-router-dom';
import * as BiIcons from 'react-icons/bi';
import { IconContext } from 'react-icons';
import './profile.css';

export default function Profile() {
  return (
    <div>
      <NavBar />
      <div className='profile-page'>
        <IconContext.Provider value={{ size: '300px' }}>
          <div className='profile-content'>
            <BiIcons.BiUserCircle />
            <div className='profile-detail'>
              <h3>Username : ---</h3>
              <h3>Email : ---</h3>
              <h3>Interest : ---</h3>
              <div className='profile-function'>
                <Link to='/profile/edit'>
                  <button className='crusialButton'>Edit Profile</button>
                </Link>
                <br></br>
                <Link to='/profile/changePassword'>
                  <button className='crusialButton'>Change Password</button>
                </Link>
                <br></br>
                <Link to='/'>
                  <button className='LogOutButton'>Log Out</button>
                </Link>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
