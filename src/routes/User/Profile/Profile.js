import React, { useState } from 'react';
import NavBar from '../../NavBar/NavBar';
import { Link } from 'react-router-dom';
import * as BiIcons from 'react-icons/bi';
import { IconContext } from 'react-icons';
import './profile.css';
import Axios from 'axios';

export default function Profile() {
  const [fullname, getFullname] = useState('');
  const [username, getUsername] = useState('');
  const [email, getEmail] = useState('');
  const [interest, getInterest] = useState('');

  const [logOut, setLogOut] = useState('');

  const goLogOut = () => {
    if (localStorage.getItem('Authorization')) {
      localStorage.clear();
      setLogOut('/');
    }
  };

  Axios.get('http://www.devguide.site/api/account/biodata/', {
    headers: {
      Authorization: localStorage.getItem('Authorization'),
    },
  }).then(response => {
    getFullname(response.data.fullname);
    getUsername(response.data.username);
    getEmail(response.data.email);
    getInterest(response.data.interest);
  });

  return (
    <div>
      <NavBar />
      <div className='profile-page'>
        <IconContext.Provider value={{ size: '300px' }}>
          <div className='profile-content'>
            <h1>User Info</h1>
            <div className='profile-detail'>
              <h3>Fullname : {fullname}</h3>
              <h3>Username : {username}</h3>
              <h3>Email : {email}</h3>
              <h3>Interest : {interest}</h3>
              <div className='profile-function'>
                <Link to='/profile/edit'>
                  <button className='crusialButton'>Edit Profile</button>
                </Link>
                <br></br>
                <Link to='/profile/changePassword'>
                  <button className='crusialButton'>Change Password</button>
                </Link>
                <br></br>
                <Link to={logOut}>
                  <button className='LogOutButton' onClick={goLogOut}>
                    Log Out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
