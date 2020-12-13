import React from 'react';
import NavBar from '../../../../components/NavBar';
import './about.css';

export default function About() {
  return (
    <div>
      <NavBar />
      <div className='aboutPage'>
        <div className='aboutPart'>
          <h1>About</h1>
          <p>
            DevGuide is a Web Application <br></br> that help Developer to have
            Learning Path
          </p>
        </div>
        <div className='contactPart'>
          <h1>Contact</h1>
          <div className='emailContact'>
            <p>Email : farhandewanta@gmail.com</p>
            <p>Email : etrnal70@gmail.com</p>
            <p>Email : akbarma2002@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
