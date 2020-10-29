import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser } from 'store/user/actions';

import { Error, Spinner } from 'components/shared';

const Signin = ({ location, history, loginUser, user, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (user) {
      history.push(redirect);
    }
  }, [user, history, redirect]);

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div className='auth'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error && <Error error={error} />}
          <div className='auth__container'>
            <h1>Sign In</h1>
            <form onSubmit={onSubmit}>
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
              <button type='submit' className='auth__signInButton'>
                Sign In
              </button>
            </form>

            <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
            <button
              onClick={() =>
                history.push(
                  `${redirect ? `/signup?redirect=${redirect}` : '/signup'}`
                )
              }
              className='auth__registerButton'
            >
              Create your Amazon Account
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userApp.user,
  loading: state.userApp.loading,
  error: state.userApp.error,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
