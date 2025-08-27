import React, { useState } from 'react';

const initialProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 890',
  role: 'User',
};

const Profile = () => {
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
    <div style={{ maxWidth: 400, margin: '2rem auto', background: '#fff', padding: '2rem', borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ marginBottom: '1.5rem', color: '#2563eb' }}>My Profile</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label>Name:</label>
        {editing ? (
          <input name="name" value={form.name} onChange={handleChange} style={{ width: '100%', background: '#f6f8fa', color: '#222', border: '1px solid #ccc', borderRadius: 4, padding: '0.5rem' }} />
        ) : (
          <div>{profile.name}</div>
        )}
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Email:</label>
        {editing ? (
          <input name="email" value={form.email} onChange={handleChange} style={{ width: '100%', background: '#f6f8fa', color: '#222', border: '1px solid #ccc', borderRadius: 4, padding: '0.5rem' }} />
        ) : (
          <div>{profile.email}</div>
        )}
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Phone:</label>
        {editing ? (
          <input name="phone" value={form.phone} onChange={handleChange} style={{ width: '100%', background: '#f6f8fa', color: '#222', border: '1px solid #ccc', borderRadius: 4, padding: '0.5rem' }} />
        ) : (
          <div>{profile.phone}</div>
        )}
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <label>Role:</label>
        <div>{profile.role}</div>
      </div>
      {editing ? (
        <div>
          <button onClick={handleSave} style={{ marginRight: 8, background: '#2563eb', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: 4 }}>Save</button>
          <button onClick={handleCancel} style={{ background: '#eee', color: '#333', border: 'none', padding: '0.5rem 1rem', borderRadius: 4 }}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleEdit} style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: 4 }}>Edit Profile</button>
      )}
    </div>
  );
};

export default Profile;
