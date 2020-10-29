import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from 'store/user/actions';

import { Link } from 'react-router-dom';
import {
  AddShoppingCartIcon,
  MenuIcon,
  CloseIcon,
  ArrowDropDownIcon,
} from 'components/icons';

import logo from 'assets/img/logo.gif';
import Sidenav from './Sidenav';
import Dropdown from './Dropdown';
import Search from './Search';

const Navbar = ({ cartItems, user, logoutUser, cart }) => {
  const [openSidenav, setOpenSidenav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const onToggle = () => setOpenSidenav((prevState) => !prevState);
  const onClose = () => setOpenSidenav(false);

  const onLogout = () => logoutUser();

  cart.itemsLength = Number(
    cartItems.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <>
      <nav className='navbar'>
        <div className='navbar__menu-wrapper' onClick={onToggle}>
          {openSidenav ? (
            <CloseIcon className='navbar__menu-icon' />
          ) : (
            <MenuIcon className='navbar__menu-icon' />
          )}
        </div>
        <Link to='/'>
          <img src={logo} alt='Univer de Foot-logo' className='navbar__logo' />
        </Link>
        <Search />

        <div className='navbar__list'>
          <div className='navbar__option navbar__link'>
            <span className='navbar__option-one'>
              {user ? (
                <span className='navbar_username'>Welcome {user.name}</span>
              ) : (
                <>
                  <Link to='/signup'>Signup</Link> /
                  <Link to='/signin'>Signin</Link>
                </>
              )}
            </span>
            {user && (
              <span
                onClick={() => setOpenDropdown(!openDropdown)}
                className='navbar__option-two'
              >
                Account & Lists <ArrowDropDownIcon />
              </span>
            )}
          </div>
          <Link to='/cart' className='navbar__link'>
            <div className='navbar__option-icons'>
              <div className='navbar__option-cart-number'>
                <span>{cart.itemsLength}</span>
              </div>
              <AddShoppingCartIcon className='navbar__option-cart-icon' />
              <span className='navbar__option-cart'>Cart</span>
            </div>
          </Link>
        </div>
      </nav>
      <Sidenav open={openSidenav} onClose={onClose} onLogout={onLogout} />
      {openDropdown && (
        <Dropdown onClose={setOpenDropdown} onLogout={onLogout} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartApp.cartItems,
  user: state.userApp.user,
  cart: state.cartApp,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
