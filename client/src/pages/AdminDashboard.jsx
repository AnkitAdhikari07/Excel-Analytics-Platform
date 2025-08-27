import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminTopbar from '../components/AdminTopbar';
import styles from './AdminDashboard.module.css';

const AdminDashboard = ({ onLogout }) => {
  // Dummy user for avatar
  const user = { name: 'Alex' };

  return (
    <div className={styles.adminLayout}>
      <AdminSidebar />
      <div className={styles.adminMain}>
        <AdminTopbar user={user} onLogout={onLogout} />
        <main className={styles.adminContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard; 