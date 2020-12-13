import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css';

export default function AdminHome() {
  return (
    <div className='adminHome'>
      <div className='page-header'>
        <span className='page-title'>DevGuide Admin</span>
      </div>
      <div className='page-content'>
        <div className='page-link'>
          <h1>Hello, Admin</h1>
          <br></br>
          <Link to='/admin/add-course'>
            <button className='add-button'>Add Course</button>
          </Link>
          <br></br>
          <br></br>
          <Link to='/admin/edit-course'>
            <button className='edit-button'>Edit Course</button>
          </Link>
          <br></br>
          <br></br>
          <Link to='/'>
            <button className='logout-button'>Log Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
