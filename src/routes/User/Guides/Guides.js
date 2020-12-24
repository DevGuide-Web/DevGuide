import React from 'react';
import NavBar from '../../NavBar/NavBar';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './guides.css';

export default function Guides() {
  return (
    <div>
      <NavBar />
      <div className='guides-page'>
        <div className='guides-content'>
          <div className='guides-title'>
            <h1>Developer Roadmaps</h1>
          </div>
          <IconContext.Provider value={{ size: '30px' }}>
            <div className='guides-detail'>
              <Link to='/guides/android'>
                <button className='crusialButton'>
                  <AiIcons.AiFillAndroid />
                  Android Developer
                </button>
              </Link>
              <br></br>
              <Link to='/guides/website'>
                <button className='crusialButton'>
                  <FaIcons.FaGlobe />
                  Website Developer
                </button>
              </Link>
              <br></br>
              <Link to='/guides/ios'>
                <button className='crusialButton'>
                  <AiIcons.AiFillApple />
                  iOS Developer
                </button>
              </Link>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
