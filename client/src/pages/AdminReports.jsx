import React from 'react';
import styles from './AdminDashboard.module.css';

const reports = [
  { name: 'Monthly User Growth', type: 'User', created: '2024-06-01', status: 'Ready' },
  { name: 'File Upload Summary', type: 'File', created: '2024-06-02', status: 'Ready' },
  { name: 'Storage Usage', type: 'System', created: '2024-06-03', status: 'Processing' },
  { name: 'Active Sessions', type: 'User', created: '2024-06-04', status: 'Ready' },
];

const AdminReports = () => (
  <div style={{padding: '2rem'}}>
    <h2>Reports</h2>
    <div className={styles.tableWrapper}>
      <table className={styles.responsiveTable} style={{width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem'}}>
        <thead>
          <tr style={{background: '#f6f8fa'}}>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Report Name</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Type</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Created At</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Status</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.name} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '0.7rem'}}>{report.name}</td>
              <td style={{padding: '0.7rem'}}>{report.type}</td>
              <td style={{padding: '0.7rem'}}>{report.created}</td>
              <td style={{padding: '0.7rem'}}>
                <span style={{color: report.status === 'Ready' ? '#22c55e' : '#f59e42', fontWeight: 500}}>{report.status}</span>
              </td>
              <td style={{padding: '0.7rem'}}>
                <button style={{marginRight: '0.5rem', color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer'}}>View</button>
                <button style={{color: '#10b981', background: 'none', border: 'none', cursor: 'pointer'}}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminReports; 