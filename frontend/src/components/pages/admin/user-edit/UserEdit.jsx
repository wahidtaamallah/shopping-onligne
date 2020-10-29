import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from 'store/user/actions';
import { updateUser, resetUser } from 'store/user-update/actions';

import Checkbox from '@material-ui/core/Checkbox';
import { Spinner, Error } from 'components/shared';

const UserEdit = ({
  history,
  match,
  getUserProfile,
  profile,
  loading,
  error,
  updateUser,
  resetUser,
  successUserUpdate,
  loadingUserUpdate,
  errorUserUpdate,
}) => {
  const userId = match.params.id;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (successUserUpdate) {
      resetUser();
      history.push('/admin/userlist');
    } else {
      if (!profile.name || profile._id !== userId) getUserProfile(userId);
      else {
        setName(profile.name);
        setEmail(profile.email);
        setIsAdmin(profile.isAdmin);
      }
    }
    return () => {
      resetUser();
    };
  }, [profile, userId, getUserProfile, successUserUpdate, history, resetUser]);

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser({ _id: userId, name, email, isAdmin });
  };

  return (
    <>
      <p
        className='userEdit_nav'
        onClick={() => history.push('/admin/userlist')}
      >
        &#8592; Back to Users
      </p>
      <div className='auth__container center__container'>
        <h1>User Details</h1>
        {loadingUserUpdate && <Spinner />}
        {errorUserUpdate && <Error error={errorUserUpdate} />}
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error error={error} />
        ) : (
          <form onSubmit={onSubmit}>
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
            <div className='checkbox'>
              <h5>Is Admin</h5>
              <Checkbox
                checked={isAdmin}
                color='default'
                onChange={(event) => setIsAdmin(event.target.checked)}
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
            </div>

            <button type='submit' className='auth__signInButton'>
              Update
            </button>
          </form>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.userApp.profile,
  loading: state.userApp.loading,
  error: state.userApp.error,
  successUserUpdate: state.userUpdateApp.success,
  loadingUserUpdate: state.userUpdateApp.loading,
  errorUserUpdate: state.userUpdateApp.error,
});
const mapDispatchToProps = {
  getUserProfile,
  updateUser,
  resetUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
