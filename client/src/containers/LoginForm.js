import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    submitted: false
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const loginRequest = () => {
    axios.post('/api/login', { user: { email: userInfo.email, password: userInfo.password }})
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error.response.data.error);
    })
  }

  const handleSubmit = e => {
    setUserInfo({ ...userInfo, submitted: true });
    loginRequest();
  }

  return (
    <>
    <form>
      <label htmlFor="email">Email</label>
      <input name="email" onChange={handleChange} type="email" placeholder="Email" />
      <label htmlFor="password">Password</label>
      <input name="password" onChange={handleChange} type="password" placeholder="Password" />
      <button type="button" onClick={handleSubmit}>Login</button>
    </form>
    </>
  )
};

export default LoginForm;
