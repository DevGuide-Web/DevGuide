import React from 'react';
import NavBar from '../../../../NavBar/NavBar';
import { Link } from 'react-router-dom';
import '../course.css';

function IOS() {
  return (
    <div>
      <NavBar />
      <div className='courseDiv'>
        <div className='courseDetail'>
          <h1>iOS Developer Guidelines</h1>
          <div className='subDetail'>
            <h3>Sub Bab</h3>
            <h3>Course you can get :</h3>
            <div className='articleDiv'>
              <h3>Article Based Course</h3>
            </div>
            <br></br>
            <div className='videoDiv'>
              <h3>Video Based Course</h3>
            </div>
            <br></br>
            <div className='sampleDiv'>
              <h3>Project/Sample Code</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='discussDiv'>
        <div className='discussDetail'>
          <h1>Discussion</h1>
        </div>
      </div>
    </div>
  );
}

export default IOS;
