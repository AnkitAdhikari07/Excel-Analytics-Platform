import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    // Here you would handle signup logic
    alert(`Signed up as ${form.role}: ${form.name} (${form.email})`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sign Up</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          autoComplete="name"
        />
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
          placeholder="Create a password"
          autoComplete="new-password"
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
          {/* <option value="admin">Admin</option> */}
        </select>
        {error && <div className={styles.error}>{error}</div>}
        <button className={styles.button} type="submit">Sign Up</button>
        <div className={styles.text}>
          Already have an account?
          <Link to="/login" className={styles.link}>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
