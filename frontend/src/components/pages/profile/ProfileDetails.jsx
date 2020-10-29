import React from 'react';

import { Error, Success } from 'components/shared';
import AdminMenu from '../admin/admin-menu/AdminMenu';

const ProfileDetails = ({
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  onSubmit,
  error,
  message,
  success,
  user,
}) => {
  return (
    <div className='auth__container profile-left'>
      <div>
        <h1>Profile Details</h1>
        {user?.isAdmin && <AdminMenu />}
      </div>
      {error && <Error error={error} />}
      {message && <Error error={message} />}
      {success && <Success msg='Update Successful' />}
      <form onSubmit={(e) => onSubmit(e)}>
        <h5>Username</h5>
        <input
          name='username'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h5>Email</h5>
        <input
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5>Password</h5>
        <input
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h5>Confirm Password</h5>
        <input
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type='submit' className='auth__signInButton'>
          Update Details
        </button>
      </form>
    </div>
  );
};

export default ProfileDetails;
