import React from 'react';
import NavBar from '../../../../components/NavBar';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className='home-page'>
        This is Home Page
        <Link to='/guides/course'>
          <button>Web Development</button>
        </Link>
      </div>
    </div>
  );
}
