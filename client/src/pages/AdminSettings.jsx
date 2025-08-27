import React from 'react';

const settings = [
  { name: 'Theme', value: 'Light' },
  { name: 'Notifications', value: 'Enabled' },
  { name: 'Default Role', value: 'User' },
  { name: 'Session Timeout', value: '30 min' },
];

const AdminSettings = () => (
  <div style={{padding: '2rem'}}>
    <h2>Settings</h2>
    <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem'}}>
      <thead>
        <tr style={{background: '#f6f8fa'}}>
          <th style={{padding: '0.7rem', textAlign: 'left'}}>Setting Name</th>
          <th style={{padding: '0.7rem', textAlign: 'left'}}>Value</th>
          <th style={{padding: '0.7rem', textAlign: 'left'}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {settings.map((setting) => (
          <tr key={setting.name} style={{borderBottom: '1px solid #eee'}}>
            <td style={{padding: '0.7rem'}}>{setting.name}</td>
            <td style={{padding: '0.7rem'}}>{setting.value}</td>
            <td style={{padding: '0.7rem'}}>
              <button style={{color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer'}}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AdminSettings; 