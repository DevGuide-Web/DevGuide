import React from 'react';
import NavBar from '../../.././NavBar/NavBar';
import { Link } from 'react-router-dom';
import './editprofile.css';
import * as BiIcons from 'react-icons/bi';
import { IconContext } from 'react-icons';

export default function EditProfile() {
  const editP = () => {
    alert('Profile updatted!');
  };

  return (
    <div>
      <NavBar />
      <div className='editprofile-page'>
        <IconContext.Provider value={{ size: '300px' }}>
          <div className='editprofile-content'>
            <BiIcons.BiUserCircle />
            <div className='editprofile-detail'>
              <h3>Username</h3>
              <input
                type='text'
                placeholder='Type Here!'
                className='editInput'
              ></input>
              <h3>Email</h3>
              <input
                type='text'
                placeholder='Type Here!'
                className='editInput'
              ></input>
              <h3>Developer</h3>
              <input
                type='text'
                placeholder='Type Here!'
                className='editInput'
              ></input>
              <div className='editprofile-function'>
                <Link to='/profile'>
                  <button className='crusialButton' onClick={editP}>
                    Save
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
