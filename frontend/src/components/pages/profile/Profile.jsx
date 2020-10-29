import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProfile, updateUserProfile } from 'store/user/actions';
import { getUserOrders } from 'store/user-orders/action';

import { Spinner } from 'components/shared';
import ProfileOrders from './ProfileOrders';
import ProfileDetails from './ProfileDetails';

const Profile = ({
  loading,
  user,
  error,
  profile,
  getUserProfile,
  updateUserProfile,
  success,
  getUserOrders,
  userOrders,
  userOrdersLoading,
  userOrdersError,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    } else {
      if (!profile.name) {
        getUserProfile('profile');
        getUserOrders();
      } else {
        setName(profile.name);
        setEmail(profile.email);
      }
    }
  }, [user, history, profile, getUserProfile, getUserOrders]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) setMessage('Passwords do not match!');
    else updateUserProfile({ id: profile._id, name, email, password });
  };

  return (
    <>
      {loading || userOrdersLoading ? (
        <Spinner />
      ) : (
        <>
          <div className='profile'>
            <ProfileDetails
              name={name}
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              onSubmit={onSubmit}
              error={error}
              message={message}
              success={success}
              user={user}
            />
            <ProfileOrders userOrders={userOrders} error={userOrdersError} />
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userApp.user,
  profile: state.userApp.profile,
  error: state.userApp.error,
  loading: state.userApp.loading,
  success: state.userApp.success,
  userOrdersError: state.userOrdersApp.error,
  userOrdersLoading: state.userOrdersApp.loading,
  userOrders: state.userOrdersApp.userOrders,
});

const mapDispatchToProps = {
  getUserProfile,
  updateUserProfile,
  getUserOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
