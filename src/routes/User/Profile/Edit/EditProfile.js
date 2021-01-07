import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import NavBar from '../../.././NavBar/NavBar';
import { Link, withRouter } from 'react-router-dom';
import './editprofile.css';
import * as BiIcons from 'react-icons/bi';
import { fetchPostProfile } from "../../../../redux/";
import { IconContext } from 'react-icons';
import { connect } from "react-redux";


function EditProfile({userData, data, fetchPostProfile, history }) {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [interest, setInterest] = useState("");
  const { Error, status_biodata } = data.data;
  

  useEffect(() => {
    if (status_biodata) {
      history.push("/profile");
      window.location.reload()
    }
  }, [history, status_biodata]);

  const confirmEdit = () => {
    fetchPostProfile(userData.data.Authorization, email, username, fullname, interest)
  };

  return (
    <div>
      <NavBar />
      <div className='editprofile-page'>
        <IconContext.Provider value={{ size: '200px' }}>
          <div className='editprofile-content'>
            <Link to='/profile'>
              <button className='crusialButton'>Back</button>
            </Link>
            <div className='editprofile-detail'>
              {Error && <h4>{Error}</h4>}
              <BiIcons.BiUserCircle />
              <h3>Fullname</h3>
              {data.data.fullname && <h4>{data.data.fullname}</h4>}
              <input
                type='text'
                placeholder='Type Here!'
                className='editInput'
                onChange={event => {
                  setFullname(event.target.value);
                }}
              ></input>
              <h3>Username</h3>
              {data.data.username && <h4>{data.data.username}</h4>}
              <input
                type='text'
                placeholder='Type Here!'
                className='editInput'
                onChange={event => {
                  setUsername(event.target.value);
                }}
              ></input>
              <h3>Email</h3>
              {data.data.email && <h4>{data.data.email}</h4>}
              <input
                type='text'
                placeholder='Type Here!'
                className='editInput'
                onChange={event => {
                  setEmail(event.target.value);
                }}
              ></input>
              <h3>Interest</h3>
              {data.data.interest && <h4>{data.data.interest}</h4>}
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

const mapStateToProps = (state) => {
  return {
    data: state.postProfile,
    userData: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostProfile: (headers, email, username, fullname, interest) => dispatch(fetchPostProfile(headers, email, username, fullname, interest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
