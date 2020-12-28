import React from 'react';
import NavBar from '../../NavBar/NavBar';
import { withRouter } from 'react-router-dom';
import './about.css';

function About() {
  return (
    <div>
      <NavBar />
      <div className='aboutPage'>
        <div className='aboutPart'>
          <h1>About</h1>
          <div className='aboutText'>
            <p>
              DevGuide is a website that help people<br></br> to have{' '}
              <b>learning path</b> on Computer Science.
            </p>
          </div>
        </div>
        <div className='contactPart'>
          <h1>Contact</h1>
          <div className='emailContact'>
            <p>Email : farhandewanta11@gmail.com</p>
            <p>Email : etrnal70@gmail.com</p>
            <p>Email : akbarma2002@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(About);
