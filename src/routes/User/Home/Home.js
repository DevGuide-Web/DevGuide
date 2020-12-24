import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import NavBar from '../../NavBar/NavBar';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './home.css';

export default function Home() {
  const [user, getUser] = useState('');

  Axios.get('http://www.devguide.site/api/account/biodata/', {
    headers: {
      Authorization: localStorage.getItem('Authorization'),
    },
  }).then(response => {
    getUser(response.data.username);
  });

  return (
    <div>
      <NavBar />
      <div className='home-content'>
        <IconContext.Provider value={{ size: '180px' }}>
          <div className='home-profile'>
            <FaIcons.FaUserCircle />
            <h1>Hello, {user}</h1>
            <p>Berimanlah segera sebelum datangnya Hari Kiamat.</p>
          </div>
          <div className='last-course'>
            <div className='last-courseTitle'>
              <h1>Latest Course</h1>
            </div>
            <div className='last-courseList'>
              <a>1. Course List</a>
              <a>2. Course List</a>
              <a>3. Course List</a>
              <a>4. Course List</a>
              <a>5. Course List</a>
              <a>6. Course List</a>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
