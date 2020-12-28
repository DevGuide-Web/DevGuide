import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import NavBar from '../../NavBar/NavBar';
import { withRouter } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './home.css';

function Home() {
  const [user, getUser] = useState('');

  useEffect(() => {
    Axios.get('http://www.devguide.site/api/account/biodata/', {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    }).then(response => {
      getUser(response.data.username);
    });
  }, []);

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
              <span>1. Course List</span>
              <span>2. Course List</span>
              <span>3. Course List</span>
              <span>4. Course List</span>
              <span>5. Course List</span>
              <span>6. Course List</span>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default withRouter(Home);
