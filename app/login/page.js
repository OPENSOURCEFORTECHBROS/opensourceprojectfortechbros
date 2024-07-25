"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#1f2937' }}>
      <div style={{ padding: '2rem', borderRadius: '1rem', width: '100%', maxWidth: '400px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Image src="/images/LOGO.png" alt="Techtonix Logo" width={100} height={100} />
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', color: '#ffffff' }}>Login to Techtonix</h1>
        <form onSubmit={handleLogin} style={{ marginTop: '1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#ffffff' }}>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', backgroundColor: '#4b5563', color: '#ffffff', border: 'none', borderRadius: '0.25rem', outline: 'none', boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.3)' }}
              required 
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#ffffff' }}>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', backgroundColor: '#4b5563', color: '#ffffff', border: 'none', borderRadius: '0.25rem', outline: 'none', boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.3)' }}
              required 
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#10b981', color: '#ffffff', fontWeight: 'bold', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', transition: 'background-color 0.3s' }}>Login</button>
        </form>
        <p style={{ marginTop: '1rem', textAlign: 'center', color: '#ffffff' }}>
          Don't have an account? <Link href="/signup"><p style={{ color: '#10b981' }}>Sign Up</p></Link>
        </p>
      </div>
    </div>
  );
}
