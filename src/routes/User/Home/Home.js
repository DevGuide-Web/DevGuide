import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import NavBar from '../../NavBar/NavBar';
import { withRouter } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './home.css';

function Home({ data }) {
  return (
    <div>
      <NavBar />
      <div className='home-content'>
        <IconContext.Provider value={{ size: '180px' }}>
          <div className='home-profile'>
            <h1 className='welcomeTitle'>Welcome to DevGuide</h1>
            <FaIcons.FaUserCircle />
            <h1>Hello, {data.username}</h1>
          </div>
          <div className='course-control'>
            <h1>Latest Course</h1>
            <ol className='courseList'>
              <li>
                <a>Course List</a>
              </li>
              <li>
                <a>Course List</a>
              </li>
              <li>
                <a>Course List</a>
              </li>
              <li>
                <a>Course List</a>
              </li>
              <li>
                <a>Course List</a>
              </li>
            </ol>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.login.data,
  };
};

export default connect(mapStateToProps)(Home);
