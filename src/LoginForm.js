import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', emailOrPhone, password);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
  };

  const handleCreateNewPassword = () => {
    console.log('Creating new password');
  };

  return (
    <div className="login-container">
      <div className="login-card">                      
        <form>
          <div>
          
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder='Email Address or Phone Number'
            />
          </div>
          <div>
         
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
          </div>
          <button className="login-button" type="button" onClick={handleLogin}>Login</button>
        </form>
        <div className="additional-options">
          <span className="forgot-password" onClick={handleForgotPassword}>Forgotten Password?</span>
          <div className="line"></div>
          <button className="create-account" type="button" onClick={handleCreateNewPassword}>Create New Password</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
