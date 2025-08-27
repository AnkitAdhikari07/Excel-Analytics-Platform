import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const initialProfile = {
  name: 'Admin User',
  email: 'admin@example.com',
  phone: '+1 987 654 321',
  role: 'Admin',
  accessLevel: 'Super Admin',
};

const labelStyle = { fontWeight: 'bold', marginRight: 8, display: 'inline-block', minWidth: 110 };
const valueStyle = { color: '#222', wordBreak: 'break-word' };

const AdminProfile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setForm(profile);
    setEditing(false);
  };

  const handleSave = () => {
    setProfile(form);
    setEditing(false);
  };

  return (
    <div style={{ maxWidth: 480, minWidth: 320, margin: '2rem auto', background: '#fff', padding: '2.5rem 2rem', borderRadius: 18, boxShadow: '0 4px 24px #e0e7ef', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
        <AccountCircleIcon style={{ fontSize: 72, color: '#2563eb', marginBottom: 8 }} />
        <h2 style={{ marginBottom: 0, color: '#2563eb', fontWeight: 700, fontSize: 28, textAlign: 'center' }}>Admin Profile</h2>
      </div>
      <div style={{ width: '100%', maxWidth: 340, margin: '0 auto' }}>
        <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span style={labelStyle}>Name:</span>
          {editing ? (
            <input name="name" value={form.name} onChange={handleChange} style={{ ...valueStyle, width: '100%', background: '#f6f8fa', border: '1px solid #ccc', borderRadius: 4, padding: '0.5rem' }} />
          ) : (
            <span style={valueStyle}>{profile.name}</span>
          )}
        </div>
        <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span style={labelStyle}>Email:</span>
          {editing ? (
            <input name="email" value={form.email} onChange={handleChange} style={{ ...valueStyle, width: '100%', background: '#f6f8fa', border: '1px solid #ccc', borderRadius: 4, padding: '0.5rem' }} />
          ) : (
            <span style={valueStyle}>{profile.email}</span>
          )}
        </div>
        <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span style={labelStyle}>Phone:</span>
          {editing ? (
            <input name="phone" value={form.phone} onChange={handleChange} style={{ ...valueStyle, width: '100%', background: '#f6f8fa', border: '1px solid #ccc', borderRadius: 4, padding: '0.5rem' }} />
          ) : (
            <span style={valueStyle}>{profile.phone}</span>
          )}
        </div>
        <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span style={labelStyle}>Role:</span>
          <span style={valueStyle}>{profile.role}</span>
        </div>
        <div style={{ marginBottom: 28, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span style={labelStyle}>Access Level:</span>
          {editing ? (
            <input name="accessLevel" value={form.accessLevel} onChange={handleChange} style={{ ...valueStyle, width: '100%', background: '#f6f8fa', border: '1px solid #ccc', borderRadius: 4, padding: '0.5rem' }} />
          ) : (
            <span style={valueStyle}>{profile.accessLevel}</span>
          )}
        </div>
        <div style={{ textAlign: 'center' }}>
          {editing ? (
            <>
              <button onClick={handleSave} style={{ marginRight: 10, background: '#2563eb', color: '#fff', border: 'none', padding: '0.6rem 1.4rem', borderRadius: 6, fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Save</button>
              <button onClick={handleCancel} style={{ background: '#eee', color: '#333', border: 'none', padding: '0.6rem 1.4rem', borderRadius: 6, fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEdit} style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.6rem 1.4rem', borderRadius: 6, fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile; 