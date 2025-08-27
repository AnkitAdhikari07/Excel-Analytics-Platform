import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const DEMO_CREDENTIALS = {
  email: 'demo@gmail.com',
  password: 'demo@123',
  role: 'user',
};

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: '', password: '', role: 'user' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    if (e) e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please enter both email and password.');
      return;
    }
    // Here you would handle authentication logic
    if (form.role === 'admin') {
      onLogin && onLogin({ name: 'Admin', email: form.email, role: 'admin' });
    } else if (
      form.email === DEMO_CREDENTIALS.email &&
      form.password === DEMO_CREDENTIALS.password &&
      form.role === 'user'
    ) {
      onLogin && onLogin({ name: 'Demo User', email: form.email, role: 'user' });
    } else {
      onLogin && onLogin({ name: form.email.split('@')[0], email: form.email, role: form.role });
    }
  };

  const handleDemoLogin = () => {
    setForm(DEMO_CREDENTIALS);
    setTimeout(() => {
      handleSubmit();
    }, 200);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          autoComplete="username"
        />
        <label className={styles.label} htmlFor="password">Password</label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          autoComplete="current-password"
        />
        <label className={styles.label} htmlFor="role">Role</label>
        <select
          className={styles.roleSelect}
          id="role"
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {error && <div className={styles.error}>{error}</div>}
        <button className={styles.button} type="submit">Login</button>
        
        <div className={styles.text}>
          Don't have an account?
          <Link to="/signup" className={styles.link}>Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
