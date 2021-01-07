import React, { useState, useEffect } from 'react';
import NavBar from '../../NavBar/NavBar';
import { Link, withRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './profile.css';
import {fetchGetProfile} from  "../../../redux/";
import { connect } from "react-redux";

function Profile({ data, userData, fetchGetProfile }) {


  useEffect(() => {
    fetchGetProfile(userData.data.Authorization)
  }, []);

  return (
    <div>
      <NavBar />
      <div className='profile-page'>
        <IconContext.Provider value={{ size: '300px' }}>
          <div className='profile-content'>
            <h1>User Info</h1>
            <div className='profile-detail'>
              <h3>Fullname : {data.data.fullname}</h3>
              <h3>Username : {data.data.username}</h3>
              <h3>Email : {data.data.email}</h3>
              <h3>Interest : {data.data.interest}</h3>
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
                  <button className='LogOutButton'>
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

const mapStateToProps = (state) => {
  return {
    data: state.profile,
    userData: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetProfile: (headers) => dispatch(fetchGetProfile(headers)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);