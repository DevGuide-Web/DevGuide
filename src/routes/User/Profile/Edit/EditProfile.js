import React, { useState } from 'react';
import Axios from 'axios';
import NavBar from '../../.././NavBar/NavBar';
import { Link } from 'react-router-dom';
import './editprofile.css';
import * as BiIcons from 'react-icons/bi';
import { IconContext } from 'react-icons';

export default function EditProfile() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');

  const confirmEdit = () => {
    Axios.post(
      'http://www.devguide.site/api/account/biodata/',
      {
        fullname: fullname,
        username: username,
        email: email,
        interest: interest,
      },
      {
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
      }
    ).then(response => {
      const fullnameChecker = response.data.fullname;
      const usernameChecker = response.data.username;
      const emailChecker = response.data.email;
      const interestChecker = response.data.interest;
      const checkError = response.data.Error;
      const statusChecker = response.data.status;
      if (fullnameChecker) {
        alert('Enter Correct Fullname');
      }
      if (usernameChecker) {
        alert('Enter Correct Username');
      }
      if (emailChecker) {
        alert('Enter Correct Email');
      }
      if (interestChecker) {
        alert('Enter Correct Interest');
      }
      if (statusChecker) {
        alert('Successfully Updatted');
      }
      if (checkError) {
        alert(checkError);
      }
    });
  };

  return (
    <div>
      <NavBar />
      <div className='editprofile-page'>
        <IconContext.Provider value={{ size: '250px' }}>
          <div className='editprofile-content'>
            <Link to='/profile'>
              <button className='crusialButton'>Back</button>
            </Link>
            <BiIcons.BiUserCircle />
            <div className='editprofile-detail'>
              <h3>Fullname</h3>
              <input
                type='text'
                placeholder='Type Here!'
                className='editInput'
                onChange={event => {
                  setFullname(event.target.value);
                }}
              ></input>
              <h3>Username</h3>
              <input
                type='text'
                placeholder='Type Here!'
                className='editInput'
                onChange={event => {
                  setUsername(event.target.value);
                }}
              ></input>
              <h3>Email</h3>
              <input
                type='text'
                placeholder='Type Here!'
                className='editInput'
                onChange={event => {
                  setEmail(event.target.value);
                }}
              ></input>
              <h3>Interest</h3>
              <input
                type='text'
                placeholder='Type Here!'
                className='editInput'
                onChange={event => {
                  setInterest(event.target.value);
                }}
              ></input>
              <div className='editprofile-function'>
                <button className='crusialButton' onClick={confirmEdit}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
