import React, { useState } from 'react';

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <label>Password: </label>
      <input 
        type={showPassword ? 'text' : 'password'} 
        placeholder="Enter your password" 
      />

      <button 
        onClick={() => setShowPassword(!showPassword)}
        style={{ marginLeft: '10px' }}
      >
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default PasswordToggle;
