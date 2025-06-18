import React from 'react';
import Login from '../component/login';
;
 // ध्यान दें सही relative path

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <Login />
    </div>
  );
};

export default LoginPage;
