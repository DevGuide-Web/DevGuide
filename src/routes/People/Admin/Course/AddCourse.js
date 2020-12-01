import React from 'react';
import { Link } from 'react-router-dom';

export default function AddCourse() {
  return (
    <div>
      <Link to='/admin'>
        <button>Back</button>
      </Link>
      <br></br>
      This is Page to Add Course
    </div>
  );
}
