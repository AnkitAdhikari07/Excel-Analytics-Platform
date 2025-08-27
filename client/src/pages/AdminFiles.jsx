import React from 'react';
import styles from './AdminDashboard.module.css';

const files = [
  { filename: 'Sales_Q1_2024.xlsx', uploadedBy: 'john_doe', date: '2024-02-10', size: '2.3 MB' },
  { filename: 'Inventory_Report.xlsx', uploadedBy: 'jane_smith', date: '2024-02-12', size: '1.8 MB' },
  { filename: 'HR_Data.xlsx', uploadedBy: 'mike_wilson', date: '2024-02-15', size: '3.1 MB' },
  { filename: 'Financial_Summary.xlsx', uploadedBy: 'sarah_jones', date: '2024-02-18', size: '4.2 MB' },
  { filename: 'Marketing_Analytics.xlsx', uploadedBy: 'david_brown', date: '2024-02-20', size: '2.7 MB' },
];

const AdminFiles = () => (
  <div style={{padding: '2rem'}}>
    <h2>Uploaded Files</h2>
    <div className={styles.tableWrapper}>
      <table className={styles.responsiveTable} style={{width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem'}}>
        <thead>
          <tr style={{background: '#f6f8fa'}}>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Filename</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Uploaded By</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Date</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Size</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.filename} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '0.7rem'}}>{file.filename}</td>
              <td style={{padding: '0.7rem'}}>{file.uploadedBy}</td>
              <td style={{padding: '0.7rem'}}>{file.date}</td>
              <td style={{padding: '0.7rem'}}>{file.size}</td>
              <td style={{padding: '0.7rem'}}>
                <button style={{marginRight: '0.5rem', color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer'}}>View</button>
                <button style={{color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminFiles; 