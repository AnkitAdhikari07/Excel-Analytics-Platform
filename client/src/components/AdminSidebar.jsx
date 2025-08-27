import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from '../pages/AdminDashboard.module.css';

const links = [
  { to: '/admin', label: 'Dashboard Overview', icon: <DashboardIcon /> },
  { to: '/admin/users', label: 'Users', icon: <PeopleIcon /> },
  { to: '/admin/files', label: 'Uploaded Files', icon: <InsertDriveFileIcon /> },
  { to: '/admin/reports', label: 'Reports', icon: <BarChartIcon /> },
  { to: '/admin/settings', label: 'Settings', icon: <SettingsIcon /> },
  { to: '/admin/profile', label: 'Profile', icon: <AccountCircleIcon /> },
];

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={collapsed ? styles.sidebarCollapsed : styles.sidebar}>
      <button className={styles.sidebarHamburger} onClick={() => setCollapsed(v => !v)}>
        <MenuIcon />
      </button>
      <div className={styles.sidebarLogo}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="8" width="8" height="16" rx="2" fill="#2563eb"/>
          <rect x="12" y="4" width="8" height="24" rx="2" fill="#38bdf8"/>
          <rect x="22" y="12" width="8" height="8" rx="2" fill="#6366f1"/>
        </svg>
        {!collapsed && <span className={styles.sidebarAppName}>ExcelAnalytics</span>}
      </div>
      <nav className={styles.sidebarNav}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/admin'}
            className={({ isActive }) =>
              isActive ? `${styles.sidebarLink} ${styles.active}` : styles.sidebarLink
            }
          >
            <span className={styles.sidebarIcon}>{link.icon}</span>
            {!collapsed && <span>{link.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar; 