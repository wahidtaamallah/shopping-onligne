import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  HomeIcon,
  ShoppingCartIcon,
  WebIcon,
  LockOpenIcon,
  VpnKeyIcon,
  ExitToAppIcon,
  PersonIcon,
} from 'components/icons';

const Sidenav = ({ open, onClose, user, cartItems, onLogout }) => {
  const userLinks = (
    <div className='sidenav__links'>
      <Link to='/' className='sidenav__link' onClick={() => onClose()}>
        <HomeIcon /> Home
      </Link>
      <NavLink
        activeClassName='active__link'
        to='/cart'
        className='sidenav__link'
        onClick={() => onClose()}
      >
        <ShoppingCartIcon /> Cart
        <span>
          ({Number(cartItems.reduce((acc, item) => acc + item.quantity, 0))})
        </span>
      </NavLink>
      <NavLink
        activeClassName='active__link'
        to='/browse'
        className='sidenav__link'
        onClick={() => onClose()}
      >
        <WebIcon /> Shope
      </NavLink>
      <NavLink
        to='/profile'
        className='sidenav__link'
        activeClassName='active__link'
        onClick={() => onClose()}
      >
        <PersonIcon />
        Profile
      </NavLink>
      <a
        href='/'
        className='sidenav__link'
        onClick={() => {
          onLogout();
          onClose();
        }}
      >
        <ExitToAppIcon />
        Logout
      </a>
    </div>
  );
  const guestLinks = (
    <div className='sidenav__links'>
      <Link to='/' className='sidenav__link' onClick={() => onClose()}>
        <HomeIcon /> Home
      </Link>
      <NavLink
        to='/cart'
        activeClassName='active__link'
        className='sidenav__link'
        onClick={() => onClose()}
      >
        <ShoppingCartIcon /> Cart
        <span>
          ({Number(cartItems.reduce((acc, item) => acc + item.quantity, 0))})
        </span>
      </NavLink>
      <NavLink
        activeClassName='active__link'
        to='/browse'
        className='sidenav__link'
        onClick={() => onClose()}
      >
        <WebIcon /> Shope
      </NavLink>
      <NavLink
        activeClassName='active__link'
        to='/signin'
        className='sidenav__link'
        onClick={() => onClose()}
      >
        <VpnKeyIcon /> Signin
      </NavLink>
      <NavLink
        activeClassName='active__link'
        to='/signup'
        className='sidenav__link'
        onClick={() => onClose()}
      >
        <LockOpenIcon />
        Signup
      </NavLink>
    </div>
  );
  return (
    <nav className={`sidenav ${open && 'sidenav__open'}`}>
      {user ? userLinks : guestLinks}
      <div className='sidenav__overlay' onClick={() => onClose()}></div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.userApp.user,
  cartItems: state.cartApp.cartItems,
});

export default connect(mapStateToProps, null)(Sidenav);
