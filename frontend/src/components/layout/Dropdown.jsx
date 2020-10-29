import React from 'react';
import { Link } from 'react-router-dom';

import { PersonIcon, ExitToAppIcon, HomeIcon, WebIcon } from 'components/icons';

const Dropdown = ({ onClose, onLogout }) => {
  return (
    <div className='dropdown'>
      <ul>
        <li>
          <Link to='/' onClick={() => onClose(false)}>
            <HomeIcon /> Home
          </Link>
        </li>
        <li>
          <Link to='/profile' onClick={() => onClose(false)}>
            <PersonIcon /> Profile
          </Link>
        </li>
        <li>
          <Link to='/shope' onClick={() => onClose(false)}>
            <WebIcon /> Shope
          </Link>
        </li>
        <li>
          <a
            href='/'
            onClick={() => {
              onLogout();
              onClose();
            }}
          >
            <ExitToAppIcon />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
