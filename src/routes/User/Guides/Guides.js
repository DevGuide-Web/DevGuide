import React from 'react';
import NavBar from '../../NavBar/NavBar';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
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
              <button className='crusialButton'>
                <AiIcons.AiFillAndroid />
                <Link to='/guides/course'>Android Developer</Link>
              </button>
              <br></br>
              <button className='crusialButton'>
                <FaIcons.FaGlobe />
                Website Developer
              </button>
              <br></br>
              <button className='crusialButton'>
                <GiIcons.GiGamepad />
                Game Developer
              </button>
              <br></br>
              <button className='crusialButton'>
                <AiIcons.AiFillApple />
                iOS Developer
              </button>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
