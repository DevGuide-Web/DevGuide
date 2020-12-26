import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import Logo from '../../img/devguide.png';
import './navbar.css';
import { IconContext } from 'react-icons';

export default function NavBar() {
  const [navControl, setNavControl] = useState(false);

  const navChange = () => setNavControl(!navControl);

  return (
    <div>
      <div className='navbar'>
        <Link className='nav-icon'>
          <FaIcons.FaBars onClick={navChange} />
        </Link>
        <span className='title-nav-app'>DevGuide</span>
      </div>
      <IconContext.Provider value={{ color: 'fff' }}>
        <nav className={navControl ? 'menu-nav active' : 'menu-nav'}>
          <ul className='navbar-list'>
            <li className='navbar-close'>
              <Link className='nav-icon'>
                <AiIcons.AiOutlineClose onClick={navChange} />
              </Link>
            </li>
            <br></br>
            <br></br>
            <li className='navbar-items'>
              <img src={Logo} width='200'></img>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li className='navbar-items'>
              <Link to='/home'>
                <AiIcons.AiFillHome />
                <span>Home</span>
              </Link>
            </li>
            <li className='navbar-items'>
              <Link to='/guides'>
                <FaIcons.FaBookOpen />
                <span>Guides</span>
              </Link>
            </li>
            <li className='navbar-items'>
              <Link to='/profile'>
                <AiIcons.AiFillProfile />
                <span>Profile</span>
              </Link>
            </li>
            <li className='navbar-items'>
              <Link to='/feedback'>
                <MdIcons.MdFeedback />
                <span>Feedback</span>
              </Link>
            </li>
            <li className='navbar-items'>
              <Link to='/about'>
                <BsIcons.BsFillInfoCircleFill />
                <span>About</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}
