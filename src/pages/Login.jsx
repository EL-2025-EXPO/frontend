import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
  const handleLoginSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    try {
      const response = await fetch('http://192.168.1.102:8000/auth/login/google-oauth2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const result = await response.json();
      console.log('Backend response:', result);
      // 로그인 후 리디렉션 등 처리
    } catch (error) {
      console.error('Error sending token to backend:', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => console.log('Login Failed')}
      />
    </div>
  );
}