// src/pages/Login.js
import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;