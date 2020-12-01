import React from 'react';
import { Link } from 'react-router-dom';

export default function EditCourse() {
  return (
    <div>
      <Link to='/admin'>
        <button>Back</button>
      </Link>
      <br></br>
      This is Page to Edit Course
    </div>
  );
}
