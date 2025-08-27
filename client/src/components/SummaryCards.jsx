import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import StorageIcon from '@mui/icons-material/Storage';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import styles from '../pages/AdminDashboard.module.css';

const cards = [
  {
    label: 'Total Users',
    value: '1,247',
    icon: <PeopleIcon fontSize="large" />, 
    gradient: 'linear-gradient(90deg, #6366f1 0%, #2563eb 100%)',
  },
  {
    label: 'Files Uploaded',
    value: '892',
    icon: <InsertDriveFileIcon fontSize="large" />, 
    gradient: 'linear-gradient(90deg, #f472b6 0%, #f87171 100%)',
  },
  {
    label: 'Storage Used',
    value: '2.4 GB',
    icon: <StorageIcon fontSize="large" />, 
    gradient: 'linear-gradient(90deg, #38bdf8 0%, #06b6d4 100%)',
  },
  {
    label: 'Active Sessions',
    value: '89',
    icon: <TrendingUpIcon fontSize="large" />, 
    gradient: 'linear-gradient(90deg, #4ade80 0%, #22d3ee 100%)',
  },
];

const SummaryCards = () => (
  <div className={styles.summaryCards}>
    {cards.map((card, idx) => (
      <div
        key={card.label}
        className={styles.summaryCard}
        style={{ background: card.gradient }}
      >
        <div className={styles.summaryCardValue}>{card.value}</div>
        <div className={styles.summaryCardLabel}>{card.label}</div>
        <div className={styles.summaryCardIcon}>{card.icon}</div>
      </div>
    ))}
  </div>
);

export default SummaryCards; 