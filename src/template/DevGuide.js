import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import './basic.css';
import Logo from '../img/devguide.png';
import {doLogout} from '../redux';
import { connect } from 'react-redux';

function DevGuide({doLogout}) {

  useEffect(()=>
  doLogout()
  ,[])
  
  return (
    <div className='firstScreen'>
      <div className='logRoute'>
        <img src={Logo} height='250'></img>
        <br></br>
        <Link to='/login'>
          <button className='loginButton-Route'>
            Login
          </button>
        </Link>
        <br></br>
        <br></br>
        <Link to='/register'>
          <button className='registerButton-Route'>Register</button>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    doLogout: () => dispatch(doLogout())
  };
};

export default connect(null, mapDispatchToProps)(DevGuide)