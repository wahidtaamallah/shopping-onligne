import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from 'store/user/actions';

import { Error } from 'components/shared';

const Signup = ({ location, user, error, register }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const history = useHistory();

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (user) {
      history.push(redirect);
    }
  }, [user, history, redirect]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) setMessage('Passwords do not match!');
    else {
      register(name, email, password);
    }
  };

  return (
    <div className='auth'>
      <div className='auth__container'>
        <h1>Sign Up</h1>
        {error && <Error error={error} />}
        {message && <Error error={message} />}
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
            Sign Up
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={() => history.push('/signin')}
          className='auth__registerButton'
        >
          Sign Into your Account
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userApp.user,
  error: state.userApp.error,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
