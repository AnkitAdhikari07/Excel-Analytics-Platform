import React from 'react';
import styles from './AdminDashboard.module.css';

const users = [
  { username: 'john_doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { username: 'jane_smith', email: 'jane@example.com', role: 'User', status: 'active' },
  { username: 'mike_wilson', email: 'mike@example.com', role: 'User', status: 'inactive' },
  { username: 'sarah_jones', email: 'sarah@example.com', role: 'User', status: 'active' },
  { username: 'david_brown', email: 'david@example.com', role: 'User', status: 'active' },
];

const AdminUsers = () => (
  <div style={{padding: '2rem'}}>
    <h2>Users Management</h2>
    <div className={styles.tableWrapper}>
      <table className={styles.responsiveTable} style={{width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem'}}>
        <thead>
          <tr style={{background: '#f6f8fa'}}>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Username</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Email</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Role</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Status</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.username} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '0.7rem'}}>{user.username}</td>
              <td style={{padding: '0.7rem'}}>{user.email}</td>
              <td style={{padding: '0.7rem'}}>{user.role}</td>
              <td style={{padding: '0.7rem'}}>
                <span style={{color: user.status === 'active' ? '#22c55e' : '#64748b', fontWeight: 500}}>{user.status}</span>
              </td>
              <td style={{padding: '0.7rem'}}>
                <button style={{marginRight: '0.5rem', color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer'}}>Edit</button>
                <button style={{color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminUsers; 