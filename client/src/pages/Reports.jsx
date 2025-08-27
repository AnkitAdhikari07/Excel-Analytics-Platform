import React from 'react';
import styles from './Report.module.css';

// Mock user data
const userReports = [
  { name: 'Sales_Q1.xlsx', type: 'Excel File', uploaded: '2025-07-10', status: 'Analyzed', download: true },
  { name: 'Inventory_May.xlsx', type: 'Excel File', uploaded: '2025-07-12', status: 'Analyzed', download: true },
  { name: 'HR_Report.xlsx', type: 'Excel File', uploaded: '2025-07-14', status: 'Processing', download: false },
];

const recentActivity = [
  { action: 'Uploaded', file: 'HR_Report.xlsx', date: '2025-07-14' },
  { action: 'Downloaded', file: 'Sales_Q1.xlsx', date: '2025-07-13' },
  { action: 'Viewed', file: 'Inventory_May.xlsx', date: '2025-07-12' },
];

const Reports = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Your Reports</h2>
    {/* Summary Section */}
    <div className={styles.summary}>
      <div className={styles.summaryCard}>
        <div className={styles.summaryLabel}>Total Uploads</div>
        <div className={`${styles.summaryValue} ${styles.valueUploads}`}>{userReports.length}</div>
      </div>
      <div className={styles.summaryCard}>
        <div className={styles.summaryLabel}>Analyzed Files</div>
        <div className={`${styles.summaryValue} ${styles.valueAnalyzed}`}>{userReports.filter(r => r.status === 'Analyzed').length}</div>
      </div>
      <div className={styles.summaryCard}>
        <div className={styles.summaryLabel}>Processing</div>
        <div className={`${styles.summaryValue} ${styles.valueProcessing}`}>{userReports.filter(r => r.status === 'Processing').length}</div>
      </div>
    </div>
    {/* Uploaded Files Table */}
    <div className={styles.tableSection}>
      <h3 className={styles.tableTitle}>Uploaded Files</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Type</th>
            <th>Uploaded At</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userReports.map((report) => (
            <tr key={report.name}>
              <td>{report.name}</td>
              <td>{report.type}</td>
              <td>{report.uploaded}</td>
              <td>
                <span className={report.status === 'Analyzed' ? styles.statusAnalyzed : styles.statusProcessing}>{report.status}</span>
              </td>
              <td>
                <button className={styles.actionBtn}>View</button>
                {report.download && <button className={`${styles.actionBtn} ${styles.actionBtnDownload}`}>Download</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* Recent Activity */}
    <div className={styles.activitySection}>
      <h3 className={styles.activityTitle}>Recent Activity</h3>
      <ul className={styles.activityList}>
        {recentActivity.map((activity, idx) => (
          <li key={idx} className={styles.activityItem}>
            <span className={styles.activityAction}>{activity.action}</span>
            <span className={styles.activityFile}>{activity.file}</span>
            <span className={styles.activityDate}>{activity.date}</span>
          </li>
        ))}
      </ul>
    </div>
    {/* Placeholder for future charts/visualizations */}
    <div className={styles.chartPlaceholder}>
      (Charts and visual summaries coming soon...)
    </div>
  </div>
);

export default Reports; 