import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import {
  // SiLinkedin,
  //  SiGithub,
  SiMinutemailer,
} from 'react-icons/si';
import { HiMenuAlt3 } from 'react-icons/hi';
type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className='nav-bar  row-between '>
      <h1 className='nav-bar__brand'>Bright Devs</h1>
      <nav className='nav-bar__nav'>
        <ul className='row-start'>
          <li>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog' className='nav-link'>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' className='nav-link'>
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>

      <ul className='nav-bar__links'>
        {/* <li>
        <a
          href='https://www.linkedin.com/in/edgar-rojas-a81689169/'
          rel='noopener noreferrer'
        >
          <SiLinkedin className='icon' />
        </a>
      </li>
      <li>
        <a
          href='https://github.com/brightdevs'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiGithub className='icon' />
        </a>
      </li> */}
        <li>
          <a
            href='mailto:edgar@brightdevs.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiMinutemailer className='icon' />
          </a>
        </li>
      </ul>
      <HiMenuAlt3 className='nav-bar__burger-icon' />
    </header>
  );
};

export default NavBar;
