import React from 'react';
import NavBar from '../../../../components/NavBar';
import { Link } from 'react-router-dom';

export default function Guides() {
  return (
    <div>
      <NavBar />
      <div className='guides-page'>
        This is Guides Page
        <br></br>
        <Link to='/guides/course'>
          <button>Web Development</button>
        </Link>
      </div>
    </div>
  );
}
