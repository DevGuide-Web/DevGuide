import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminHome() {
  return (
    <div>
      This is Admin Home Page
      <br></br>
      <Link to='/admin/add-course'>
        <button>Add Course</button>
      </Link>
      <Link to='/admin/edit-course'>
        <button>Edit Course</button>
      </Link>
      <br></br>
      <Link to='/'>
        <button>Log Out</button>
      </Link>
    </div>
  );
}
