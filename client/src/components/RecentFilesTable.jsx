import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../pages/AdminDashboard.module.css';

const mockFiles = [
  { filename: 'Sales_Q1_2024.xlsx', uploadedBy: 'john_doe', date: '2024-02-10', size: '2.3 MB' },
  { filename: 'Inventory_Report.xlsx', uploadedBy: 'jane_smith', date: '2024-02-12', size: '1.8 MB' },
  { filename: 'HR_Data.xlsx', uploadedBy: 'mike_wilson', date: '2024-02-15', size: '3.1 MB' },
  { filename: 'Financial_Summary.xlsx', uploadedBy: 'sarah_jones', date: '2024-02-18', size: '4.2 MB' },
  { filename: 'Marketing_Analytics.xlsx', uploadedBy: 'david_brown', date: '2024-02-20', size: '2.7 MB' },
];

const RecentFilesTable = () => (
  <div className={styles.tableCard}>
    <div className={styles.tableHeader}>
      <span>Recent Files</span>
    </div>
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Uploaded By</th>
            <th>Date</th>
            <th>File Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockFiles.map((file, idx) => (
            <tr key={file.filename}>
              <td>{file.filename}</td>
              <td>{file.uploadedBy}</td>
              <td>{file.date}</td>
              <td>{file.size}</td>
              <td>
                <button className={styles.tableActionBtn} title="View"><VisibilityIcon fontSize="small" /></button>
                <button className={styles.tableActionBtn} title="Delete"><DeleteIcon fontSize="small" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RecentFilesTable; 