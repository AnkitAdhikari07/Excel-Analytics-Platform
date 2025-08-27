import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../pages/AdminDashboard.module.css';

const mockUsers = [
  { username: 'john_doe', email: 'john@example.com', date: '2024-01-15', status: 'active' },
  { username: 'jane_smith', email: 'jane@example.com', date: '2024-01-20', status: 'active' },
  { username: 'mike_wilson', email: 'mike@example.com', date: '2024-01-25', status: 'inactive' },
  { username: 'sarah_jones', email: 'sarah@example.com', date: '2024-02-01', status: 'active' },
  { username: 'david_brown', email: 'david@example.com', date: '2024-02-05', status: 'active' },
];

const RecentUsersTable = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const filtered = statusFilter === 'all' ? mockUsers : mockUsers.filter(u => u.status === statusFilter);

  return (
    <div className={styles.tableCard}>
      <div className={styles.tableHeader}>
        <span>Recent Users</span>
        <select
          className={styles.tableFilter}
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Sign-up Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user, idx) => (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                <td>
                  <span className={user.status === 'active' ? styles.statusActive : styles.statusInactive}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button className={styles.tableActionBtn} title="Edit"><EditIcon fontSize="small" /></button>
                  <button className={styles.tableActionBtn} title="Delete"><DeleteIcon fontSize="small" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentUsersTable; 