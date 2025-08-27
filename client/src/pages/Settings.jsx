import React, { useState } from 'react';

const initialSettings = [
  { name: 'Theme', value: 'Light' },
  { name: 'Notifications', value: 'Enabled' },
];

const Settings = () => {
  const [settings, setSettings] = useState(initialSettings);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (idx) => {
    setEditingIndex(idx);
    setEditValue(settings[idx].value);
  };

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSave = (idx) => {
    const updated = settings.map((s, i) =>
      i === idx ? { ...s, value: editValue } : s
    );
    setSettings(updated);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  return (
    <div style={{padding: '2rem', maxWidth: 500, margin: '2rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee'}}>
      <h2 style={{color: '#2563eb'}}>Settings</h2>
      <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem'}}>
        <thead>
          <tr style={{background: '#f6f8fa'}}>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Setting Name</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Value</th>
            <th style={{padding: '0.7rem', textAlign: 'left'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {settings.map((setting, idx) => (
            <tr key={setting.name} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '0.7rem'}}>{setting.name}</td>
              <td style={{padding: '0.7rem'}}>
                {editingIndex === idx ? (
                  // Use dropdowns for value editing
                  setting.name === 'Theme' ? (
                    <select value={editValue} onChange={handleChange} style={{width: '100%', background: '#f6f8fa', color: '#222', border: '1px solid #ccc', borderRadius: 4, padding: '0.5rem'}}>
                      <option value="Light">Light</option>
                      <option value="Dark">Dark</option>
                    </select>
                  ) : setting.name === 'Notifications' ? (
                    <select value={editValue} onChange={handleChange} style={{width: '100%', background: '#f6f8fa', color: '#222', border: '1px solid #ccc', borderRadius: 4, padding: '0.5rem'}}>
                      <option value="Enabled">Enabled</option>
                      <option value="Disabled">Disabled</option>
                    </select>
                  ) : (
                    <input value={editValue} onChange={handleChange} style={{width: '100%', background: '#f6f8fa', color: '#222', border: '1px solid #ccc', borderRadius: 4, padding: '0.5rem'}} />
                  )
                ) : (
                  setting.value
                )}
              </td>
              <td style={{padding: '0.7rem'}}>
                {editingIndex === idx ? (
                  <>
                    <button onClick={() => handleSave(idx)} style={{color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', marginRight: 8}}>Save</button>
                    <button onClick={handleCancel} style={{color: '#888', background: 'none', border: 'none', cursor: 'pointer'}}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(idx)} style={{color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer'}}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Settings; 